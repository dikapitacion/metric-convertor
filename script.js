let btnEl = document.getElementById("btn-el");
let inputEl=0;
let lt = document.getElementById("lengthtxt");
let vt = document.getElementById("volumetxt");
let mt = document.getElementById("masstxt");
btnEl.addEventListener("click",function (){
    inputEl = document.getElementById("input-el").value;
    lengthConvert(inputEl);
    VolumeConvert(inputEl);
    massConvert(inputEl)
})

function lengthConvert(num){
    lt.textContent = `${num} meters = ${(num*3.28084).toFixed(4)} feet | ${num} feet = ${(num*0.348).toFixed(4)} meters`
}

function VolumeConvert(num){
    vt.textContent = `${num} litres = ${(num*0.264172).toFixed(4)} gallon | ${num} gallon = ${(num*3.78541).toFixed(4)} litres`
}

function massConvert(num){
    mt.textContent = `${num} kilograms = ${(num*2.20462).toFixed(4)} pounds | ${num} pounds = ${(num*0.453591830542594).toFixed(4)} kilograms`
}