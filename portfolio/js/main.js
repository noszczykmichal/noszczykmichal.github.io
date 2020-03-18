"use strict";
//--------------Section About 


//I grab elements in the DOM
const contSoft=document.querySelector('[class*=contSoft]'); //I grab containers for the icons
const contHard=document.querySelector('[class*=contHard]'); 
const displaySoft=document.querySelector('[class*=soft]');//I grab paragraphs that will serve as displays
const displayHard=document.querySelector('[class*=hard]');
let eventTarget=null;


//I set addEventListeners-when the user will mouseover on the icons in 'myskills' div the exact content will be displayed in the paragraph, depending on attribute 'value' of the given icon

contSoft.addEventListener('mouseover', function(event){
    eventTarget=event.target;

    if(eventTarget==contSoft){
        displaySoft.innerText="najedź na ikonę";
    }else{
        displaySoft.innerText=eventTarget.getAttribute('title');
    }
})

contHard.addEventListener('mouseover', function(event){
    eventTarget=event.target;;

    if(eventTarget==contHard){
        displayHard.innerText="najedź na ikonę";
    }else{
        displayHard.innerText=eventTarget.getAttribute('title');
    }
})

//--------------Section Education 

//adding accordion

const main=document.querySelector('[class=main]');
const header=document.querySelectorAll('[class=headerAccordion]');
// console.log("header", header);



main.addEventListener('click', function(event){

    //on every run of loop class 'active' is removed from all elements
    for(let i=0; i<header.length; i++){
        let removeActive=header[i].nextElementSibling;
        removeActive.classList.remove('active');
    }

    //the clicked element is given additional class that allows it to be displayed
    for(let j=0; j<header.length; j++){
    if(event.target==header[j]){
        let panel=header[j].nextElementSibling;
        panel.classList.add('active');
    }
}
    
})

//--------------Section Contact

//before sending the form, I verify whether values in above inputs are not just whitespaces

const btn=document.querySelector('input[type=submit]');

btn.addEventListener('click', function(event){
    // I'm getting the values of input 'name' and 'lastname' 
    const name=(document.getElementById('name').value).trim();
    const lastname=(document.getElementById('lastname').value).trim();
    
    if(name=="" && lastname==""){
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Imię oraz Nazwisko');
        document.getElementById('name').value="";
        document.getElementById('lastname').value="";
    }else if(lastname==""){
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Nazwisko');
        document.getElementById('lastname').value="";
    }else if(name==""){
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Imię');
        document.getElementById('name').value="";
    }
    
})


