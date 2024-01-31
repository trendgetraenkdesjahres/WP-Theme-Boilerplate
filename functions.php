<?php

define('THEME_DIR', dirname(__FILE__));

require 'inc/framework/framework.php';

foreach (glob('inc/functions/*.php') as $function_file) {
    require_once $function_file;
}
