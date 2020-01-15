let imiona=['Monika', 'Jan', 'Łukasz', 'Ania']

imiona.pop()
console.log(imiona)
let nowaTablica=imiona.reverse();

let numerek=[1,555,12,558,666111]
console.log(numerek)

let posortowaneNumerki= numerek.sort();

function sortMain(a,b){
    return a-b
}

// sortowanie liczb//
posortowaneNumerki= numerek.sort(function sortMain(a,b){
    return a-b
})

console.log(posortowaneNumerki)


let monikaKowalska=['Monika', 'Kowalska', 'Poznań', '5000 zł', ]

let janKowalskiObj={
    imie: "Jan",
    nazwisko:"Kowalski",
    pensja: 5000,
    dzieci: 0
}

const Person= {
    name = String;
    surname = String;
    tprintInfo = Number,

}


