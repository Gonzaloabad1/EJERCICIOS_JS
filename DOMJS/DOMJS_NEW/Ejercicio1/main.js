const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];

// Obtener el elemento <body> del HTML
const body = document.querySelector('body');

// Crear el elemento <ul>
const ul = document.createElement('ul');

// Iterar sobre cada álbum y crear un elemento <li> para cada uno
albums.forEach(album => {
  const li = document.createElement('li');
  li.textContent = album;
  ul.appendChild(li);
});

// Agregar la lista <ul> al <body>
body.appendChild(ul);