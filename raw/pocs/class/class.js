//prototype ya blueprint hoti hain
//es6 mein introduce hui
//uusse pehle nhi thi js mein

class abc{
    constructor(name,age){ //constructer ek function hai

        //data members
        this.name = name;
        this.age = age;
        this.hobby = 'music';
    }

    //member functions
    sayHi(){
        console.log('hello');
        // console.log(this.name);
        console.log(this);
    }

    sayBye(){
        console.log('bye');
    }
}


let obj = new abc('harsh',20);
console.log(obj);

//like previous 
let res = obj.sayHi;
res();

let btn = document.querySelector('button');

btn.addEventListener('click',obj.sayHi);


//solns by using bind and arrow function