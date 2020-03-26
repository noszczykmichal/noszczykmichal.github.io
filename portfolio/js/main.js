"use strict";
//--------------Section About 


//I grab elements in the DOM
const contSoft=document.querySelector('[class*=contSoft]'); //I grab containers for the icons
const contHard=document.querySelector('[class*=contHard]'); 
const displaySoft=document.querySelector('[class*=soft]');//I grab paragraphs that will serve as displays
const displayHard=document.querySelector('[class*=hard]');


//I set addEventListeners-when the user will mouseover on the icons in 'myskills' div the exact content will be displayed in the paragraph, depending on attribute 'value' of the given icon

contSoft.addEventListener('mouseover', function(event){

    if(event.target==contSoft){
        displaySoft.innerText=".";
    }else{
        displaySoft.innerText=event.target.getAttribute('title');
    }
})

contHard.addEventListener('mouseover', function(event){

    if(event.target==contHard){
        displayHard.innerText=".";
    }else{
        displayHard.innerText=event.target.getAttribute('title');
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

//before sending the form, I verify whether values in inputs are not just whitespaces

const btn=document.querySelector('input[type=submit]');
const showMore=document.getElementById('showMore');

btn.addEventListener('click', function(event){
    // I'm getting the values of input 'name' and 'lastname'; and I'm assigning checkbox and text area to variables;
    const name=(document.getElementById('name').value).trim();
    const lastname=(document.getElementById('lastname').value).trim();
    const checkbox=document.getElementById('agreement');
    const message=document.getElementById('message');
    
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
        // I'm checking whether checkbox with agreement is 'checked'
    }else if(checkbox.checked==false){
        event.preventDefault();
        message.nextElementSibling.style.color="red";
        message.nextElementSibling.style.fontStyle="italic";
    }
    
})

//switching between full and short consent for processing of personal data

showMore.addEventListener('click', function(event){
    event.preventDefault();
    const spanAgreement=event.target.nextElementSibling;

    if(spanAgreement.classList=="agreementShort"){
        spanAgreement.classList.remove("agreementShort");
        event.target.innerText="Zobacz mniej";
    }else if(spanAgreement.classList==""){
        spanAgreement.classList.add("agreementShort");
        event.target.innerText="Zobacz więcej";
    }
})
