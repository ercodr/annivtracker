let celebAnniv = document.querySelector("#celeb-count")
let nextAnniv = document.querySelector("#next-count")

// let num = 1;

year = new Date().getFullYear();
year = year.toString();

let mth = new Date().getMonth();
let dt = new Date().getDate();

if(mth >= 8){

    celebAnniv.innerHTML = year[3];
    
    if(year[3] == 1){
        
        celebAnniv.innerHTML += '<sup>st<sup>';
    
    } else if(year[3] == 2) {
        
        celebAnniv.innerHTML += '<sup>nd<sup>';
    
    } else if(year[3] == 3){

        celebAnniv.innerHTML += '<sup>rd<sup>';

    } else{
        celebAnniv.innerHTML += '<sup>th<sup>';
    }
}

let newYear = Number(year) + 1;

let toStrdate = '7/1/' + newYear;

let dateNext = new Date(toStrdate); 

let dateCurrent = new Date(); 
let diffTime = Math.abs(dateNext - dateCurrent);
let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


nextAnniv.innerHTML = diffDays;

document.querySelector('.footer').innerHTML += year;



