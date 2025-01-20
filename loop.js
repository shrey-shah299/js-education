//for loop --similar to c 

let myArray=["flash","batman","superman"]

for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}

//we can use break and continue in loops
//while-- smilar to c

//for of loop


const arr=[1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

const greeting="Hello World!"

for(const num of greeting){
    console.log(`Each char is ${num}`)
}

//Maps

const map=new Map()
map.set('In','India')
map.set('Fr','France')
map.set('In','India')
//take the unique value 
console.log(map)

for(const [key,value] of map){
    console.log(key,'--',value)
}
//this same syntax scannot be used in objects

const myobject={
    lang1:'javascript',
    lang2:'cpp',
    lang3:'ruby'
}

for (const key in myobject) {
    console.log(myobject[key]);
}
for(const key in myArray){
    console.log(key);
}

//arrays -for of loop (return the values of array) ,for in loop(returns the keys of array)
//objects -- for in loop
//maps -- for of loop (iterator-[key ,value]),cannot be used in for of loop


//for each loop

const coding=['js','ruby','java','python','cpp']

// coding.forEach(  function(val){
//     console.log(val);
// });

// coding.forEach((val)=>{
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)
 coding.forEach((val,index,arr)=>{
     console.log(val,index,arr);
})

const mycoding=[{
languagename:"js",
filename:"javascript"
},
{
    languagename:"python",
filename:"py"
},
{
    languagename:"c",
filename:"c"
}
]

mycoding.forEach((item)=>{
    console.log(item.languagename)
})