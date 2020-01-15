// function pierwszyEvent(){
    // console.log("działa")
// }

function pierwszyEvent(){
    let changeClass=document.getElementsByClassName("pierwsza")
    console.log("TCL: pierwszyEvent -> changeClass", changeClass)
    
    changeClass[0].classList.add("druga")
}


