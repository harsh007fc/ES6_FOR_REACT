let user = {
    id:1,
    name:'harsh',
    class:'10th',
    degree:{
        year:'third',
        gpa:'bhut gandi',
    },
    location:{
        place:'Nangal',
        state:'Punjab'
    }
}


/////it does shallow copying
// let copy = {...user};

//still not a deeep copy if more inherited objects are present
// let copy = {...user,degree:{...user.degree},location:{...user.location}}

//it is the deep copy 
let copy = JSON.parse(JSON.stringify(user));

copy.degree.gpa = "bekaaar";

console.log(copy);
console.log(user);