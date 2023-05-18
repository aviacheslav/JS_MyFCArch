/*
'use strict'

const iniWords='test string abc';
function Capitalize(iniWords){
    let separateWords=iniWords.split(' ');
    //let newWords=[];
    //let word='';
    let letter;
    let newString='';
    console.log(separateWords);
    for(let i=1; i<=separateWords.length; i++){
        console.log(separateWords[i-1]);
        for(let j=1; j<=separateWords[i-1].length; j++){
            if(j==1){
                letter=separateWords[i-1][j-1].toUpperCase();
            }else{
                letter=separateWords[i-1][j-1];
            }
            console.log(letter);
            //word+=letter;
            newString+=letter;
        }
        //console.log(word);
        //newString+=word;
        console.log(newString);
        if(i<separateWords.length){
            newString+=' ';
        }
    }
    return newString;
}
let newString=Capitalize(iniWords);
console.log(newString);


let arr1=[1, 2, 3, 4], arr2=[5, 6, 7, 8];
//let att12=(...arr1, ...arr2)=>{}
//let arr3=(...arr1, ...arr2);
let arr3=[...arr1, ...arr2];
console.log(arr3);
let arr4=[...arr1,'asdfgh',...arr2];
console.log(arr4);

*/

/*

function countStrings1(...params){
    let count=0;
    for(let i=1; i<=params.length; i++){
        //if(params[i-1] instanceof String){//no, it is for objs only
        //if( isString(params[i-1])){//no such fns
        //if( typeof(params[i-1]===String)){//no
        //if( typeof(params[i-1]==='String')){//no
        //if( typeof(params[i-1])==='string' || typeof(params[i-1])==='String'){//so works
        if( typeof(params[i-1])==='string'){
            count++;
        }else{
           // console.log('not String!');
        }
    }
    return count;//params.length;//count;
}

function countStrings2(...params){
    let count=0;
    params.forEach(function(val){
        //if(typeof(val)===String){//no
        //if(typeof(val)==='String'){//no
        if(typeof(val)==='string'){
            count++;
        }
    });
    
    return count;//params.length;//count;
}
//function countStrings3(...params){
////    return params.reduce(function(count, val){
 //       count+((typeof(val)==='string')-0.0);
//        console.log('val=',val,'count=',count,"val is string=",(typeof(val)==='string'),"whole expr=",((typeof(val)==='string')-0.0));
//  }, 0);
//}
function countStrings3(...params){
    return params.reduce(function(count, val){
        //count+((typeof(val)==='string')-0.0);
        console.log('val=',val,'count=',count,"val is string=",(typeof(val)==='string'),"whole expr=",((typeof(val)==='string')-0.0));
        count+((typeof(val)==='string')-0.0);
    });


}
function countStrings4(...params){
    return params.reduce(((count, val)=>count+((typeof(val)==='string')-0.0)), 0);
}
function countStrings41(...params){
    return params.reduce((count, val)=>count+Number(typeof(val)==='string'), 0);
}
//let R51=(...params)=>params.reduce((count, val)=>count+Number(typeof(val)==='string'));


console.log('Count strings, method1: '+countStrings1(1, 2, 'test', true, 'false', null));
console.log('Count strings, method2: '+countStrings2(1, 2, 'test', true, 'false', null));
console.log('Count strings, method3: '+countStrings3(1, 2, 'test', true, 'false', null));
console.log('Count strings, method4: '+countStrings4(1, 2, 'test', true, 'false', null));
console.log('Count strings, method41: '+countStrings41(1, 2, 'test', true, 'false', null));

*/

/*function createAdder(x1){
    let x2=x1;
   // return function (){
    //    return x2+=x1;
    //}
     function add (){
         x2+=x1;
         return x2;
    }
    return add;
}
//x1=10;
const adder= createAdder(10);*/

/*function createAdder(x1){
    return function (x2){
        return x1+=x2;
    }    
    return add;
}
x1=10;
const adder= createAdder(x1);

const factorial=function(x){
    
    if(x>1){
         return x*=factorial(x-1);
    }else if (x<0){
        throw new Error('Parameter is not a number!');
    }else{
        return x;
    
    }
}
let x=-5;
console.log(factorial(x));*/

