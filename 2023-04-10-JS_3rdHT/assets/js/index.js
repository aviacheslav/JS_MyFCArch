/*
const isGoodNumber=function(number){
    let verdict=true;
    if(typeof(number)!='number' || 
        isNaN(number))
    {
        verdict= false;
    }
    return verdict;
}
const MaxOfTwoNumbers=function(number1, number2){
    if(!isGoodNumber(number1) || !isGoodNumber(number2)){
        return null;
    }else{
        if(number1>=number2){
            return number1;
        }else{
            return number2;
        }
    }
}
const NumberIsEvenNotOdd=function(number){
    if(typeof(number)!='number' || 
        isNaN(number))
    {
        return null;
    }else{
        if(number%2==0){
            return true;
        }else{
            return false;
        }
    }   
}
//a=+prompt("Input first number for comparison");
//b=+prompt("Input second number for comparison");
a1=prompt("Input first number for comparison");
b1=prompt("Input second number for comparison");
a=+a1;
b=+b1;
y=MaxOfTwoNumbers(a, b);
//if(isGoodNumber(a)&&isGoodNumber(b)){
if(y!=null){
    alert('Maximum value you input is '+y);
}else{
    alert(' You have input incorrect value(s) ');
    if(!isGoodNumber(a)){
        alert('a ='+a1+' is not a good number');
    }
    if (!isGoodNumber(b)){
        alert('b ='+b1+' is not a good number');
    }
}
a=+prompt("Input  number and I'll tell U, whether it's even or odd");
if(isGoodNumber(a)){
    if(NumberIsEvenNotOdd(a)){
        alert('even');
    }else{
        alert('odd');
    }
}else{
    alert('not a good number');
}
*/

/*
classWork  2023.04.11 while cycle

let x=0;
while(x<=10){
    console.log(x);
    x+=2;
}

x=-2;
while(x<10){
    x+=2;
    console.log(x);
}

x=0;
while(x<=10){
    console.log(x);
    x+=2;
}

x=0;
while(x<=10){
    if(x%2!==0){
        continue;
    }
    console.log(x);
}
*/

/*
document.write("Hometask 2023.04 from 11 to 12");
const passwordSaved="a1s2", maxTimesToTry=5;
let passwordInput, count=0, continueInput;
do{
    passwordInput=prompt("Input your password");
    count++;
    continueInput=(passwordInput!==passwordSaved && count<maxTimesToTry);
    if(passwordInput!==passwordSaved){
        alert("Invalid password. Try again");
    }
}while(continueInput);
if(passwordInput===passwordSaved){
    alert("You entered the System successfully");
}else{
    alert("You entered incorrect password "+count+" times. Access denied");
}
console.log(" numbers from 30 to 0 descending");
for(let i=30; i>=0; i--){
    console.log(i);
}
console.log("sum from 1 to 100");
let sum=0, current=0, prev;
while(current<100){
    current++;
    prev=sum;
    sum+=current;
    console.log(prev+"+"+current+"="+sum);
}

*/
/*
//class work 2023-

const vehicleWithWheels={
    wheels: 4,
    length: 3,
    width: 1.5,
    speed: 240
}

console.log(vehicleWithWheels);
vehicleWithWheels.speed=180;
console.log(vehicleWithWheels.speed);
vehicleWithWheels.passengers=4;
console.log(vehicleWithWheels.passengers);
console.log(vehicleWithWheels);
*/

//Homework 2023-04-12 to 13
//firstName='Ivan';
//surname='Petrov';
//isMale=true;
//age=30;

//es  settings in JS, ic ne let declare vars ac let
/*

let firstName='Ivan';
let surname='Petrov';
let isMale=true;
let age=30;

const User=function(firstName, surname, isMale, age){
    this.firstName=firstName;
    this.surname=surname;
    this.isMale=isMale;
    this.age=age;
    this.speak = function(words) {
        alert(words);
    };
    this.getFullName = function() {
        //return firstName+" "+surname;
        return this.firstName+" "+this.surname;
    };
}

user1=new User(firstName, surname, isMale, age); //new - vikts! 
console.log(user1);
user1.speak("Hello!, I am"+user1.getFullName());
//console.log(user1.getFullName());
*/
/*
//classwork 2023-04-13

const user={
    firstName: 'Test',
    lastName:' Testenko',
    age: 125,
    isMale: true
}

function greetUser(user){
    return `Hello, dear ${user.firstName } ${user.lastName }`;
}
function greetUser(user){
    let text;
    if(user.age<18){
        text='Hey, '+user.firstName+" "+user.lastName+", hi!";
    }else{
        if(user.isMale){
            text='Hello, Mr. "+"user.firstName+" "+user.lastName+"!";
        }else{
            text='Hello, dear "+"user.firstName+" "+user.lastName+"!";
        }
    }
    return text;
}

alert(greetUser(user));
*/
//tomework 2023-04-13to17 

const Dict={
    ket1: 'Test',
    lastName:' Testenko',
}
//
console.log("Task 1");//---------------------------------------------------------
let arr1=[1, 2, 3];
console.log("Ini array "+arr1);
arr1.push(6, 5, 4);
console.log(" array after add 6, 5, 4: "+arr1);
arr1.unshift(-3, -2, -1);
console.log(" array after add -3, -2, -1 to first pos: "+arr1);
console.log("Task 2");//-----------------------------------------------------------
let arr2=[ 100, -273.15, 0,1, 2, 3, 4, 5, 6, 9, 10 ];//Видалити перші та остані два значення з нього.
console.log("Ini array "+arr2);
arr2.splice(0, 2);
console.log(" del first 2: "+arr2);
for(let i=1; i<=2; i++){
    arr2.pop();
}
console.log("after del last 2: "+arr2);
arr2.splice(arr2.length, 0, 9, 10);
console.log("after returning  last 2 - 9 and 10: "+arr2);
//arr2.splice(arr2.length-1-2, 2);
arr2.splice(arr2.length-1-(2-1), 2);
console.log("after del  last 2 - 9 and 10: "+arr2);
console.log("Task 3");//-----------------------------------------------------------
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на [1, 4, 5].
let arr3= [1, 2, 3, 4, 5];
console.log("Ini array "+arr3);
arr3.splice(2-1, 2);
console.log("now arr is: "+arr3);
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
console.log("Task 4 - after 6");
console.log("Task 5");//-----------------------------------------------------------
let arr5=[1, 2, 3, 4, 5];
console.log("Ini array "+arr5);
arr5.splice(4-1, 0, 'a', 'b', 'c');
console.log("now arr is: "+arr5);
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice перетворити його на масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
console.log("Task 6");//-----------------------------------------------------------
let arr6=[1, 2, 3, 4, 5];
console.log("Ini array "+arr6);
arr6.splice(2-1, 0, 'a', 'b');
arr6.splice(7-1, 0, 'c');
arr6.splice(arr6.length-1+1, 0, 'e');
console.log("now arr is: "+arr6);
console.log("Task 4");//-----------------------------------------------------------
//Створити масив [1, 2, 3, 4, 5]. За допомогою методу splice записати у новий масив елементи [2, 3, 4].
let arr4= [1, 2, 3, 4, 5];
console.log("Ini array "+arr4);
let arr4_part=arr4.splice(2-1, 3);
console.log("now arr4 is: "+arr4+' and new array is: '+arr4_part);