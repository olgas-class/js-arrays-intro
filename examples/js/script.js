//                 //  0          1        2
// const students = ["Igor", "Matteo", "Chiara"];
// // console.log(students);
//
// students.push("Antonio");
// console.log(students);
//
// // console.log(students[0]);
// // console.log(students[1]);
// // console.log(students[2]);
//
// //
// for (let i = 0; i < students.length; i++) {
//     console.log(i, students[i]);
// }

// Chiedere all'utente 3 numeri
// const userNumbersArray = [];
// for (let i = 0; i < 3; i++) {
//     const userNumber = parseInt(prompt("Dimmi un numero"));
//     userNumbersArray.push(userNumber);
//     console.log(userNumbersArray);
// }
//
// console.log("Fine", userNumbersArray);

// students.push("Valentina");
//
// for (let i = students.length - 1; i >= 0; i--) {
//     console.log(i, students[i]);
// }

// Stampare gli studenti in pagina all'interno della lista
// const studentsUl = document.getElementById("students-list");
// // Per ogni elemento dell'array
// //  Creo li e lo inserisco nella pagina
// for (let i = 0; i < students.length; i++) {
//     // Prendo lo studente corrente
//     const thisStudent = students[i];
//     // Eseguo tutte le operazioni con questo studente
//     const item = `<li>${thisStudent}</li>`
//     studentsUl.innerHTML += item;
// }

// "E-commerce user Friendly"
// Chiediamo all'utente che cosa vorrebbe comprare e verifichiamo se c'è questo prodotto nella lista del negozio

const products = ["pomodoro", "latte", "caffè", "mela"];

// Chiedere all'utente che prodotto cerca
const userProduct = prompt("Quale prodotto stai cercando?");
// console.log(userProduct);
// Per ogni elemento
let isFound = false;

for (let i = 0; i < products.length; i++) {
  const thisElement = products[i];
  // Se l'elemento corrisponde alla stringa di ricerca
    // isFound = "trovato"
  // ALTRIMENTI non faccio niente
  if (thisElement === userProduct) {
    isFound = true;
  }

  console.log(userProduct, thisElement, isFound);
}

if (isFound) {
  alert("Congratulazione! Abbiamo il prodotto. Vuoi procedere all'acquisto?")
} else {
  alert("Ci dispiace tanto, ma non abbiamo questo prodotto :-( Riprova domani.")
}