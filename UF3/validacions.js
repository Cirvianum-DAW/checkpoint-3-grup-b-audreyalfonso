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
  const name = document.getElementById("name").value;
  const surname = document.getElementById("surname").value;
  const email = document.getElementById("email").value;
  const age = document.getElementById("age").value;
  const message = document.getElementById("message").value;
  const gender = document.getElementById("gender").value;
  const product = document.getElementById("product").value;
  const quantity = document.getElementById("quantity").value;

  // Validem els caràcters del nom
  if (name.length < 3 || name.length > 50) {
    alert("El nom ha de tenir entre 3 i 50 caràcters!");
    return;
  }

  // Validem que el nom no contingui números
  const nameRegex = /[0-9]/;
  if (nameRegex.test(name)) {
    alert("El nom no pot contenir números!");
  }

  // Validem els caràcters del cognom
  if (surname.length < 3 || surname.length > 50) {
    alert("El cognom ha de tenir entre 3 i 50 caràcters!");
    return;
  }

  // Validem que el nom no contingui números
  const surnameRegex = /[0-9]/;
  if (surnameRegex.test(surname)) {
    alert("El cognom no pot contenir números!");
  }

  // Validem el correu
  const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
  if (!emailRegex.test(email)) {
    alert("L'adreça de correu electrònic no és vàlid");
  }

  //-----------------------------------------------------------

  // Validem que el gènere és una de les opcions disponibles al formulari
  if (!gender) {
    alert("Has de seleccionar un gènere!");
    return;
  }

  // Validem l'edat
  if (age < 18) {
    alert("Has de ser major d'edat per registrar-te");
  }

  //Validem el camp "Message"
  if (message.length < 10 || message.length > 200) {
    alert("El missatge ha de tenir entre 10 i 200 caràcters!");
    return;
  }

  //-----------------------------------------------------------

  // Validem que es seleccioni un producte
  if (!product) {
    alert("Has de seleccionar un producte!");
    return;
  }

  // Validem la quantitat
  if (!Number.isInteger(quantity) || quantity < 1 || quantity > 10) {
    alert("La quantitat ha de ser un nombre enter entre 1 i 10!");
    return;
  }
});
