$(function () {
  let kursPoczatkowy = null;
  $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    // console.log(result)

    kursPoczatkowy = result['PLN'].buy;
    console.log("TCL: kursPoczatkowy", kursPoczatkowy)

  })

  function sprawdzKurs(){
    $.getJSON('https://blockchain.info/pl/ticker', function (result) {
    kursAktualny=result['PLN'].buy
    console.log("TCL: sprawdzKurs -> kursAktualny", kursAktualny)

    if(kursAktualny>kursPoczatkowy){
      // console.log('kurs wzrósł')
      //w zależności od wyniku działania if'a; wstrzykuje aktualną wartosc kursu->.kupnoWartosc; a do do spanu .kupno odpowiednią ikonę
      $('.kupnoWartosc').text(kursAktualny)
      $('.kupno').html('<i class="fas fa-arrow-up"></i>')
      $('.kupno>i').css({'color': 'green'})
    }  else if(kursAktualny<kursPoczatkowy){
      // console.log('kurs spadł')
      $('.kupnoWartosc').text(kursAktualny)
      $('.kupno').html('<i class="fas fa-arrow-down"></i>')
      $('.kupno>i').css({'color': 'red'})
    }else{
      // console.log('kurs nie zmienił się')
      $('.kupnoWartosc').text(kursAktualny)
      $('.kupno').html('<i class="fas fa-arrows-alt-h"></i>')
    }
    
    kursPoczatkowy=kursAktualny
    console.log("TCL: sprawdzKurs -> kursPoczatkowy", kursPoczatkowy)
    
    })


  }

 $('.btn').on('click', sprawdzKurs);


});
