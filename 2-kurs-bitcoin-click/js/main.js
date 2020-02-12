$(function () {
  let kursPoczatkowyKupno= null;
  $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    // console.log(result)

    kursPoczatkowyKupno = result['PLN'].buy;
    console.log("TCL: kursPoczatkowyKupno", kursPoczatkowyKupno)
    

    

  })

  function sprawdzKurs(){
    $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    kursAktualnyKupno=result['PLN'].buy
    console.log("TCL: sprawdzKurs -> kursAktualnyKupno", kursAktualnyKupno)

    if(kursAktualnyKupno>kursPoczatkowyKupno){
      // console.log('kurs wzrósł')
      //w zależności od wyniku działania if'a; wstrzykuje aktualną wartosc kursu->.kupnoWartosc; a do do spanu .kupno odpowiednią ikonę
      $('.kupnoWartosc').text(kursAktualnyKupno)
      $('.kupno').html('<i class="fas fa-arrow-up"></i>')
      $('.kupno>i').css({'color': 'green'})
    }  else if(kursAktualnyKupno<kursPoczatkowyKupno){
      // console.log('kurs spadł')
      $('.kupnoWartosc').text(kursAktualnyKupno)
      $('.kupno').html('<i class="fas fa-arrow-down"></i>')
      $('.kupno>i').css({'color': 'red'})
    }else{
      // console.log('kurs nie zmienił się')
      $('.kupnoWartosc').text(kursAktualnyKupno)
      $('.kupno').html('<i class="fas fa-arrows-alt-h"></i>')
    }

    
    
    kursPoczatkowyKupno=kursAktualnyKupno
    
    
    })


  }

 $('.btn').on('click', sprawdzKurs);


});
