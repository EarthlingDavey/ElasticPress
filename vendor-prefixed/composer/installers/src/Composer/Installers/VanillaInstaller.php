<?php
/**
 * @license MIT
 *
 * Modified by Taylor Lovett on 29-April-2024 using Strauss.
 * @see https://github.com/BrianHenryIE/strauss
 */

namespace ElasticPress\Vendor_Prefixed\Composer\Installers;

class VanillaInstaller extends BaseInstaller
{
    /** @var array<string, string> */
    protected $locations = array(
        'plugin'    => 'plugins/{$name}/',
        'theme'     => 'themes/{$name}/',
    );
}
