<?php

namespace HC\Bundle\VendorBundle\Services\Mail;

class MailService
{

    public function sendMail($subject, $body)
    {
        $mail = new PHPMailer(); // create a new object
        $mail->IsSMTP(); // enable SMTP
        $mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPAuth = true; // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
        $mail->Host = "smtp.gmail.com";
        $mail->Port = 465; // or 587
        $mail->IsHTML(true);
        $mail->Username = "frizzmop@gmail.com";
        $mail->Password = "fbpwvalqdbmhygbd";
        $mail->SetFrom("frizzmop@gmail.com");
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress('shawnbeta@outlook.com');
        if(!$mail->Send())
            return array("success" => false, "message" => "Mailer Error: " . $mail->ErrorInfo);
        return array("success" => true);

    }

}