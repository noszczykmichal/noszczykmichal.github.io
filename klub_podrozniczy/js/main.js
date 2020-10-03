"use strict";
const submitBtn=document.querySelector('[type="submit"]');

function formCheck(event){
    const inputArr=document.querySelectorAll('[class*="form-control"]');
    const errorMessage="Uzupełnij pole: ";
    
//length-1 because filling textarea won't be obligatory
for(let i=0; i<inputArr.length-1; i++){
    if(inputArr[i].value.trim()==""){
        let oldPlaceholder=inputArr[i].getAttribute("placeholder");
        inputArr[i].setAttribute("placeholder", errorMessage+oldPlaceholder);
        inputArr[i].classList.add("inputBlank");
        
        event.preventDefault();
    }
}

}

submitBtn.addEventListener('click', formCheck);

