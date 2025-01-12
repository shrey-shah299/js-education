const score = 400

const balance =new Number(100)
//object
//console.log(balance);

//console.log(balance.toString());
//console.log(balance.toFixed(1));

const num2 = 23.896
//priority is to before decimal
//console.log(num2.toPrecision(3));
//console.log(num2.toPrecision(2));

const hun=1000000

//console.log(hun.toLocaleString('en'));//we can print it in indan by using 'en-IN'

//*************** Maths ***************
console.log(Math)

console.log(Math.abs(-4));
console.log(Math.round(3.5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.1));
console.log(Math.min(-4,3,7,8));
//Math.random()-from 0 to 1
console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min)+1) +min)
