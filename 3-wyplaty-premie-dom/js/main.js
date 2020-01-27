// tablica ze wszystkimi wartościami przepracowanych godzin
let arrayCzas=[];
//tablica z trzem największymi wartościami
let trzyNajwieksze=[];

//'łapię przycisk do późniejszczego dodania addEventListener'a
let btn=document.getElementById('oblicz');

//'łapię' spana i tworze w nim listę numerowaną do której w pętli będę tworzył dynamicznie elementy
            let spanNajlepsi=document.getElementById('najlepsi-pracownicy');
            let olNajlepsi=document.createElement('ol');
            spanNajlepsi.append(olNajlepsi);


function wynagrodzenie(){

    //pobranie inputów oraz spanów ze strony
    let inputCzas= document.getElementsByClassName('czas');
    let inputStawka=document.getElementsByClassName('stawka');
    let spanWyplata=document.getElementsByClassName('wyplata');
    let spanPracownik=document.getElementsByClassName('pracownik');

    //weryfikacja poprawności pobrania elementów
    // console.log("TCL: wynagrodzenie -> inputCzas", inputCzas)

    // pierwsza pętla

for(let i=0; i<inputCzas.length; i++){
    //weryfikacja działania pętli
    // console.log(`Index elementu: ${i} + wartość elementu + ${inputCzas[i].value}`);   
    if(inputCzas[i].value>160){
        // wylicznie wynagrodzenia i premi dla pracowników powyżej 160 godzin
        let premia=(inputCzas[i].value-160)*(inputStawka[i].value*2);
        let wyplataBaza= 160*inputStawka[i].value;
        let wyplataPlusPremia= premia+wyplataBaza;
        spanWyplata[i].innerText=wyplataPlusPremia;
    }else{
        let wysokoscWyplaty= inputCzas[i].value*inputStawka[i].value
        spanWyplata[i].innerText=wysokoscWyplaty;
    }
   
    // //weryfikacja pracowników którzy przepracowali poniżej 100 godzin
    if(inputCzas[i].value<100){
        spanPracownik[i].classList.add('red');
    }
    };

    //koniec pierwszej pętli
    for(let i=0; i<inputCzas.length; i++){
        let godziny=inputCzas[i].value;
        arrayCzas.push(godziny);

    }

    function sortNumber(a,b){
        return b-a;
    }
    arrayCzas.sort(sortNumber);

    console.log('Tablica arrayCzas: ', arrayCzas);

    //utworzenie tablicy z trojgiem najwięszych liczb przepracowanych godzin
    for(let i=0; i<3; i++){
        let czas=parseInt(arrayCzas[i]);
        trzyNajwieksze.push(czas);
    }

    // console.log('Tablica trzyNajwieksze: ',trzyNajwieksze);

    //pętla iteruje po wszystkich inputach classy czas i sprawdza czy ich wartość jest jedną z tablicy TrzyNajwieksze jeśli tak to w console.logu wyświetla się zawartość spanuPracownik o tym samym indexie-wszystkich elemntów o danej klasie jest tyle samo

    for(let i=0; i<inputCzas.length; i++){
        let wartoscInputCzas=inputCzas[i].value;
        for(let j=0; j<trzyNajwieksze.length;j++){
          let argumentTrzyNajwieksze=trzyNajwieksze[j];
          if(wartoscInputCzas == argumentTrzyNajwieksze){
            console.log(spanPracownik[i].innerText)

            let olCatch=document.querySelector('ol');
            let liNajlepsi=document.createElement('li');
            liNajlepsi.innerText=`${spanPracownik[i].innerText} przepracował/a ${inputCzas[i].value}`;
            olCatch.append(liNajlepsi);

          }
        }
      };
    
     

}


btn.addEventListener('click', wynagrodzenie);