//pobranie inputów oraz spanów ze strony
let inputCzas= document.getElementsByClassName('czas');
let inputStawka=document.getElementsByClassName('stawka');
let spanWyplata=document.getElementsByClassName('wyplata');

//weryfikacja poprawności pobrania elementów
console.log(inputCzas);

function wynagrodzenie(){

for(let i =0; i<inputCzas.length; i++){
    //weryfikacja działania pętli
    // console.log(`Index elementu: ${i} + wartość elementu + ${inputCzas[i].value}`);   
    
    let wysokoscWyplaty= inputCzas[i].value*inputStawka[i].value
    spanWyplata[i].innerText=wysokoscWyplaty;
       
    }
    
}

wynagrodzenie();
