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
let copy = {...user};

copy.degree.gpa = "bekaaar";

console.log(copy);
console.log(user);