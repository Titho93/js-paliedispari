// Palindroma 


// 3. Mettere una condizione if 
// 4. Nell'if specificare che se la parola invertita è uguale allora è palindroma
// altrimenti non lo è.


// 1. Crea un prompt dove chiedi all'utente di inserire una parola
const word = prompt('inserisci una parola');

// 2. Creare la funzione 
function reverseWord(word){
  return word === word.split('').reverse().join('');
} 
console.log(word)
