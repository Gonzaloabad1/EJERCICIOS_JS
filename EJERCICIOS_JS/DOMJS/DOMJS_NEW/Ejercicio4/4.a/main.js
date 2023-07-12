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
  {
    title: "Random title",
    imgUrl: "https://images.unsplash.com/photo-1460453429228-912eec8be349?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTN8fGxvcmQlMjBvZiUyMHRoZSUy"
  },
];

// Obtener el elemento body del documento
const body = document.querySelector('body');

// Crear un contenedor para la lista de divs
const container = document.createElement('div');

// Recorrer el arreglo de lugares
places.forEach(place => {
  // Crear un nuevo div
  const div = document.createElement('div');

  // Crear un elemento h4 para el título
  const title = document.createElement('h4');
  title.textContent = place.title;

  // Crear un elemento img para la imagen
  const image = document.createElement('img');
  image.src = place.imgUrl;

  // Agregar el título y la imagen al div
  div.appendChild(title);
  div.appendChild(image);

  // Agregar el div al contenedor
  container.appendChild(div);
});

// Agregar el contenedor al cuerpo del documento
body.appendChild(container);