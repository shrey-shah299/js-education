//var c=300
let a=330
if(1){
    let a=10;
const b=20 
//var c=30
    //local scope 
    console.log(a);
}

//console.log(a); gives error
//console.log(b);
//console.log(c); //var stuff
console.log(a);

function one(){
    const username="Shrey"

    function two(){
        const website="hello"
        console.log(username);
    }
    //console.log(website); //error

    two();
}
//two(); //cannot be accessed
//one();
//function1
console.log( addone(5));//here we can use
function addone(num)
{
    return num+1;
}


//function2 
//addTwo() tihs will give error as it is treated as a variable
const addTwo=function(num){
    return num+2;
}

addTwo(6);