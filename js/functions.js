
//funzione che verifica la presenza di un elemento nell'array
function isInArray(num, arrNum){
  for(var i = 0; i < arrNum.length; i++ ){
    if (num == arrNum[i]){
      return true;
    }
  }
  return false;
}