/*const brackets=function(x){
    if (x==0){
        return '';
    }else if(x==1){
        return '()';
    }else if(x>1){
         return '('+brackets(x-1)+')';
    }else if (x<0){
        throw new RangeError('Parameter is not a natural number!');
    }
    //else{
    //    return x;
    //
    //}
}
let x=4;
console.log(brackets(x));*/

/*

class Worker2{
    constructor(firstName, lastName, age, workstage, qualification){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.workstage=workstage;
        this.qualification=qualification;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
    isAdult(){
        return this.age>=18;
    };
}

let worker1=new Worker2('Ivan', 'Ivanov', 30, 5, 'middle');
let worker2=new Worker2('Petr', 'Petrenko', 17, 1, 'junior');
console.log(worker1);
if(worker1.isAdult()){
    console.log(worker1.fullName()+' is adult');
}else{
    console.log(worker1.fullName()+' is not adult');
}
console.log(worker2);
if(worker2.isAdult()){
    console.log(worker2.fullName()+' is adult');
}else{
    console.log(worker2.fullName()+' is not adult');
}

class Client{
    constructor(firstName, lastName, age, email){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
    };
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
    isAdult(){
        return this.age>=18;
    };
}
class Address{
    constructor(country, city, street, N){
        this.country=country;
        this.city=city;
        this.street=street;
    
        this.N=N;
    }
    print(){
        return `${this.country} ${this.city} ${this.street} street,  ${this.N} `;
    }
}
class Order{
    constructor(goods, address, client, Status){
        this.goods=goods;
        this.address=address;
        this.client=client;
        this.Status=Status;
        
    }
    print(){
        return `Ordered: ${this.goods}; To: ${this.address.print()} By: ${this.client.fullName()} Status: ${this.Status}`;
    }
}

let client1=new Client('Ivan', 'Ivanov', 30, '1@i.ua');
let client2=new Client('Petr', 'Petrenko', 17, '2@i.ua');

let address1=new Address('UK', 'London', 'Downing', 10);
let address2=new Address('Germany', 'Berlin', 'Unterdenlinden', 20);

let order1=new Order(['bread', 'butter', 'sausage'], address1, client1, "delivered");
console.log(order1.print());

*/

/*class Order{
    constructor (customer, address, status, products){
        if(typeof address !)
    }
}*/

/*
class Worker1{
    constructor(firstName, lastName, age, workstage, qualification){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.workstage=workstage;
        this.qualification=qualification;
    }
    fullName(){
        return `${this.firstName} ${this.lastName}`;
    };
    isAdult(){
        return this.age>=18;
    };
}

class Worker{
    constructor(firstName, lastName, age, yearsOfExperience){
        
        this.firstName=firstName;
        
        this.lastName=lastName;
        
        this.age=age;
        
        this.yearsOfExperience=yearsOfExperience;
    }

    set firstName(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid firstName');
        }
        this._firstName=name;
    }
    get firstName(){
        return this._firstName;
    }
    set lastName(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid lastName');
        }
        this._lastName=name;
    }
    get lastName(){
        return this._lastName;
    }
    set age(yearsOfLife){
        if(typeof yearsOfLife != 'number' || yearsOfLife<16){
            throw new TypeError('Invalid age');
        }
        this._age=yearsOfLife;
    }
    get age(){
        return this._age;
    }
    set yearsOfExperience(yearsOfWork){
        if(typeof yearsOfWork != 'number' || yearsOfWork<0){
            throw new TypeError('Invalid stage of experience');
        }
        this._yearsOfExperience= yearsOfWork;
    }
    get yearsOfExperience(){
        return this._yearsOfExperience;
    }

    get fullName(){
        return this._firstName+' '+this._lastName;
    }


   //fullName(){
    //   return `${this.firstName} ${this.lastName}`;
    //}
    isAdult(){
        return this.age>=18;
    };
}

let workerChecked1=new Worker('Ivan', 'Ivanov', 40, 5);
console.log('workerChecked1',workerChecked1.fullName, ' ',workerChecked1);
let workerChecked2=new Worker(666, 'Diablo', 40, 5);
console.log('workerChecked2',workerChecked2.fullName, ' ',workerChecked2);
let workerChecked3=new Worker('Petr', '', 40, 5);
console.log('workerChecked3',workerChecked3.fullName, ' ',workerChecked3);
let workerChecked4=new Worker('Petr', 'Petrov', -5, 5);
console.log('workerChecked4',workerChecked4.fullName, ' ',workerChecked4);
*/

