// let arr = [1,2,3,4,5,6,7];

//to twice eles of this arrray to a new array

// let doubleArr = [];
// for(let i = 0; i < arr.length; i++){
//     doubleArr[i] = arr[i]*2;
// }

// console.log(doubleArr);


// map function is a heigher order function
//that either accepts a function as an argument
// or returns a function 

// let df = function(el){
//     return 2 * el;
// }
// let darr = arr.map(df);
// console.log(darr);
// console.log(arr);


///////////////Filter/////////////////////////////
// used to filter according to our need
let words =  ['mera','tera','sabka','hamara'];
// let fArr = []; 
// for(let i = 0; i < words.length; i++){
//     let  word = words[i];
//     if(word.length > 4){
//         fArr.push(word);
//     }
// }
// console.log(fArr);



// Returns the elements of an array that meet the condition specified in a callback function.//

let filter = function(word){
    return word.length > 4;
}
let fArr = words.filter(filter);
console.log(fArr);