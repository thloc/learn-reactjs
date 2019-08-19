const numbers = [1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2); // 1, 2

[num1, ,num3] = numbers;
console.log(num1, num3); // 1, 3

{ name } = { name: 'A', age: 28 }
console.log(name) // A
console.log(age) // undefind


const person = {
    name: 'B'
};
const secondPerson = {
    ...person
};
person.name = 'C';
console.log(secondPerson); // B