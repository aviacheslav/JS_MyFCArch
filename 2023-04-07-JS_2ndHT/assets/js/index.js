//alert('Helo, world!');
//window.alert(42);
//alert(42);//ce s'default. ce pecul'i o' window iface
//
/*let x=2;//, myName='Vyacheslav';
const myName='Vyacheslav';
console.log(x);
console.log(myName);
x=3.14;//, myName='Vyacheslav';
 //myName='not Vyacheslav';
 console.log(x);
console.log(myName);
*/

/*
let passwordKept='asdf';
console.log("This is weak place for those who can work with development tools");
let passwordInput=prompt("Input your password");
if (passwordInput==passwordKept){
    alert("You entered the system successfully");
}else{
    alert("Access to system denied: Incorrect password");
}
*/
/*
//2023-04-07
let x=+prompt("Input your number");
let y=0;
if(x!=null){
   y=x*x;
}
alert(x+"^2="+y);
let minutes=+prompt("Input minutes");
let scnds=0;
if(minutes!=null){
    scnds=minutes*60;
}
alert(minutes+" minutes  is "+scnds+" seconds");
*/
/*
let month=prompt("Input month: ");
switch(month){
    case 'Январь':
    case 'Січень':
    case 'January':
    case '1':
    case 1:
    case 'Февраль':
    case 'Лютий':
    case 'February':
    case '2':
    case 2:
    case 'Декабрь':
    case 'Грудень':
    case 'December':
    case '12':
    case 12:{
        alert("Winter");
        break;
    }
    case 'Март':
    case 'Березень':
    case 'March':
    case '3':
    case 3:
    case 'Апрель':
    case 'Квітень':
    case 'April':
    case '4':
    case 4:
    case 'Май':
    case 'Травень':
    case 'May':
    case '5':
    case 5:{
        alert("Spring");
        break;
    }
    case 'Сентябрь':
    case 'Вересень':
    case 'September':
    case 'Вересень':
    case 'September':
    case '9':
    case 9:
    case 'Октябрь':
    case 'Жовтень':
    case 'October':
    case '10':
    case 10:
    case 'Ноябрь':
    case 'Листопад':
    case 'November':
    case '11':
    case 11:{
            alert("Autumn");
            break;
    }
    case 'Июнь':
    case 'Июнь':
    case 'June':
    case 'Вересень':
    case 'September':
    case '6':
    case 6:
    case 'Июль':
    case 'Липень':
    case 'July':
    case '7':
    case 7:
    case 'Август':
    case 'Серпень':
    case 'August':
    case '8':
    case 8:{
            alert("Summer");
            break;
    }
    default:{
        //must be last, works if nothing else suits
        alert('Error: no such month!');
    }
}
*/
//let notebook1Name="Ноутбук ASUS Laptop X515EA-BQ2066";
//let notebook1Price=20999;
const notebook2Name="Ноутбук Lenovo IdeaPad Gaming 3 15IAH7";
const notebook2Price=39999;
const MFD_name="МФУ Canon PIXMA Ink Efficiency E414 (1366C009)";
const MFD_price=3399;
const TVSet1_name="Телевизор Samsung UE32T4510AUXUA";
const TVSet1_price=8999;
const PhotoCam1_name="Фотоаппарат Canon EOS RP RF 24-105 мм";
const PhotoCam1_price=46999;
const eBook1_name="Электронная книга EVROMEDIA Cambridge";
const eBook1_price=3744;
const goodName=prompt("Input good name");
let quantity=0, price, cost;
/*
switch(goodName){
    case notebook2Name:
    case MFD_name:
    case TVSet1_name:
    case PhotoCam1_name:
    case eBook1_name:{
        quantity=prompt("Input quantity");
        break;
    }
    default:{
        alert("No such good proposed");
    }
}
if(quantity>0){
    switch(goodName){
        case notebook2Name:{
            price=notebook2Price;
            break;
        }
        case MFD_name:{
            price=MFD_price;
            break;
        }
        case TVSet1_name:{
            price=TVSet1_price;
            break;
        }
        case PhotoCam1_name:{
            price=PhotoCam1_price;
            break;
        }
        case eBook1_name:{
            price=eBook1_price;
            break;
        }
    }
    return price;
}
FuncOrder=function(){
    goodName=prompt("Input good name");
    let quantity=0, price, cost;
    switch(goodName){
        case notebook2Name:
        case MFD_name:
        case TVSet1_name:
        case PhotoCam1_name:
        case eBook1_name:{
            quantity=prompt("Input quantity");
            break;
        }
        default:{
            alert("No such good proposed");
        }
    }
}
*/
orderPrice=function(goodName){
    let price=-1;
    switch(goodName){
        case notebook2Name:{
            price=notebook2Price;
            break;
        }
        case MFD_name:{
            price=MFD_price;
            break;
        }
        case TVSet1_name:{
            price=TVSet1_price;
            break;
        }
        case PhotoCam1_name:{
            price=PhotoCam1_price;
            break;
        }
        case eBook1_name:{
            price=eBook1_price;
            break;
        }
    }
    return price;
}
calcCost=function(price, quantity){
    return price*quantity;
}
price=orderPrice(goodName);
if(price==-1){
    alert("No such good proposed");
}else{
    quantity=prompt("Input quantity");
    cost=calcCost(price, quantity);
    alert("Your check: "+quantity+" "+goodName+"(s) cost "+cost+" hrn. Thank you!");
}

const costIni=+prompt("Input sum");
console.log("Initial sum: "+costIni);
let percentMinus=0;
if(costIni>1500){
    percentMinus=10;
    console.log("you have bonus: -10%");
}else if(costIni>500){
    percentMinus=5;
    console.log("you have bonus: -5%");
}
let costFinal=costIni*(1-1.0*percentMinus/100);
console.log("Sum: "+costFinal);
//
