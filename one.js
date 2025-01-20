//if


if(true){
    console.log("hmmm");
}
//<,>,<=,>=,==,!=,===,!==

//shortand 

const balance=1000

if(balance>500) console.log("test");

//switch

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } 

//except default all the cases will be executed after one case matches with key

const useremail="shrey@gamil.com"

if(useremail)
    {
        console.log("executed");
    }
    else{
        console.log("damn");
    }
const useremail1=""

if(useremail1)
    {
        console.log("executed");
    }
    else{
        console.log("damn");
    }

    //falsy value
    //false,0,-0,BigInt 0n,"",null,undefined,Nan

//truthy value
//"0",'false'," ",[],{},function(){}

const emptyarray=[]

if(emptyarray.length===0){
    console.log("Empty array");
}

const emtyobj={}

if(Object.keys(emtyobj).length ===0){
    console.log("Empty Object");
}

//Nullish Coalescing Operator(??):Null undefined

let val1;
//val1=5??10;
//val1=null??10
//prevent assignemtn of null
val1=null??10??15
console.log(val1);

//Ternairy Operator

//condition ? true:false
