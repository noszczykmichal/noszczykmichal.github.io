"use strict";
//--------------Navbar

const navbar = document.querySelector('.mobile-nav');
const hamburger = document.querySelector('.main-nav__icon-container');
const backdrop = document.querySelector('.backdrop');
const mobileNavItems = document.querySelector('.mobile-nav__items');
const arrChildrenOfmobileNavItems = mobileNavItems.children;

const closeMobileNav = () => {
    hamburger.classList.remove('hide');
    backdrop.classList.remove('open');
    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 200)
    navbar.classList.remove('open');
}

const openMobileNav= () =>{
    navbar.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(() => {
        backdrop.classList.add('open'), 100
    })
    hamburger.classList.add('hide');
}

hamburger.addEventListener('click', function () {
    openMobileNav();
})

backdrop.addEventListener('click', function () {
    closeMobileNav();
})

//closing mobile-nav on link click

for (let item of arrChildrenOfmobileNavItems) {
    item.addEventListener('click', function () {
        closeMobileNav();
    });
}

//--------------Section About 


//I grab elements in the DOM
const contSoft = document.querySelector('[class*=soft-skills__list]'); //I grab containers for the icons
const contHard = document.querySelector('[class*=hard-skills__list]');
const displaySoft = document.querySelector('[class*=soft]');//I grab paragraphs that will serve as displays
const displayHard = document.querySelector('[class*=hard]');


//I set addEventListeners-when the user will mouseover on the icons in 'myskills' div the exact content will be displayed in the paragraph, depending on attribute 'value' of the given icon

contSoft.addEventListener('mouseover', function (event) {

    if (event.target == contSoft) {
        displaySoft.innerText = "";
    } else {
        displaySoft.innerText = event.target.getAttribute('title');
    }
})

contHard.addEventListener('mouseover', function (event) {

    if (event.target == contHard) {
        displayHard.innerText = "";
    } else {
        displayHard.innerText = event.target.getAttribute('title');
    }
})

//--------------Section Education 

//adding accordion

const accordion = document.querySelector('.accordion');
const headers = document.getElementsByClassName('accordion__item');

accordion.addEventListener('click', function (event) {
    //event target is h3; not the div it's nested in

    const parentSibling = event.target.parentElement.nextElementSibling;
    //if event.target parent's nextElementSibling is already visible I remove the class active- allows to hide description for element that is clicked twice

    if (parentSibling !== null && parentSibling.classList.contains('active')) {
        parentSibling.classList.remove('active');
        return null;
    }

    //here I'm removing class "active" from divs with class "panelEducation"
    for (const header of headers) {
        const removeActive = header.nextElementSibling;
        removeActive.classList.remove('active');
    }

    //the clicked element is given additional class that allows it to be displayed

    for (const header of headers) {
        //here I check which h3 element was clicked, if I find event.target, the element next to its parent receives class "active" and becomes visible to the user
        if (event.target == header.firstElementChild) {
            const panel = header.nextElementSibling;
            panel.classList.add('active');
        }
    }
})

//--------------Section Contact

//before sending the form, I verify whether values in inputs are not just whitespaces

const btn = document.querySelector('input[type=submit]');
const showMoreBtn = document.querySelector('.show-more__btn');
const consent = document.querySelector('.consent');

btn.addEventListener('click', function (event) {
    // I'm getting the values of input 'name' and 'lastname'; and I'm assigning checkbox and text area to variables;
    const name = (document.getElementById('name').value).trim();
    const lastname = (document.getElementById('lastname').value).trim();
    const checkbox = document.getElementById('checkbox__consent');
    const consentShort=document.querySelector('.consent-short');

    if (name === "" && lastname === "") {
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Imię oraz Nazwisko');
        document.getElementById('name').value = "";
        document.getElementById('lastname').value = "";
    } else if (name === "") {
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Imię');
        document.getElementById('name').value = "";
    } else if (lastname === "") {
        event.preventDefault();
        alert('Proszę wpisać poprawne dane w polu: Nazwisko');
        document.getElementById('lastname').value = "";
        // I'm checking whether checkbox with consent is 'checked'
    } else if (checkbox.checked === false) {
        event.preventDefault();
        consentShort.style.color = "red";
        consentShort.style.fontStyle = "italic";
    }
})

//switching between full and short consent for processing of personal data

showMoreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    if (!consent.classList.contains('open')) {
        consent.classList.add('open');
        showMoreBtn.innerText = 'Zobacz mniej';
    } else {
        consent.classList.remove('open');
        showMoreBtn.innerText = 'Zobacz więcej';
    }
})
