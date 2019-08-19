const numbers = [1, 2, 3];
const newNumber = [...numbers, 4]; // [1, 2, 3, 4]
const newNumber2 = [numbers, 4]; // [[1, 2, 3], 4]


const person = {
    name: 'Max'
};
const newPerson = {
    ...person,
    age: 8
}
console.log(newPerson); // { age: 28, name: "Max"}
