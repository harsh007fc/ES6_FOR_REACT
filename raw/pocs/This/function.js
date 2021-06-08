// var person = 'Harsh';

//var window pr chipkta hai
function fn(){
    'use strict' //with this global this become undefined instead of window  obj  asa result we got error
    console.log(this);
    console.log(`hi my name is ${this.person}`);
}


//tn functions value of this isdepends upon how a function called
//dynamically / runtime this ki value bind hoti hai functions pe


fn(); //1
//when a fucntin is called by default the value of this is  passed to it is equal to window obj 

let obj = {
    person:'alex',
    func:fn
};
obj.func(); //2


//when a function is called through an obj, then this value of the function is == to the obj
//through which it is called,


// 1=> by default this ki value = window obj
// 2=> value of this depend upon its calling (HOW)
// 3=> if this is called thorough a function then value if this is = obj
// 4=> 

let fon = obj.func;
fon();

setTimeout(obj.func,1000);