const places = [
  {
    title: "Random title",
    imgUrl: "https://images.unsplash.com/photo-1506466010722-395aa2bef877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bG9yZCUyMG9mJTIwdGhlJTIwcmluZ3N8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
  },
  {
    title: "Random title",
    imgUrl: "https://images.unsplash.com/photo-1570610155223-66279ba81b41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bG9yZCUyMG9mJTIwdGhlJTIw"
  },
  {
    title: "Random title",
    imgUrl: "https://images.unsplash.com/photo-1570888233388-35d777042d9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxvcmQlMjBvZiUyMHRoZSUy"
  },
  {
    title: "Random title",
    imgUrl: "https://images.unsplash.com/photo-1490440101319-4c8eb3880432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvcmQlMjBvZiUyMHRoZSUy"
  },
];
// Obtén una referencia al botón
const button = document.querySelector('button');

// Agrega un evento de clic al botón
button.addEventListener('click', () => {
  // Elimina el último elemento del arreglo 'places'
  places.pop();
  
  // Actualiza el contenido en el DOM
  updateDOM();
});

// Función para actualizar el contenido en el DOM
function updateDOM() {
  // Obtén una referencia al elemento padre donde se mostrarán los elementos de la lista
  const parentElement = document.body;

  // Borra todo el contenido existente en el elemento padre
  parentElement.innerHTML = '';

  // Recorre los elementos en el arreglo 'places' y crea elementos HTML para mostrarlos
  places.forEach(place => {
    // Crea un elemento de imagen
    const imageElement = document.createElement('img');
    imageElement.src = place.imgUrl;
    
    // Crea un elemento de título
    const titleElement = document.createElement('h2');
    titleElement.textContent = place.title;
    
    // Crea un contenedor para agrupar la imagen y el título
    const containerElement = document.createElement('div');
    containerElement.appendChild(imageElement);
    containerElement.appendChild(titleElement);
    
    // Agrega el contenedor al elemento padre
    parentElement.appendChild(containerElement);
  });
}

// Llama a la función updateDOM() inicialmente para mostrar los elementos de la lista
updateDOM();
