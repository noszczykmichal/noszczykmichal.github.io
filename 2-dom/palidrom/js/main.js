function palindromy(slowo) {
    slowo = slowo.toUpperCase()
    console.log(slowo)
    let odwrocone = slowo.split('').reverse('').join('');
    if(odwrocone == slowo) {
      console.log("Tak")
    } else {
      console.log("nie")
    }
  }
  
  
  palindromy("mieszko")