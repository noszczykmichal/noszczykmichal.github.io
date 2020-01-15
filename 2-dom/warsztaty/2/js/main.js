let inputTyp= document.getElementsByTagName('input')[2].addEventListener('click', function (e){
    e.preventDefault()
    let fname= document.getElementsByName('fname')[0].value
    let lname= document.getElementsByName('lname')[0].value
    console.log(fname+ " "+ lname)
})







// document.getElementsByTagName('submit').addEventlistener('click', function(e){e.preventDefault(); console.log(fname,lname);});