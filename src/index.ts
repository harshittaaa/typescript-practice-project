const character = "harshita";
console.log(character);

const docinp = document.querySelectorAll('input');

console.log(docinp);

docinp.forEach(inp => {
  console.log(inp);
});

const areaOfCircle = (diam: number) => {
  return Math.PI * (diam / 2) * (diam / 2);
}
console.log(areaOfCircle(78));

let arr: number[];
//arr.push(9);

let mixed: number[] = [];
mixed.push(98); 
console.log(mixed);

//let mixed: (string | number)[];
mixed.push(90);
mixed.push(8);
console.log(mixed);
let uname: string | number;

//objects

let user: object;

user = {
  name: 'popu',
  age: 78
};
//user = 89;
//user = false;

let user1: {
  name: 'hui',
  age: 12
};
console.log(user);



let greet: Function;

//greet = "hello";

greet = () => {
  console.log("hello! world");
}

const add = (a:number, b:number,c:number|string=10):void =>{
  console.log(a * b);
  console.log(c - 1); 
  }

add(3, 10, '20');
const minus = (a:number,b:number) =>
{
  return a + b;
}
  
let answer = minus(10, 7);

//let answer = "hello";
type strOrNum = string | number;
type objWithName = {
  name: string,
  uid: strOrNum
};

const logDetails = (uid: strOrNum, item: string) => {
  console.log(`${item} has uid ${uid}`);
};

const greet = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

//function signatures

//let greet: Function;

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: number) => {
  console.log(`${name} says ${greeting}`);
}

greet('harshita', 'hello!');
type person = { name: string, age: number };

let logDet : (obje:{ name: string, age: number }) => void;

logDet = (ninja: person) => {
  console.log(`${ninja.name} is of age ${ninja.age}`);
  
}
const liya = {
  name: "liya",
  age:18
}
logDet(liya);


  

