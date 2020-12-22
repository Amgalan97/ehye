<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST["email"];


// Формирование самого письмаиз блока newsletter
$title = "Подписка на новости Ehya";
  $body = "
    <h2>Подписка на новости</h2>
    <b>mail:</b> $email<br>
  ";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'a.togosheev97@mail.ru'; // Логин на почте
    $mail->Password   = 'amchik9721'; // Пароль на почте
    $mail->Port       = 465;
    $mail->setFrom('a.togosheev97@mail.ru', 'Амгалан Тогошеев'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('amgalan693@gmail.com');


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Перенаправления на нужные страницы
header('Location: subscribe-thankyou.html');