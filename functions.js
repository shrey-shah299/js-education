
function sayMyName(){
    console.log("Hello");
}

//sayMyName();

function addtwonumbers(number1,number2){//parameters
    //console.log(number1+number2);
    return number1+number2
}

const result=addtwonumbers(3,"d")//arguments
console.log(result);

function loginUser(username="Shrey"){
    if(!username){
        console.log("please enter  username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUser()); - undefined
console.log(loginUser("Smit"));

function caluculateCartprice(val1 ,vl2, ...num1){
    return num1
}
console.log(caluculateCartprice(200,400,500,2000))

//objects to functions

const user={
    username:"Shrey",
    price:199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleobject({
    username:"Shrey",
    price:290
})



