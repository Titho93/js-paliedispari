// Palindroma 

// 1. Crea un prompt dove chiedi all'utente di inserire una parola
const word = prompt('inserisci una parola');

let messaggio;

// 2. Creare la funzione 
function reverseWord(word){
  return word === word.split('').reverse().join('');
} 

// 3. Mettere una condizione if 
if (reverseWord(word)) {
  // 4. Nell'if specificare che se la parola invertita è uguale allora è palindroma
  message = word + " è una parola palindroma.";

  // altrimenti non lo è.
} else {
  message = word + " non è una parola palindroma.";

}

// Creare un messaggio
  document.getElementById('output').innerHTML = message;