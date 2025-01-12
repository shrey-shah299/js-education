const name ="Shrey";
//string interpollation
const repo=3;

console.log( `my name is ${name} aand my rpocount is ${repo}`);
const gamename = new String("hello");

let name1="hello I am Shrey"

let n=5

console.log(`the cHARCTER OF ${name1} at 5th indes is ${name1.charAt(n)}`);

//String.charCodeAt()-return UTF-16 value

console.log(`the cHARCTER value  OF ${name1.charCodeAt(5)} is ${name1.charAt(n)}`);

//String.codePOintAt()
const icons = '☃★♲';

console.log(icons.codePointAt(1));
// Expected output: "9733"


//String.concat()

console.log(name1.concat(", ",name));
//String,endsWith(searchString,endPosition)
console.log(name.endsWith('Shrey'));

//String.localeCompare(comparestring,locales,options)

//String.match(regexp)

//String.matchAll()
const regexp = /t(e)(st(\d?))/g;
const str = 'test1test2';

const array = [...str.matchAll(regexp)];

console.log(array[0]);
// Expected output: Array ["test1", "e", "st1", "1"]

console.log(array[1]);
// Expected output: Array ["test2", "e", "st2", "2"]

//String.normalize() -returns the Unicode Normalization Form of this string
const nam1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';

console.log(`${nam1}, ${name2}`);
// Expected output: "Amélie, Amélie"
console.log(nam1 === name2);
// Expected output: false
console.log(nam1.length === name2.length);
// Expected output: false

const name1NFC = nam1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

console.log(`${name1NFC}, ${name2NFC}`);
// Expected output: "Amélie, Amélie"
console.log(name1NFC === name2NFC);
// Expected output: true
console.log(name1NFC.length === name2NFC.length);
// Expected output: true

//String.padEnd()-pads the string with a iven string till the given leangth is reached

const str1='Hello'
let n1=10
console.log(str1.padEnd(n1,'.,.'));

//String.padStart()-similar to padend but does at the start

//STring.repeat(num) -repeats the string ,n number of times

let str2="wow! "

console.log(`${str2.repeat(3)},look at the view`);

//String.replace(orgword,newword)-only first occurance will  replaced
//String.replaceAll()-will replace all the ocurrences

//String.search()

console.log(`the s charcter is present at ${name1.search('S')}`)

//string.slice(startingindex,ending index)-can provide negative
const str7 = 'The quick brown fox jumps over the lazy dog.'

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

//string.split()-splits the string into new substrings forming arrays

let str3="I am doig javascript"

console.log(str3.split());

//string.substring()-similar to split but it cannot take negative values
//toString()-converts string object to string

const Stringobj=new String('damn')

console.log(Stringobj)

console.log(Stringobj.toString())

//string.trim() -removes all the whitesaces from the string
//trimEnd() ,trimStart()

//String.valueOf()-It is used to extract the value of string from the string object

console.log(Stringobj.valueOf());
