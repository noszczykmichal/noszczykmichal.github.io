
let pozostaleCheckbox = document.getElementsByClassName('zgoda')


/**
 * funkcjia spawdzi czy pierwszy checkbox(zgody Marketingowe) jest zanazczony jeżli tak, zaznaczy dwie pozostałe
 */

function sprawdzanieCheckboxow() {
  /* pobieramy nasz checkbox, input type checkbox w propery checked daje nam false lub true 
  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  */

  let zdodyCheckBox = document.getElementById('zgody').checked
  if(zdodyCheckBox === true) {
    for (let i = 0; i < pozostaleCheckbox.length; i++) {
      pozostaleCheckbox[i].checked = true
       document.getElementsByClassName('error')[0].style.display = "none"
    } 
  } else {
    for (let i = 0; i < pozostaleCheckbox.length; i++) {
    pozostaleCheckbox[i].checked = false
// zminiamy display: none class error
    let paragraf = document.createElement('p')
    document.getElementsByClassName('error')[0].style.display = "block"
    }
  }
}
/**
 * podpimamy naszą funkcję sprawdzanieCheckboxow() do eventu change 
 */
document.getElementById('zgody').addEventListener('change', sprawdzanieCheckboxow)


/**
 * fukcja sprawdzi czy których z checboxów 
 * Zgody na kontak i Zgoda na przetwarzanie
 * nie jest odznaczony bo jeżli tak to to odznaczy
 * Zgody marketingowe 
 */

function resztaChecbox() {
  let obieZgody = 0
for(let i = 0; i < pozostaleCheckbox.length; i++) {
  if(pozostaleCheckbox[i].checked === false) {
    document.getElementById('zgody').checked = false
     document.getElementsByClassName('error')[0].style.display = "block"
  } else {
    obieZgody +=1
  }
  if(obieZgody == 2 ) {
document.getElementById('zgody').checked = true
 document.getElementsByClassName('error')[0].style.display = "none"
  }
}
}

// fuckcja spawdzająca czy imie, nazwisko eamil są 
// wypełnine oraz 
// checkbox ze zgodą jest zaznaczony 

function walidacja() {
  const imie = document.getElementsByTagName('input')[0].value
  const nazwisko =document.getElementsByTagName('input')[1].value
  const email = document.getElementsByTagName('input')[2].value
  const errorMsg = document.getElementsByClassName('inputError')
  const zgody =document.getElementById('zgody').checked
  if(imie !== "" && nazwisko !== "" && email!== "" && zgody === true) {
    console.log("Wszytkie pola wypłnione")

  } else {
    const inputText = document.querySelectorAll('input[type="text"]')
    for(let i = 0; i <inputText.length; i++ ) {
      if(inputText[i].value == '') {
        errorMsg[i].style.display = "inline"
      } else {
        console.log(errorMsg[i].innerHTML)
        errorMsg[i].style.display = 'none'
      }
    }
  }
}
document.getElementById('main-btn').onclick = walidacja  

