// es5

function Pracownik(name,sname, email, phone){
    this.nameSurName=name + " " + sname;
    this.email= email
    this.phone=phone
}

let wszyscyPracownicy= []

let janKowalski = new Pracownik ("Jan", "Kowalski", "jk@op.pl", "777777777")

wszyscyPracownicy.push(janKowalski)

console.log(janKowalski)
console.log("TCL: janKowalski", janKowalski)

console.log("TCL: wszyscyPracownicy", wszyscyPracownicy)

let adamNowak = new Pracownik ("Adam","Nowak", "an@op.pl", "777777")
wszyscyPracownicy.push(adamNowak)
console.log("TCL: wszyscyPracownicy dodano adam Nowak", wszyscyPracownicy)


// es6

class NowyPracownik{
    constructor(name,sname, email, phone, ageChildren, children){
    this.nameSurName=name + " " + sname;
    this.email= email
    this.phone=phone
    this.children={
        age: ageChildren,
        nameChildren: children
    }
}

}

let adamJakis = new NowyPracownik("adam", "jakiś", "aj@wp", "8888888", "3 lata", "Brajan")
console.log("TCL: adamJakis", adamJakis)

