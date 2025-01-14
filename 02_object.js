//const tinderus = new Object()//singleton object

const tinderUser={}

tinderUser.ID="123abc"
 tinderUser.name="Shrey"
 tinderUser.isloggedIn=false


 const regular={

    email :"Shreyshah026@gmail.com",
    fullname:{
            firstname:"Shrey",
            lastname:"shah"
    }
 }
//console.log(regular.fullname?.firstname);

const obj1={
    1:'a',
    2:'b'
}
const obj2={
    3:'a',
    4:'b'
}
const obj4={5:'a',6:'b'}

//const obj3= Object.assign({}, obj1,obj2,obj4)


const obj3={...obj1,...obj2,...obj4}
console.log(obj3);

console.log(tinderUser);

console.log(Object.keys(tinderUser));//we get an array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isloggedIn'));


const course ={
    soursename:"hi",
    prize:"99",
    courseINstructor:'hmm'
}

//courseINstructor

const {courseINstructor:Instructor}=course;

console.log(Instructor);


//we get ApI in the form of
/*
{
    "name":"shrye",
    "prize:"0";
}*/









