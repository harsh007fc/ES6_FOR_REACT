


// function fn(){
//      console.log(this.person);
//      console.log(this);
//      function abc(){
//          console.log(this)
//          console.log(this.person);
//      }
//      abc();
//  }

//  let obj = {
//      person:'harsh',
//      func:fn
//  }

//  obj.func();


 //to get my name when abc() is called
 //we have 2 solns
 //1st solutions using bind==>
 // let ret = functioni.bind(argument)
// the bind method returns another function whose this is equal to the argument that is passed to the bind funcion

//  function fn(){
//     console.log(this.person);
//     console.log(this);
//     function abc(){
//         console.log(this)
//         console.log(this.person);
//     }
//    //  abc()l
//    let ret = abc.bind(this);
//    //the value of this ret function is == to this i.e. obj
//    ret();
//    abc();
// }

// let obj = {
//     person:'harsh',
//     func:fn
// }

// obj.func();


//second soln is arrow function

// let fon = (arguments)=>{
//     statements
// }
//this of arrow fnt is equal to this of parent function or lexically superior function (bahr ka this hi andr ka ho jata hai)

function fn(){
    console.log(this.person);
    console.log(this);
    let abc = ()=>{
        console.log(this);
        console.log(this.person);
    }
    abc();
}

let obj = {
    person:'harsh',
    func:fn
}

obj.func();


 
