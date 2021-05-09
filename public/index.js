"use strict";
const character = "harshita";
console.log(character);
const docinp = document.querySelectorAll('input');
console.log(docinp);
docinp.forEach(inp => {
    console.log(inp);
});
const areaOfCircle = (diam) => {
    return Math.PI * (diam / 2) * (diam / 2);
};
console.log(areaOfCircle(78));
let arr;
//arr.push(9);
let mixed = [];
mixed.push(98);
console.log(mixed);
//let mixed: (string | number)[];
mixed.push(90);
mixed.push(8);
console.log(mixed);
let uname;
//objects
let user;
user = {
    name: 'popu',
    age: 78
};
//user = 89;
//user = false;
let user1;
console.log(user);
let greet;
//greet = "hello";
greet = () => {
    console.log("hello! world");
};
const add = (a, b, c = 10) => {
    console.log(a * b);
    console.log(c - 1);
};
add(3, 10, '20');
const minus = (a, b) => {
    return a + b;
};
let answer = minus(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has uid ${uid}`);
};
const greet = (user) => {
    console.log(`${user.name} says hello`);
};
//function signatures
//let greet: Function;
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
greet('harshita', 'hello!');
let logDet;
logDet = (ninja) => {
    console.log(`${ninja.name} is of age ${ninja.age}`);
};
const liya = {
    name: "liya",
    age: 18
};
logDet(liya);
