// function pierwszyEvent(){
    // console.log("działa")
// }

function pierwszyEvent(){
    let changeClass=document.getElementsByClassName("pierwsza")
    console.log("TCL: pierwszyEvent -> changeClass", changeClass)
    
    changeClass[0].classList.add("druga")

}


document.getElementById('mainBtn').onclick= pierwszyEvent


function inputEvent(){
    let valueInput= document.getElementById("mainInput").value
    console.log(valueInput)
    document.getElementById("p3").innerHTML=valueInput
}

document.getElementById("mainInput").oninput=inputEvent


// function wkurzacz(){
    // alert(132)
// }

// document.getElementById('maindiv').addEventListener('click', wkurzacz)

// document.getElementById('maindiv').addEventListener('click', function (e){
    // console.log(e)
    // alert(132)
// })

document.getElementById('wp').addEventListener('click',function (dzialanie){
    dzialanie.preventDefault()
})