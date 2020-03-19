"use strict";

//pobranie wszystkich przycisków
const display=document.getElementById("display");
const buttonEquals=document.getElementById("buttonEquals");
let currentlyDisplayed=display.innerText;
const main=document.querySelector(".main");


//funkcja obsługująca wyświetlanie przycisków

main.addEventListener("click", function(event){
    const element=event.target;
    currentlyDisplayed=display.innerText;
    let newContent=null;
    if(element.innerText=="Del"){//obsługa przycisku "Del"->zwracany jest string krótszy o jeden element
        newContent=currentlyDisplayed.slice(0,-1);
        display.innerText=newContent;
    }else if(element.innerText=="C"){//obsługa przycisku "C"
        display.innerText="";
    }else{
        display.innerText=currentlyDisplayed+element.innerText;
    }
})

//funkcja licząca

function calculate(){
    let contentDisplay=display.innerText;
    let arrDisplay=contentDisplay.split("");
    let newDisplay=[];
    //po wciśnięciu przycicku '=' w tele odpalana jest pętla po to żeby wyciąć wszystkie pojawiające się znaki 'x' i zastąpić je właściwym operatorem mnożenia
    for(let i=0; i<arrDisplay.length; i++){
        if(arrDisplay[i]!== "x"){
            newDisplay.push(arrDisplay[i])
        } else{newDisplay.push("*")}
    }
    // console.log('nowa:', newDisplay);
    let newDisplayTostring= newDisplay.join("");
    let calculateAll=eval(newDisplayTostring);

    display.innerText=calculateAll;
}

buttonEquals.addEventListener("click", calculate);