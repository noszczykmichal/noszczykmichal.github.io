const uczniowie=document.querySelectorAll('[id^=uczen]');
// console.log("TCL: uczniowie", uczniowie);


let ocenyTablica=[];
let licznik=0;
ocenyTablica.push(uczniowie[0].children);
let liczbaOcen=0;
let srednia=0;


for(let i=0; i<ocenyTablica.length; i++){
   for (let j=0; j<ocenyTablica[i].length;j++){
    //    console.log(ocenyTablica[i][j])
    
    if(ocenyTablica[i][j].nodeName=="INPUT"){
        // console.log(parseFloat((ocenyTablica[i][j].value),10))
        let ocena=parseFloat((ocenyTablica[i][j].value),10)
        if(isNaN(ocena)==false){
           licznik+=ocena
           liczbaOcen++
        }
        
        
    }
    
   }
   console.log(licznik)
   console.log(liczbaOcen)

}


















