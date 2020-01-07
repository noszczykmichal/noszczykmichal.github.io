"use strict";

$(function(){
    let btn=$("<button>").attr("id", "btn").text("Pobierz dane");
    $("body").prepend(btn);

    let container=$("<div>").attr("id","container");
    $("#btn").after(container);

    $("#btn").click(function(){
        $.getJSON("https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        function(response){
            console.log(response)

            let parImie=$("<p>").text("Imię: "+ response.imie);
            $("div").append(parImie);

            let parNazwisko=$("<p>").text("Nazwisko: " + response.nazwisko);
            $("div").append(parNazwisko);

            let parZawod=$("<p>").text("Zawód: "+ response.zawod);
            $("div").append(parZawod);

            let parFirma=$("<p>").text("Firma: "+ response.firma);
            $("div").append(parFirma);

        }
        )
})




})




