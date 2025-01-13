const marvelheros=["thor","Ironman","spiderman"]
const dcheros=["superman","flash","batman"]

//marvelheros.push(dcheros)

//console.log(marvelheros);

//to avoid the array probelm we use concat operator

const allheros=marvelheros.concat(dcheros)
console.log(allheros);

//same operation using spread

const all_new_heros=[...marvelheros,...dcheros]

console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,[8,9]]]
const real_array=another_array.flat(Infinity)//used to remove all the sub arrays and return a single array

console.log(real_array);

console.log(Array.isArray("hello"));
console.log(Array.from("hello"))
console.log(Array.from({name:"hitesh"})); //interesting for interviews if the array fails to be produced then returns empty array

let score1=30
let score2=20
let score3=10

console.log(Array.of(score1,score2,score3));

