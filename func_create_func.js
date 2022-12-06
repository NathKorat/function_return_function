const greeting = word => person_name => `${word} ${person_name}!`;
const print = console.log

let hello = greeting("Hello");
let welcome = greeting("Welcome");

print(hello("Mno"));
print(welcome("Seakngim"));