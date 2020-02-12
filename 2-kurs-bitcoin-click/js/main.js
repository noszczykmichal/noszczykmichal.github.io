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

    

    })

    console.log('działa')

  }

 $('.btn').on('click', sprawdzKurs);


});
