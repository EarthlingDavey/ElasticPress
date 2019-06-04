<?php
/**
 * ElasticPress test functions
 *
 * @package elasticpress
 */

namespace ElasticPressTest\Functions;

use ElasticPress;

/**
 * Create a WP post and "sync" it to Elasticsearch. We are mocking the sync
 *
 * @param array $post_args
 * @param array $post_meta
 * @param int   $site_id
 * @since 0.9
 * @return int|WP_Error
 */
function create_and_sync_post( $post_args = array(), $post_meta = array(), $site_id = null ) {
	if ( null !== $site_id ) {
		switch_to_blog( $site_id );
	}

	$post_types       = ElasticPress\Indexables::factory()->get( 'post' )->get_indexable_post_types();
	$post_type_values = array_values( $post_types );

	$args = array(
		'post_status' => 'publish',
		'post_title'  => 'Test Post ' . time(),
	);

	if ( ! empty( $post_type_values ) ) {
		$args['post_type'] = $post_type_values[0];
	}

	$args = wp_parse_args( $post_args, $args );

	$post_id = wp_insert_post( $args );

	// Quit if we have a WP_Error object
	if ( is_wp_error( $post_id ) ) {
		return $post_id;
	}

	if ( ! empty( $post_meta ) ) {
		foreach ( $post_meta as $key => $value ) {
			// No need for sanitization here
			update_post_meta( $post_id, $key, $value );
		}
	}

	ElasticPress\Indexables::factory()->get( 'post' )->index( $post_id, true );

	if ( null !== $site_id ) {
		restore_current_blog();
	}

	return $post_id;
}

/**
 * Create posts for date query testing
 *
 * @since  3.0
 */
function create_date_query_posts() {
	$beginning_tz = date_default_timezone_get();

	date_default_timezone_set( 'America/Los_Angeles' ); // phpcs:ignore

	$post_date = strtotime( 'January 6th, 2012 11:59PM' );

	for ( $i = 0; $i <= 10; ++$i ) {

		create_and_sync_post(
			array(
				'post_title'    => 'post_title ' . $i,
				'post_content'  => 'findme',
				'post_date'     => date( 'Y-m-d H:i:s', strtotime( "-$i days", strtotime( "-$i hours", $post_date ) ) ),
				'post_date_gmt' => gmdate( 'Y-m-d H:i:s', strtotime( "-$i days", strtotime( "-$i hours", $post_date ) ) ),
			)
		);

		ElasticPress\Elasticsearch::factory()->refresh_indices();
	}

	date_default_timezone_set( $beginning_tz ); // phpcs:ignore
}

/**
 * Get all sites, count indexes
 *
 * @return array total index count with last blog id to manipulate blog with an index
 */
function count_indexes() {
	$sites = ElasticPress\Utils\get_sites();

	$last_blog_id_with_index = 0;

	$count_indexes = 0;
	foreach ( $sites as $site ) {
		if ( ElasticPress\Indexables::factory()->get( 'post' )->index_exists( $site['blog_id'] ) ) {
			$count_indexes++;
			$last_blog_id_with_index = $site['blog_id'];
		}
	}

	return array(
		'total_indexes'           => $count_indexes,
		'last_blog_id_with_index' => $last_blog_id_with_index,
	);
}