'use strict'
console.log('Task1');
let arr1=[10, 20, 30, 40, 50, 60];
console.log('arr1 before slice');
console.log(arr1);
let arr2=arr1.slice(1-1, 3);
console.log('arr2 = arr1.slice(0, 3)');
console.log(arr2);
console.log('arr1 after slice');
console.log(arr1);
console.log('Task2');
arr2=arr1.slice(-2);
console.log('arr2 = arr1.slice(-2)');
console.log(arr2);
console.log('or:');
arr2=arr1.slice(arr1.length-2);
console.log('arr2 = arr1.slice(L-3)');
console.log(arr2);
console.log('Task3');
let arr31=[9, 8, 7];
console.log('arr31 before reverse ', arr31);
let arr32=arr31.reverse();
console.log('arr31 after reverse ', arr31);
console.log('arr32 ',arr32);
console.log('Task4');
let arr41=[5,8,44,32,14,1,3];
console.log('arr41 before sort ', arr41);
function callBackSortAscending(memberCur, memberNext){
    return memberCur>=memberNext?1:-1;
}
function callBackSortDescending(memberCur, memberNext){
    return memberCur<=memberNext?1:-1;
}
let arr42=arr41.sort(function(memberCur, memberNext){
    return memberCur>=memberNext?1:-1;
});
console.log('arr41 after sort ', arr41);
console.log('arr42 ',arr42);
arr42=arr41.sort(callBackSortDescending);
console.log('arr41 after sort descending ', arr41);
console.log('arr42 ',arr42);
console.log('Task5');
let arr5=[2,5,8,7,9];
console.log('arr5 ',arr5);
arr5.forEach(function(val, index){
    console.log('Element ' + val +' has index '+index);
});
console.log('Task6');
let arr61= [10,9,8,7,6,5];
console.log('arr61 ',arr61);
let arr62=arr61.map(function(value, index){
    return value+index;
});
console.log('arr61 ',arr61);
console.log('arr62 ',arr62);
//NextHomeTask;
function Cat(name, age, breed){//isMale){
    this.name=name;
    this.age=age;
    this.breed=breed;
}
function createCats (amount){
    const catArray=[];
    for(let i=0; i<amount; i++){
        const cat=new Cat(
            `name${i}`,
            Math.round(Math.random()*10),
            `breed${i}`
        );
        catArray.push(cat);
    }
    return catArray;
}
//Cat.prototype=catPrototype;
//let cats=createCats(10);
//console.log('Cats');
//console.table(cats);

const catPrototype={
    eats: function(foodName){
        return 'cat '+ this.name+' eats '+foodName;
        //console.log('cat '+ this.name+' eats '+foodName);
    },
    sayMeou: function  (){
        return 'Meou';
        //console.log('Meou');
    }
}

Cat.prototype=catPrototype;
let cats=createCats(10);
console.log('Cats');
console.table(cats);

//Cat.prototype=catPrototype;
//cats.__proto__=catPrototype;
console.log('name='+cats[3-1].name);
console.log(cats[3-1].eats('meat'));
console.log(cats[3-1].name+' '+cats[3-1].eats('meat')+' '+cats[3-1].sayMeou());

