
function countStrings1(...params){//works 
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
//function countStrings3(...params){
//    return params.reduce(function(count, val){
//        console.log('val=',val,'count=',count,"val is string=",(typeof(val)==='string'),"whole expr=",((typeof(val)==='string')-0.0));
//        count=((typeof(val)==='string')-0.0);
//    });
//}
function countStrings3(...params){
    return params.reduce(function(count, val){
        console.log('val=',val,'count=',count,"val is string=",(typeof(val)==='string'),"whole expr=",((typeof(val)==='string')-0.0));
        count+=((typeof(val)==='string')-0.0);
        return count;
    }, 0);
}
function countStrings4(...params){
    return params.reduce(((count, val)=>count+((typeof(val)==='string')-0.0)), 0);
}
function countStrings41(...params){
    return params.reduce((count, val)=>count+Number(typeof(val)==='string'), 0);
}
//let R51=(...params)=>params.reduce((count, val)=>count+Number(typeof(val)==='string'));

function countStrings51LaterClassWasShow(...params){
    let selectedArr= params.filter(function(val){
        return typeof(val)==='string';
    });
    return selectedArr.length;
}

function countStrings52LaterClassWasShow(...params){
    let selectedArr= params.filter(val=> typeof(val)==='string');
    return selectedArr.length;
}

console.log('Count strings, method1: '+countStrings1(1, 2, 'test', true, 'false', null));
console.log('Count strings, method2: '+countStrings2(1, 2, 'test', true, 'false', null));
console.log('Count strings, method3: '+countStrings3(1, 2, 'test', true, 'false', null));
console.log('Count strings, method4: '+countStrings4(1, 2, 'test', true, 'false', null));
console.log('Count strings, method41: '+countStrings41(1, 2, 'test', true, 'false', null));
console.log('Count strings, method51Cl: '+countStrings51LaterClassWasShow(1, 2, 'test', true, 'false', null));
console.log('Count strings, method52Cl: '+countStrings52LaterClassWasShow(1, 2, 'test', true, 'false', null));

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

function createAdder(x1){
    return function (x2){
        return x1+=x2;
    }    
    return add;
}
x1=10;
const adder= createAdder(x1);
