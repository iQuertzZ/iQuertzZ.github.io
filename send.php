<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    function clean_input($data) {
        return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
    }

    $name = clean_input($_POST['name']);
    $email = clean_input($_POST['email']);
    $subject = clean_input($_POST['subject']);
    $message = clean_input($_POST['message']);

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Adresse email invalide.";
        exit;
    }

    if (preg_match("/[\r\n]/", $email)) {
        echo "Tentative d'injection d'en-têtes détectée.";
        exit;
    }

    $to = "louis.edy@epitech.eu";
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $email_subject = "Nouveau message de contact : $subject";
    $email_body = "Nom: $name\n" .
                  "Email: $email\n\n" .
                  "Message:\n$message";

    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Message envoyé avec succès!";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>