$(function () {
  let kursPoczatkowyKupno=null;
  let kursPoczatkowySprzedaz=null;
  $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    // console.log(result)

    kursPoczatkowyKupno=result['PLN'].buy;
    console.log("TCL: kursPoczatkowyKupno", kursPoczatkowyKupno)
    
    kursPoczatkowySprzedaz=result['PLN'].sell;
    console.log("TCL: kursPoczatkowySprzedaz", kursPoczatkowySprzedaz)

  })

  function sprawdzKurs(){
    $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    kursAktualnyKupno=result['PLN'].buy
    console.log("TCL: sprawdzKurs -> kursAktualnyKupno", kursAktualnyKupno)
    // wstrzykuje aktualną wartosc kursu->.kupnoWartosc
    $('.kupnoWartosc').text(kursAktualnyKupno)

    if(kursAktualnyKupno>kursPoczatkowyKupno){
      // console.log('kurs wzrósł')
      //w zależności od wyniku działania if'a do spanu .kupno wstawiam odpowiednią ikonę
      $('.kupno').html('<i class="fas fa-arrow-up"></i>')
      $('.kupno>i').css({'color': 'green'})
    }  else if(kursAktualnyKupno<kursPoczatkowyKupno){
      // console.log('kurs spadł')
      $('.kupno').html('<i class="fas fa-arrow-down"></i>')
      $('.kupno>i').css({'color': 'red'})
    }else{
      // console.log('kurs nie zmienił się')
      $('.kupno').html('<i class="fas fa-arrows-alt-h"></i>')
    }

    kursAktualnySprzedaz=result['PLN'].sell
    console.log("TCL: sprawdzKurs -> kursAktualnySprzedaz", kursAktualnySprzedaz)
    $('.sprzedazWartosc').text(kursAktualnySprzedaz)

    if(kursAktualnySprzedaz>kursPoczatkowySprzedaz){
      //jak wyżej tylko w odniesieniu do kursu sprzedaży
      $('.sprzedaz').html('<i class="fas fa-arrow-up"></i>')
      $('.sprzedaz>i').css({'color': 'green'})
    } else if(kursAktualnySprzedaz<kursPoczatkowySprzedaz){
      $('.sprzedaz').html('<i class="fas fa-arrow-down"></i>')
      $('.sprzedaz>i').css({'color': 'red'})
    } else {
      $('.sprzedaz').html('<i class="fas fa-arrows-alt-h"></i>')
    }

    kursPoczatkowyKupno=kursAktualnyKupno;
    console.log("TCL: sprawdzKurs -> kursPoczatkowyKupno", kursPoczatkowyKupno)
    kursPoczatkowySprzedaz=kursAktualnySprzedaz;
    console.log("TCL: sprawdzKurs -> kursPoczatkowySprzedaz", kursPoczatkowySprzedaz)
    
    })


  }

 $('.btn').on('click', sprawdzKurs);


});
