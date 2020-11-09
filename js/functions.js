
//funzione che verifica la presenza di un elemento nell'array
function isInArray(num, arrNum){
  for(var i = 0; i < arrNum.length; i++ ){
    if (num == arrNum[i]){
      return true;
    }
  }
  return false;
}
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
  //si analizzano i 5 elementi dell' array contenente i numeri inseriti dall'utente e si vede se ci sono degli elemnti uguali tra loro. Gli elementi che si trovano in entrambi gli array verranno inseriti in un altro array che conterrà i numeri corretti
  for(var i = 0; i < numUtente.length; i++){
    if(numUtente[i] == randomAlert[i]){
      rightNumbers.push(numUtente[i]);
    }
  }
  //elementi di output
  document.getElementById("right").innerHTML += rightNumbers.length;
  document.getElementById("list").innerHTML += rightNumbers;
}
