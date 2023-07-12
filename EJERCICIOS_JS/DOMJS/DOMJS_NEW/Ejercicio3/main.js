const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

// Obtener el elemento div con el atributo data-function="printHere"
const printHereDiv = document.querySelector('[data-function="printHere"]');

// Crear elementos ul y li
const ulElement = document.createElement('ul');

// Iterar sobre el array places y crear elementos li
places.forEach(place => {
  const liElement = document.createElement('li');
  liElement.textContent = place;
  ulElement.appendChild(liElement);
});

// Agregar la lista ul al div
printHereDiv.appendChild(ulElement);