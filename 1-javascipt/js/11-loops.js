fetch('https://jsonplaceholder.typicode.com/posts')
.then(res=> res.json())
.then(res=>{

for(let i = 0; i< res.length; i++){
    if (res[i].id === 50){
        console.log(res[i.title])
    }
}

res.forEach((element, index)=>{
    console.log(element.title)
    console.log(index)
});