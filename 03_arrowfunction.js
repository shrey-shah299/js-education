const user={
    username:"hitsh",
    price:999,

    welcome :function () {
        console.log(`${this.username} , welcome to website`);//this keyword to besed in current context 
        console.log(this);
    }

}


//console.log(this);// reference to empty object
//in inspect we see it as windows objects

// function hi(){
//     let n="shrey"
//     console.log(this.n);//cannot be used in functions
// }
// hi();

const hi=()=>{
    let n="shrey"
   console.log(this.n);//cannot be used in it as well

}

//hi()

const addTwo=(n1,n2)=>  (n1+n2);
//if we use {} then we require return
//for implicit return we can use them in parenthesis

const add=(n1,n2)=>  ({name:"Shrey"});
//console.log(add(4,5));

//const myArray=[2,3,4,5,6]

//IIFE immediately Invoked Function Expression
//used to immediately execute the function and also to prevent the pollution of our function variables  from the global scope variables
(function chai(){
    console.log(`DB Connected`);
})();//named FE
//we need semicolon becoz the first code should be closed
((name)=>{
    console.log(`hello`);
})('Shrey')