<?php
$files = array_diff(scandir('uploads'), array('.', '..'));
echo json_encode(['files' => $files]);
?>