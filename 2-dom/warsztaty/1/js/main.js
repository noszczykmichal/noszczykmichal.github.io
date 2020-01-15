// funkcja pod html
function ustawTlo(){

    let mainParagraf= document.getElementsByTagName("p")
    mainParagraf[0].style.backgroundColor="red"
    mainParagraf[1].style.backgroundColor="yellow"
    console.log("TCL: ustawTlo -> mainParagraf", mainParagraf[0].style)
}

//metoda przypisanie zdarzeń przy użyciu HTML DOM

document.getElementById('useHtmlDom').onclick=ustawTlo

//rejestrowanie zdarzeń za pomocą metody addEventListener()

document.getElementById('useAddEventListener').addEventListener('click',ustawTlo)