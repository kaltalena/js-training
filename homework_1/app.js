"use strict"

var firstName = null;
// not null, not an empty string
while(firstName === null || firstName === "\"\""){
    let userInput = prompt("Ваше имя");
    firstName = userInput;;
}

var lastName = null;
// not null, not an empty string
while(lastName === null || lastName === "\"\""){
    let userInput = prompt("Ваша фамилия");
    lastName = userInput;;
}

var gender = "";
// М or Ж only, case insensitive
//default value set to "" to avoid calling toUppercase() on undefined 
while(gender.toUpperCase() != "М" &&  gender.toUpperCase() != "Ж"){
    let userInput = prompt("Ваш пол ('М' или 'Ж')", "");
    gender = userInput;
}

 let age = 0;
 while(!Number.isFinite(age) || age <= 0){
    let userInput = prompt("Ваш возраст (Положительное число больше нуля)");
    age = userInput && Number(userInput);
}

gender = gender.toUpperCase();
let isRetired = "";
let getIsRetired = (age, gender) => {
    if(gender === "М" && age >=63 || gender === "Ж"  && age >= 58) {
        isRetired = "Да";
    }else{
        isRetired = "Нет";
    }
    return isRetired;
};
alert("Полное имя: " +firstName+" "+lastName + "\n" + "Пол: "+gender+"\n"+"На пенсии: "+getIsRetired(age, gender));