document.addEventListener('DOMContentLoaded', function() {
    const apiDataContainer = document.getElementById('apiDataContainer');
    const errorMessage = document.getElementById('errorMessage');

    // URL de la API de Rick and Morty
    const apiUrl = 'https://rickandmortyapi.com/api/character';

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayData(data.results);
        })
        .catch(error => {
            errorMessage.textContent = `Error al obtener datos: ${error.message}`;
        });

    function displayData(data) {
        data.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('api-data-item');

            const itemTitle = document.createElement('h3');
            itemTitle.textContent = item.name; // Nombre del personaje

            const itemImage = document.createElement('img');
            itemImage.src = item.image; // Imagen del personaje
            itemImage.alt = item.name;

            const itemStatus = document.createElement('p');
            itemStatus.textContent = `Status: ${item.status}`; // Estado del personaje

            itemDiv.appendChild(itemTitle);
            itemDiv.appendChild(itemImage);
            itemDiv.appendChild(itemStatus);

            apiDataContainer.appendChild(itemDiv);
        });
    }
});

