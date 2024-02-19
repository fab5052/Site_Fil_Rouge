<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer les données du formulaire
    $name = isset($_POST["name"]) ? htmlspecialchars($_POST["name"]) : "";
    $email = isset($_POST["email"]) ? filter_var($_POST["email"], FILTER_SANITIZE_EMAIL) : "";
    $ownerEmail = isset($_POST["owner_email"]) ? filter_var($_POST["owner_email"], FILTER_SANITIZE_EMAIL) : "";
    $sitename = isset($_POST["sitename"]) ? htmlspecialchars($_POST["sitename"]) : "";

    // Valider les données (ajoutez des règles de validation selon vos besoins)
    if (empty($name) || empty($email) || empty($ownerEmail)) {
        echo json_encode(array("success" => false, "message" => "Veuillez remplir tous les champs."));
        exit;
    }

    // Envoyer un email ou effectuer d'autres opérations de traitement
    // ...

    // Répondre au client avec un message de succès
    echo json_encode(array("success" => true, "message" => "Formulaire soumis avec succès!"));
} else {
    // Répondre au client avec une erreur si la méthode n'est pas POST
    echo json_encode(array("success" => false, "message" => "Méthode non autorisée."));
}
?>