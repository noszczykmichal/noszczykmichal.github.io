let changeHref= document.getElementsByClassName("mainA");
console.log("TCL: changeHref", changeHref)

for (let i= 0; i < changeHref.length; i++){
    if(changeHref[i].innerHTML == "drugi link"){
        changeHref[i].href="https://www.onet.pl/"
    }
}