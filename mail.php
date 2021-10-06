<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->IsHTML(true);
//from email
    $mail->setFrom('from@yourdomain.com','freelance');
//to email
    $mail->addAddress('example@mail.com');

    $mail->Subject = 'Theme of site';

    $body = '<h1>Start message</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Name:<strong> '.$_POST['name'].'<p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:<strong> '.$_POST['email'].'<p>';
    }
    if(trim(!empty($_POST['message']))){
        $body.='<p><strong>Message:<strong> '.$_POST['message'].'<p>';
    }

    if ($mail->send()){
        $message = 'success';
    }else{
        $message = 'error'
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);

?>