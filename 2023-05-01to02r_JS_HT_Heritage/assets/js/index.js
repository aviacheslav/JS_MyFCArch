class User{
	constructor(nickName, email, age, isBanned){
		this.nickName=nickName;
        this.email=email;
        this.age=age;
		this.isBanned=isBanned;
	}
	set nickName(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid firstName');
        }
        this._nickName=name;
    }
    get nickName(){
        return this._nickName;
    }
    set email(name){
        if(typeof name != 'string' || name==''){
            throw new TypeError('Invalid lastName');
        }
        this._email=name;
    }
    get email(){
        return this._email;
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
	set isBanned(status){
        if(typeof status != 'boolean'){
            throw new TypeError('Invalid status');
        }
        this._isBanned=status;
    }
    get isBanned(){
        return this._isBanned;
    }
	//
	createMessage(message){
		console.log('user '+this.nickName+' created message: '+message);
	}
}

class Moderator extends User{
	constructor(nickName, email, age, isBanned){
		super(nickName, email, age, isBanned);
	}
	//
	deleteMessage(message){
		
		console.log('Moderator '+this.nickName+' deleted message: '+message);
	}
}
class Admin extends Moderator{
	constructor(nickName, email, age, isBanned){
		super(nickName, email, age, isBanned);
	}
	//
	banUser(user){
		if(!(user instanceof User)){
			throw new TypeError('Invalid user instance');
		}
		console.log('Admin '+this.nickName+' banned user: '+user.nickName);
		user.isBanned=true;
	}
	createMessage(message){
		console.log('Admin '+this.nickName+' created message: '+message);
	}
}


let user1 = new User('Kritik', '1@i.ua', 20, false);
let user2 = new Moderator('Censor', '2@i.ua', 25, false);
let user3 = new Admin('Bomber', '3@i.ua', 40, false);
let user4 = new Admin('Voltaire', '4@i.ua', 30, false);
let messageText1 ='I hate this forum and its admins!'; 
let messageText2 ='I disagree with everything you say but I am ready to die for your rught to say this!'; 
console.log('user1 ', user1);
console.log('user2 ', user2);
console.log('user3 ', user3);
console.log('user4 ', user4);  
user1.createMessage(messageText1);
user1.isBanned==true ? console.log('user1 IS banned') : console.log('user1 is NOT banned'); 
user2.deleteMessage(messageText1);
user3.banUser(user1);
user1.isBanned==true ? console.log('user1 IS banned') : console.log('user1 is NOT banned'); 
user4.createMessage(messageText2);
user4.banUser(user2);
user2.isBanned==true ? console.log('user2 IS banned') : console.log('user2 is NOT banned'); 