/*
class Figure{
#name;
    constructor(name){
        this.#name=name;
    }
    getArea(){
        return Math.PI*this.R*this.R;
    }
}

class Circle extends Figure{
    constructor(r){
        super('Circle');
        this.r=r;
    }
    getArea(){
        return Math.PI*this.r*this.r;
    }
}
let aFigure=new Circle(10);
let S=aFigure.getArea();
console.log('figure: ', aFigure,' S='+aFigure.getArea());
*/

/*
class Animal{
    #name;
    #species;
    constructor(name, species){
        this.Species=species;
        this.Name=name;
    }
    get Species(){
        return this.#species;
    }
    set Species(species){
        this.#species=species;
    }
    get Name(){
        return this.#name;
    }
    set Name(name){
        this.#name=name;
    }
    //
    eat(food){
        console.log(`${this.Species} ${this.Name} eats ${food}`);
    }
    move(){

    }
    sleep(){
        console.log(`${this.Species} ${this.Name} sleeps`);
    }
}

class Dog extends Animal{
    constructor(name){
        super(name, "Dog");
    }
    move(){
        console.log(`${this.Species} ${this.Name} walks, runs and jumps`);
    }
}
class Cat extends Animal{
    constructor(name){
        super(name, "Cat");
    }
    move(){
        console.log(`${this.Species} ${this.Name} walks, runs and jumps`);
    }
}
class Hamster extends Animal{
    constructor(name){
        super(name, "Hamster");
    }
    move(){
        console.log(`${this.Species} ${this.Name} walks, runs and jumps`);
    }
}
class Trainer{
    constructor(firstName, lastName){
        this.FirstName=firstName;
        trhis.LastName=lastName;
    }
    set FirstName(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid firstName');
        }
        this._firstName=name;
    }
    get FirstName(){
        return this._firstName;
    }
    set LastName(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid lastName');
        }
        this._lastName=name;
    }
    get LastName(){
        return this._lastName;
    }
    get FullName(){
        return `${this.firstName} $thid{}`;
    }
    //
    feed(animal, food){
        if(!(animal instanceof Animal)){
            throw TypeError('you try to feed not an animal!');
        }
        if(!(food instanceof String)){
            throw TypeError('you try to feed with not food!');
        }
        console.log|('Trainer '+this.G+)
        animal.eat(food);
    }
    makeMove(animal){
        if(!(animal instanceof Animal)){
            throw TypeError('you try to train not an animal!');
        }
        animal.move(fod);
    }
}
*/
/*
for(const num of [1, 2, 4]){
    
   console.log(num);
}

const  MultiplyAnyQuantity=function(...nums){
    let p=1;
    for(const num of nums){
        p*=num;
       //console.log(num, p);
    }
    return p;
}
let y=MultiplyAnyQuantity(1, 2, 4);
console.log(y);
*/
/*
const names1=['Test', 'User', 'Anton', 'Petro'];
const names2=['Anna', 'Andriy', 'User'];

let set2=new Set();
names1.forEach(function(val){
    set2.add(val);
});
names2.forEach(function(val){
    set2.add(val);
});
console.log(set2);
*/

/*
'use strict'

function btnAlert(){
    const x=createClicksCounter();
    alert('Urbi et Orbi! We PRESSED this button '+x()+' times');
}

function createClicksCounter(){
    //debugger;
    let count=0;
    function counter(){
        count++;
        //return count;
        alert(count+' times');
    }
    return counter;
}

const [firstButton]=document.getElementsByTagName('button');

firstButton.addEventListener('click', btnAlert);

document.getElementById('MyId');
document.querySelector(#par);
document.querySelector(p#par);

document.querySelectorAll
*/

'use strict'
let x=0;
/*const intervalId=setInterval( ()=>{
    
    console.log(++x);
    if(x>=20){
        clearInterval(intervalId);
    }
},100);*/

/*const intervalId=setTimeout( ()=>{
    
    console.log(++x);
    if(x>=20){
        clearInterval(intervalId);
    }
},100);*/

function ShowX(x){
    x++;
    setTimeout( ()=>{
        console.log("x="+x);
    },100);
    if(x<20){
        ShowX(x);
    }
}

ShowX(0);