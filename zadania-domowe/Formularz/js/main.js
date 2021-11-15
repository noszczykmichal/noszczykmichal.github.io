'use strict';

const submit = document.querySelector('[class=submit]');
const unfilled = document.querySelector('[class=containerUnfilled]');
const showMore = document.getElementById('showMore');
const body = document.getElementsByTagName('body').item(0);
const container = document.querySelector('.container');
const form = document.getElementsByTagName('form').item(0);
let errors = []; //array for holding any errors that may occur during filling up the form

//addEventListener on submit button

submit.addEventListener('click', function (event) {
    //asigning inputs and checkbox of the form to variables

    const name = document.getElementById('name').value;
    const lastname = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const city = document.getElementById('city').value;

    //conditional statements to check whether all is filled up correctly; there is no verification of text area as its filling is optional; 

    if (name.trim() == '') {
        event.preventDefault(); //if any input has been verified as blank the form's sending is prevented and a list of blank inputs is displayed;
        errors.push('<li>Nie wypełniono pola: Imię</li>');
    }

    if (lastname.trim() == '') {
        event.preventDefault();
        errors.push('<li>Nie wypełniono pola: Nazwisko</li>');
    }

    if (email.trim() == '') {
        event.preventDefault();
        errors.push('<li>Nie wypełniono pola: E-mail</li>');
    }

    if (phone.trim() == '') {
        event.preventDefault();
        errors.push('<li>Nie wypełniono pola: Telefon</li>');
    } else if (phone.trim().length < 9) {
        event.preventDefault();
        errors.push('<li>Wpisano za krótki numer telefonu</li>');
    }

    if (city == 'notSelected') {
        event.preventDefault();
        errors.push('<li>Nie wybrano miasta</li>');
    }

    if (agreement.checked == false) {
        event.preventDefault();
        errors.push('<li>Nie zaznaczono zgody</li>');
    }
    //conditional statement checks if array with errors is empty; if it's not the list of blank inputs is displayed in div with class 'containerUnfilled';

    if (errors.length != 0) {
        unfilled.innerHTML = '';
        for (let i = 0; i < errors.length; i++) {
            unfilled.insertAdjacentHTML('beforeend', errors[i]);
        }
    }

    //after the final iteration of the loop the array is emptied to prevent the list from being doubled on the next check;
    errors = [];
})

//addEventListener on link to show or hide the full text of the consent 

showMore.addEventListener('click', function (event) {
    event.preventDefault();

    const spanAgreement = event.target.nextElementSibling;

    if (spanAgreement.classList == 'agreementLong') {
        spanAgreement.classList.remove('agreementLong');
        //additionally adding and removing classes for certain HTML elements to improve display when the full consent is shown
        body.classList.remove('constentLong');
        container.classList.remove('constentLong');
        form.classList.remove('formConstentL');
        event.target.innerHTML = 'Zobacz więcej';
    } else if (spanAgreement.classList == '') {
        spanAgreement.classList.add('agreementLong');
        body.classList.add('constentLong');
        container.classList.add('constentLong');
        form.classList.add('formConstentL');
        console.log(form)
        event.target.innerHTML = 'Zobacz mniej';
    }
})