// //1: Example
// const cars = ['Tesla', 'Mercedes', 'Honda'] // makes a const array called cars
// const [ randomCar ] = cars // deconstructs cars storing first index as randomCar
// const [ ,otherRandomCar ] = cars// deconstructs cars storing second index as otherRandomCar
// console.log(randomCar) // prints to console randomCar as Tesla
// console.log(otherRandomCar) // prints to console otherRandomCar as Mercedes

// //2: Example
// const employee = { // intializes and defines const dict. 
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee; // deconstructs employee as Elon into const otherName
// console.log(name); // keytype error. Name is not defined
// console.log(otherName); //prints Elon to console.

// //3: Example
// const person = {// initialize and define person as object.
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';// const password as 12345
// const { password: hashedPassword } = person;  // throws error, password not found in person.
// console.log(password); //prints to console 12345
// console.log(hashedPassword); //throws keytype error hashedPassword not defined.

//I was wrong on line 27, doesn't throw error, just passes undefined in to hashedPassword
    //which means on line 30 it doesn't throw keytype. It just prints undefined.


// //4: Example
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2]; // initializes and defines numbers as array.
// const [,first] = numbers;// defines first as 2  - second index in numbers.
// const [,,,second] = numbers;// defines second as 5 - fouth index in numbers.
// const [,,,,,,,,third] = numbers;// definds third as 2 - 9th index in numbers.
// console.log(first == second); // prints to console false
// console.log(first == third);//prints to console true

//5: Example
const lastTest = { // defines lastTest as a const object
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; // deconstructs lastTest as key defined as 'value'
const { secondKey } = lastTest; //  deconstructs lastTest as secondKey defined as 'undefined'
const [ ,willThisWork] = secondKey; //throws error while trying to deconstruct secondKey, can't deconstruct undefined.
console.log(key); // prints to console 'value'
console.log(secondKey); //prints to console 'undefined'
console.log(secondKey[0]);// prints to console undefined
console.log(willThisWork);// undefined or throws error.

//I was wrong on line 48 because I wasn't thinking properly>?
    //I understand that deconstructing lastTest as secondKey you get an array. 
    //So I must have thought. 'Oh there is no secondKey in lastTest' = false.
    //I do understand also that the deconsturcted lastTest secondKey is stored as a const called secondKey that we could deconstruct and grab the second index and store it in willThisWork



