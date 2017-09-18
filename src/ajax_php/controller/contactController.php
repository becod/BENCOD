<?php
include('../core.php');
if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    if(isset($name)&&isset($email)&&isset($message)){
        $name = addslashes($name);
        $email = addslashes($email);
        $message = addslashes($message);
        $messageDate = date('Y-m-d');

        $query = new PDOconnect;
        $query -> queryList('INSERT INTO bd_clients(client_name,client_email,client_message,client_messagedate) VALUES (:name, :email, :message, :messageDate)', array(':name' => htmlentities($name), ':email' => htmlentities($email), ':message' => htmlentities($message), ':messageDate' => $messageDate));
        
        if ($query == true ){
            $destinatario = 'benyamin.valencia@gmail.com'; 
            $asunto = "Este mensaje es de prueba"; 
            $cuerpo = ' 
            <html> 
            <head> 
                <title>Prueba de correo</title> 
            </head> 
            <body> 
                <h1>Hola amigos!</h1> 
                <p> 
                <b>Bienvenidos a mi correo electrónico de prueba</b>. Estoy encantado de tener tantos lectores. Este cuerpo del mensaje es del artículo de envío de mails por PHP. Habría que cambiarlo para poner tu propio cuerpo. Por cierto, cambia también las cabeceras del mensaje. 
                </p> 
           </body> 
           </html>'; 

            //para el envío en formato HTML 
            $headers = "MIME-Version: 1.0\r\n"; 
            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

            //dirección del remitente 
            $headers .= "From: Benjamin E. Valencia <benyamin.valencia@gmail.com>\r\n"; 

            //dirección de respuesta, si queremos que sea distinta que la del remitente 
            //$headers .= "Reply-To: mariano@desarrolloweb.com\r\n"; 

            //ruta del mensaje desde origen a destino 
            $headers .= "Return-path: cosmopolita.ben@gmail.com\r\n"; 

            //direcciones que recibián copia 
            $headers .= "Cc: benvalencia290@gmail.com\r\n"; 

            //direcciones que recibirán copia oculta 
            $headers .= "Bcc: contact.benvalencia@gmail.com\r\n"; 

            mail($destinatario,$asunto,$cuerpo,$headers); 
            echo ' '.$name.' '.$email.' '.$message.' '.$messageDate;
        }
    } else {
        echo 'Hola inside';
    }
} else {
    echo 'Hola';
}
?>