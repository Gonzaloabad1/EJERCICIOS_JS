// 2.1 Insertar un div vacío
const emptyDiv = document.createElement('div');
document.body.appendChild(emptyDiv);

// 2.2 Insertar un div con una p
const divWithP = document.createElement('div');
const pElement = document.createElement('p');
pElement.textContent = 'Contenido de la p';
divWithP.appendChild(pElement);
document.body.appendChild(divWithP);

// 2.3 Insertar un div con 6 p utilizando un loop
const divWithMultipleP = document.createElement('div');
for (let i = 0; i < 6; i++) {
  const pElement = document.createElement('p');
  pElement.textContent = `Párrafo ${i + 1}`;
  divWithMultipleP.appendChild(pElement);
}
document.body.appendChild(divWithMultipleP);

// 2.4 Insertar una p con texto 'Soy dinámico!'
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5 Insertar texto en el h2 con la clase .fn-insert-here
const h2Element = document.querySelector('.fn-insert-here');
h2Element.textContent = 'Wubba Lubba dub dub';

// 2.6 Crear una lista ul > li con los elementos del array
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ulElement = document.createElement('ul');
apps.forEach((app) => {
  const liElement = document.createElement('li');
  liElement.textContent = app;
  ulElement.appendChild(liElement);
});
document.body.appendChild(ulElement);

// 2.7 Eliminar los nodos con la clase .fn-remove-me
const removeElements = document.querySelectorAll('.fn-remove-me');
removeElements.forEach((element) => {
  element.remove();
});

// 2.8 Insertar una p con texto 'Voy en medio!' entre los dos div
const divs = document.querySelectorAll('div');
const secondDiv = divs[1];
const pInBetween = document.createElement('p');
pInBetween.textContent = 'Voy en medio!';
document.body.insertBefore(pInBetween, secondDiv);

// 2.9 Insertar p con texto 'Voy dentro!' dentro de todos los div con la clase .fn-insert-here
const insertHereDivs = document.querySelectorAll('.fn-insert-here');
insertHereDivs.forEach((div) => {
  const pElement = document.createElement('p');
  pElement.textContent = 'Voy dentro!';
  div.appendChild(pElement);
});