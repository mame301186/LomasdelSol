<?php
//Llamando a los campos
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$cod_pais = $_POST['cod_pais'];
$cod_oper = $_POST['cod_oper'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$tipo_visitante = $_POST['tipo_visitante'];
$torre = $_POST['torre'];
$apto = $_POST['apto'];
$comentario = $_POST['comentario'];

//Datos para el correo
    //Mensaje o Carta
$destinatario = 'marquezm1986@gmail.com';
$asunto = 'Contacto desde nuestra web';

$mensaje = "Nombre de remitente: " . $nombre .  " \n";
$mensaje = "Apellido de remitente: " . $apellido .  " \n";
$mensaje .= "Su e-mail es: " . $correo . " \n";
$mensaje .= "Código de país: " . $cod_pais . " \n";
$mensaje .= "Código de operadora: " . $cod_oper . " \n";
$mensaje .= "Número telefónico: " . $telefono . " \n";
$mensaje .= "Tipo de visitante: " . $tipo_visitante . " \n";
$mensaje .= "Torre: " . $torre . " \n";
$mensaje .= "apto: " . $apto . " \n";
$mensaje .= "Mensaje: " . $comentario . " \n";
$mensaje = "Enviado el " . date('d/m/y' , time ());

//Mensaje o Carta
mail($destinatario, $asunto, $mensaje, utf8_decode($mensaje));

header("Location: index.html");
?>