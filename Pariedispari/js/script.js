// Pari e Dispari

// 1. Creo un prompt dove chiedo all'utente di inserire o pari o dispari
const pariDispari = prompt('Scegli "pari" o "dispari"')

// 2. Creo un'altro prompt dove chiedo all'utente di scegliere un numero compreso tra 1 e 5
const numberUser = parseInt(prompt('Scrivi un numero da 1 a 5'));
console.log(numberUser)
// 4. Creo una costante con la funzione per il numero random 
const numberGuest = randomNumber(1, 5); 
let numberValid = true;
let message;

// 3. creo all'interno di una funzione un numero random che sarà il valore dettato dal computer
function randomNumber(min, max){
  const random = Math.floor(Math.random() * (max - min + 1) + min ); 
  
  return random;
}
 console.log(numberGuest)
// 5. tramite un if effettuo la somma dei due numeri ricevuti e dichiaro chi ha vinto nei vari casi
if(numberValid){
  const somma = numberUser + numberGuest;
     


  if((!(somma % 2) && pariDispari === 'pari') || (somma % 2 && pariDispari === 'dispari')){
    message = 'User Win';
  }else{
    message = 'Guest win';
  }

  message += `  The Selection is ${pariDispari} the User select ${numberUser} and Guest select ${numberGuest}` ;
  document.getElementById('output').innerHTML = message;
}

