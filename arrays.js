///array

const myArr=[0,1,2,3,4,true,"shrey"]

//JavaScript array-copy operations create shallow copies.(that share same reference)

const myarray2= new Array(1,2,3,4)

//myArr.push(6)
myArr.pop()//removes last Element
myArr.unshift(9)//adds element at the beginning
myArr.shift()//removes first element
//console.log(myArr)

const newArr =myArr.join()//converts to string
//console.log(myArr.indexOf(5)); ans is -1
//console.log(newArr);

//splice ,slice
//splice manipulates the orifginal array as well and iit takesout the elements specified in the range
//slice just take the elements where the last range is exclusive and doesnot affect the original array
console.log("A ",myArr);

const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3)

console.log("C ",myArr)
console.log(myn2);