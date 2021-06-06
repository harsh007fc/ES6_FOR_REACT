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


//traditioal method
console.log(user.degree.gpa);


//////destructuring///////

let {degree:{gpa}} = user;
console.log(gpa);
