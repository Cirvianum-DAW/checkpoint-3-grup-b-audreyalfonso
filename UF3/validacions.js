// A continuació et mostro algunes idees per poder començar a organitzar el teu codi.

// Selecció dels inputs...
// const nameInput = document.querySelector('input[name="name"]');
// const surnameInput = document.querySelector('input[surname="surname"]');

// // Si no saps com utilitzar aquestes funcions, pots fer ús de missatges per consol o situar
// // els errors allà on consideris lògic

// // Funció per eliminar missatges d'error existents
// function removeExistingError(input) {
//   const existingError = input.nextElementSibling;
//   if (existingError && existingError.classList.contains("error")) {
//     existingError.remove();
//   }
// }

// // Funció per crear i mostrar missatges d'error
// function displayError(input, message) {
//   const error = document.createElement("div");
//   error.textContent = message;
//   error.classList.add("error");
//   //https://developer.mozilla.org/es/docs/Web/API/Element/insertAdjacentElement
//   input.insertAdjacentElement("afterend", error);
// }

// // Cada validació...

// function validateName() {
//   removeExistingError(nameInput);
//   // Validació del nom...

//   // Si no és vàlid...
//   displayError(nameInput, "El nom no és vàlid");
// }

// addEventListeners...

//-------------------------------------------------------------//

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  // Agafem les dades del formulari
  // Agafem les dades del formulari
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;

  // Validem el nom
  if (name.length < 3 || name.length > 50) {
    alert("El nom ha de tenir entre 3 i 50 caràcters!");
    return;
  }

  // Validem el cognom
  if (surname.length < 3 || surname.length > 50) {
    alert("El cognom ha de tenir entre 3 i 50 caràcters!");
    return;
  }

  // Validem el correu
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    alert("L'adreça de correu electrònic no és vàlid");
  }

  // Validem l'edat
  
});
