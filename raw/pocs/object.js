let person = {name:'harsh',place:'nangal',job:'student'};

// let name = person.name;
// let nameOther = person['name'];
// console.log(name);
// console.log(nameOther);
// let place = person.place;
// let job = person.job;
// console.log(place);
// console.log(job);


// let {name,place,job} = person;
// console.log(place);
// console.log(job);
// console.log(name);


/////ALIASES
let {name:a,place:b,job:c} = person;
console.log(a);
console.log(b);
console.log(c);