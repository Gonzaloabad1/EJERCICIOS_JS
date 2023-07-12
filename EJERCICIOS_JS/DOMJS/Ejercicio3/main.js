//1.1
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul1 = document.createElement('ul');
countries.forEach(country => {
  const li = document.createElement('li');
  li.textContent = country;
  ul1.appendChild(li);
});
document.body.appendChild(ul1);

// Ejercicio 1.2
const removeMe = document.querySelector('.fn-remove-me');
removeMe.remove();

// Ejercicio 1.3
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement('ul');
cars.forEach(car => {
  const li = document.createElement('li');
  li.textContent = car;
  ul2.appendChild(li);
});
const printHere = document.querySelector('[data-function="printHere"]');
printHere.appendChild(ul2);

// Ejercicio 1.4
const countriesWithImages = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
countriesWithImages.forEach(country => {
  const div = document.createElement('div');
  const h4 = document.createElement('h4');
  const img = document.createElement('img');

  h4.textContent = country.title;
  img.src = country.imgUrl;

  div.appendChild(h4);
  div.appendChild(img);

  document.body.appendChild(div);
});

// Ejercicio 1.5
const deleteLastDivButton = document.createElement('button');
deleteLastDivButton.textContent = 'Eliminar último div';
deleteLastDivButton.addEventListener('click', () => {
  const divs = document.querySelectorAll('div');
  const lastDiv = divs[divs.length - 1];
  lastDiv.remove();
});
document.body.appendChild(deleteLastDivButton);

// Ejercicio 1.6
const divs = document.querySelectorAll('div');
divs.forEach((div, index) => {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar div ' + (index + 1);
  deleteButton.addEventListener('click', () => {
    div.remove();
  });
  div.appendChild(deleteButton);
});