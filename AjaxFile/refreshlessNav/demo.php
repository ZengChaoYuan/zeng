<?php
$value = $_GET['value'];
$str = '';
if ($value == 'news'){
    $str = "I'm news";
}else if($value == 'about') {
    $str = "I'm about";
}else if($value == 'contact') {
    $str = "I'm contact";
}
echo $str;
setcookie("name","aimee", time()+3600*24, "/08", ".localhost.com");

?>