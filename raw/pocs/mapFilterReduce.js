let arr = [1,2,3,4,5,6,7];

//to twice eles of this arrray to a new array

// let doubleArr = [];
// for(let i = 0; i < arr.length; i++){
//     doubleArr[i] = arr[i]*2;
// }

// console.log(doubleArr);


// map function is a heigher order function
//that either accepts a function as an argument
// or returns a function 

let df = function(el){
    return 2 * el;
}
let darr = arr.map(df);
console.log(darr);
console.log(arr);