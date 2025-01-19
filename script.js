document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', document.getElementById('fileInput').files[0]);

    fetch('upload.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').textContent = data.message;
        loadFiles(); // Reload the file list
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('message').textContent = 'Erreur lors de l\'upload.';
    });
});

function loadFiles() {
    fetch('files.php')
    .then(response => response.json())
    .then(data => {
        const fileList = document.getElementById('fileList');
        fileList.innerHTML = '';
        data.files.forEach(file => {
            const link = document.createElement('a');
            link.href = `uploads/${file}`;
            link.textContent = file;
            link.target = '_blank';
            fileList.appendChild(link);
            fileList.appendChild(document.createElement('br'));
        });
    });
}

document.addEventListener('DOMContentLoaded', loadFiles);