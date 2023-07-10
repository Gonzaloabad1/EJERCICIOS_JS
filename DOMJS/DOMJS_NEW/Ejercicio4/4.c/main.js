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
const placesContainer = document.getElementById("placesContainer");

places.forEach((place, index) => {
  // Crear un botón para cada elemento
  const button = document.createElement("button");
  button.textContent = "Remove";
  button.addEventListener("click", () => {
    // Eliminar el elemento del HTML al hacer clic
    const placeElement = document.getElementById(`place-${index}`);
    if (placeElement) {
      placeElement.remove();
    }
  });

  // Crear un contenedor para cada lugar
  const placeContainer = document.createElement("div");
  placeContainer.id = `place-${index}`;
  placeContainer.innerHTML = `
    <h3>${place.title}</h3>
    <img src="${place.imgUrl}" alt="${place.title}">
  `;

  // Agregar el botón y el contenedor del lugar al contenedor principal
  placeContainer.appendChild(button);
  placesContainer.appendChild(placeContainer);
});