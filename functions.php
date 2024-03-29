<?php

/**
 * Path of theme directory with trailing slash.
 */
define('THEME_DIR', dirname(__FILE__) . '/');

require 'inc/framework/framework.php';

foreach (glob(THEME_DIR . 'inc/functions/*.php') as $function_file) {
    require_once $function_file;
}