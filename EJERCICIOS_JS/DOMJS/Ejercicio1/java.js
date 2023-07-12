// Obtener el botón con la clase .showme
var showmeButton = document.querySelector('.showme');
console.log(showmeButton);

// Obtener el h1 con el id #pillado
var pilladoHeading = document.querySelector('#pillado');
console.log(pilladoHeading);

// Obtener todos los elementos <p>
var allParagraphs = document.getElementsByTagName('p');
console.log(allParagraphs);

// Obtener todos los elementos con la clase .pokemon
var pokemonElements = document.getElementsByClassName('pokemon');
console.log(pokemonElements);

// Obtener todos los elementos con el atributo data-function="testMe"
var testMeElements = document.querySelectorAll('[data-function="testMe"]');
console.log(testMeElements);

// Obtener el tercer elemento con el atributo data-function="testMe"
var thirdTestMeElement = document.querySelector('[data-function="testMe"]:nth-of-type(3)');
console.log(thirdTestMeElement);