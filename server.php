<?php

$_POST = json_decode(file_get_contents("php://input"), true); //для работы с форматом JSON. Если FormData убрать
echo var_dump($_POST); 
