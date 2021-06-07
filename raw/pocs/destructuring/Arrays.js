
// let arr = ['I','am','harsh'];
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


// let newArr = ['hello'];

// let [first,second] = newArr;
// console.log(first); //=>hello
// console.log(second); // =>undefined
//TO AVOID ABOVE UNDEFINED CONDITION

// let [first,second='second'] = newArr;
// console.log(first);
// console.log(second);


// let a = 5;
// let b = 6;
// [a,b] = [b,a];
// console.log(a);
// console.log(b);


////SPREAD OPERATOR THREE DOTS

// let parr = [1,2,3,4,5,6,7,8,9];
// let [fe,se,te,...narr] = parr;
// console.log(fe);
// console.log(se);
// console.log(te);
// console.log(narr);

// console.log(...parr);
////////////////////////////////////
// let idx = 3;
// let karr = [];
// let tarr = [1,2,3,4,5,6,7,8,9,0];
// for(let i = 0; i < idx ; i++){
//     karr.push(tarr[i]);
// }

// karr[idx] = 10;

// for(let i = idx; i < tarr.length; i++){
//     karr.push(tarr[i]);
// }
// console.log(tarr);
// console.log(karr);

// let jarr = [];
// jarr = tarr;

// jarr[0] = 1000000000;
// console.log(tarr);
// console.log(jarr);
let idx = 3;
let narr = [];
let arr = [1,2,3,4,5,6,7,8,9];

// narr = [...arr];
// narr[0] = 5000;
// console.log(narr);
// console.log(arr);


narr = [arr.slice(0,idx)]