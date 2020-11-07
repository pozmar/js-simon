/**CONSEGNA Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
**/
//costanti
//preparo array che conterranno i numeri random dell'alert, i numeri inseriti dall'utente e i numeri corretti
var numUtente = [];
var randomAlert = [];
var rightNumbers = [];
var input;
//finchè l'array sarà minore di 5 devono essere generati dei numeri random che verrnno inseriti nell'array solo se saranno diversi gli uni dagli altri. Il contenuto dell'array sarà ciò che l'utente vedrà nell'alert
while(randomAlert.length < 5){
    var generateRandomNum = Math.floor(Math.random() * 10 - 1) + 1;
    if(randomAlert.indexOf(generateRandomNum) === -1) randomAlert.push(generateRandomNum);
    alert(randomAlert);
}
//inserisco ciò che dovrà accadere dopo trenta secondi dagli alert(qui messo a tre secondi per comodità).
setTimeout (condition, 3000);
//l'utente deve inserire 5 numeri, i numeri verranno inseriti in un array che conterrà gli elementi isneriti dall'utente
function condition(){
  for(var i = 0; i < 5; i++){
    var input = parseInt(prompt("Inserisci il numero"));
    if(isNaN(input)){
      alert("inserisci un numero!")
    }else{
    numUtente.push(input);
    }
  }
  //si analizzano i 5 elementi degli array e si vede se ci sono degli elemnti uguali tra loro. Gli elemnti che si trovano in entrambi gli array verranno inseriti in un altro array che conterrà i numeri corretti
  for(var i = 0; i < 5; i++){
    if(randomAlert[i] == numUtente[i]){
      rightNumbers.push(numUtente[i]);
    }
  }
  //elementi di output
  document.getElementById("right").innerHTML += rightNumbers.length;
  document.getElementById("list").innerHTML += rightNumbers;
}
