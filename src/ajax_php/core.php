<?php 
//CONECTION DATA
define('CON_HOST','mysql.hostinger.es');
define('CON_PORT', '3306');
define('CON_DB','u359605919_bd');
define('CON_USERNAME','u359605919_devop');
define('CON_PASSWORD','Ce0197de-63760');
define('CON_UTF','UTF8');

define('URL_BASE', 'http://localhost.org/phpExam/');

//GLOBALS
include('model/db_connect.php');

//sha1(); codificar;
//addslashes(); limpiar de injecciones para caracteres especiales
//htmlspecialchars();
//htmlentities(); limpiar de injecciones de Inputs

//PHP CONFIG FUNCTIONS
ini_set('display_errors', 0);

?>