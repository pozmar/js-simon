/**CONSEGNA Un alert espone 5 numeri casuali diversi.
Dopo 30 secondi l'utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
**/
//costanti
//preparo array che conterranno i numeri random dell'alert, i numeri inseriti dall'utente e i numeri corretti
var numUtente = [];
var randomAlert = [];
var rightNumbers = [];
//finchè l'array sarà minore di 5 devono essere generati dei numeri random che verrnno inseriti nell'array solo se saranno diversi gli uni dagli altri. Il contenuto dell'array sarà ciò che l'utente vedrà nell'alert
while(randomAlert.length < 5){
    var generateRandomNum = Math.floor(Math.random() * 10 - 1) + 1;
    if(randomAlert.indexOf(generateRandomNum) === -1) randomAlert.push(generateRandomNum);
    alert(randomAlert);
}
//inserisco ciò che dovrà accadere dopo trenta secondi dagli alert(qui messo a tre secondi per comodità).
setTimeout (function(){
  condition()
}, 3000)
