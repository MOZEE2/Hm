<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/';
        $uploadFile = $uploadDir . basename($_FILES['file']['name']);
        
        if (move_uploaded_file($_FILES['file']['tmp_name'], $uploadFile)) {
            echo json_encode(['message' => 'Upload réussi !']);
        } else {
            echo json_encode(['message' => 'Erreur lors de l\'upload.']);
        }
    } else {
        echo json_encode(['message' => 'Aucun fichier n\'a été uploadé.']);
    }
}
?>