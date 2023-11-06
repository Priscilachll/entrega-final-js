async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users); // Verifica los datos en la consola

        const testimoniosLista = document.getElementById('testimonios-lista');
        testimoniosLista.innerHTML = ''; // Limpiar la lista antes de agregar elementos

        users.forEach(user => {
            const testimonioItem = document.createElement('li');
            testimonioItem.classList.add('testimonio-item'); // Agregar una clase al elemento para estilos y manejo de clic

            const testimonioImg = document.createElement('img');
            testimonioImg.src = "imagenes/imagen-usuario.jpg";
            testimonioImg.alt = user.name;

            const testimonioText = document.createElement('p');
            testimonioText.textContent = `${user.name} dice: ${user.company.name} - ${user.email}`;

            testimonioItem.appendChild(testimonioImg);
            testimonioItem.appendChild(testimonioText);
            testimoniosLista.appendChild(testimonioItem);

           
            testimonioItem.addEventListener('click', () => {
                testimonioItem.style.display = 'none';
            });
        });
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}


const refreshButton = document.getElementById('refreshButton');
refreshButton.addEventListener('click', fetchUsers);




