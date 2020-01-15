let btn = document.createElement( "button");
let text = document.createTextNode( "jestem" );
btn.appendChild(text)

//pierwsza metoda dodawania atrybutów
// let classAtr= document.createAttribute("class")
// classAtr.value="mainBtn"

//druga

btn.setAttribute("class", "mainBtn")

document.getElementById('maindiv').appendChild(btn)



let par=document.createElement("p");
let text2=document.createTextNode("oto jestem nowy paragraf");

par.appendChild(text2)

par.setAttribute("class", "nowy paragraf")
console.log(par)
document.getElementById('maindiv').appendChild(par)

let test= document.getElementById("testowy_par").innerHTML="dodatkowy tekst"


let test3= document.getElementById("p3").outerHTML=""