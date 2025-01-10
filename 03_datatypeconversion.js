let score =true

console.log(typeof score)

let valueInNumber =Number(score)
//console.log(typeof(valueInNumber));
//console.log(valueInNumber);// not to relay on the direct conversion
//I case of null it is converted to null
//true to 1 and flase to 0
//When we convert a number to it "33"=>33
//"33abc" =>NaN

let inloggedin = -100000

let booleanisloggedin =Boolean(inloggedin)
console.log(typeof(booleanisloggedin));
console.log(booleanisloggedin);
// while converting to boolean:
// 1(other than zero)=>true
//0 =>false
//"" =>false
//"hitesh" =>true

//tostring

let somenumber =true

let stringnumber =String(somenumber)
console.log(stringnumber);
