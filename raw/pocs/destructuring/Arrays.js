let arr = ['I','am','harsh'];
/////////FIRST
// let first = arr[0];
// let second = arr[1];
// let third = arr[2];


///////SECOND
// let [first,second,third] = arr;
// console.log(first);
// console.log(second);
// console.log(third);


//////if we want to (SKIP) an elem
// let [first,,third] = arr;
// console.log(first);
// console.log(third);


let newArr = ['hello'];

// let [first,second] = newArr;
// console.log(first); //=>hello
// console.log(second); // =>undefined
//TO AVOID ABOVE UNDEFINED CONDITION

let [first,second='second'] = newArr;
console.log(first);
console.log(second);


let a = 5;
let b = 6;
[a,b] = [b,a];
console.log(a);
console.log(b);