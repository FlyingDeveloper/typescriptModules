import {sayHello, sayHelloWithName} from './module'

console.log('foo!');
console.log(sayHello());
console.log(sayHelloWithName("Rob"));

var output = document.getElementById('output');
output.innerHTML = 'From TypeScript!';
