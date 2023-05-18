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
let passwordKept='asdf';
console.log("This is weak place for those who can work with development tools");
let passwordInput=prompt("Input your password");
if (passwordInput==passwordKept){
    alert("You entered the system successfully");
}else{
    alert("Access to system denied: Incorrect password");
}

