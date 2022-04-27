let countTexVal = document.getElementById('countTex');
 


function Increment(){
     let enteredVal = countTexVal.textContent;
     let updatedVal = parseInt(enteredVal) + 1 ;
     countTexVal.textContent = updatedVal;

      if(updatedVal>0){
        countTexVal.style.color ="green";
      }else if(updatedVal<0){
        countTexVal.style.color ="red";
      }else{
        countTexVal.style.color ="black";
      }

    }

function Reset(){
        countTexVal.textContent = 0;    
        countTexVal.style.color ="black";
}

function Decrement(){
    let enteredVal = countTexVal.textContent;
    let updatedVal = parseInt(enteredVal) - 1 ;
    countTexVal.textContent = updatedVal;
    if(updatedVal>0){
        countTexVal.style.color ="green";
      }else if(updatedVal<0){
        countTexVal.style.color ="red";
      }else{
        countTexVal.style.color ="black";
      }
}


