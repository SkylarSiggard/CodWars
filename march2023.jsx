//? Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
//* My Answer 
function boolToWord( bool ){
    if (bool) {
        return 'Yes';
    } else {
        return 'No';
    }
}
//! Better Answer 
function boolToWord( bool ){
    return bool ? 'Yes':'No';
}


//? Create a function with two arguments that will return an array of the first n multiples of x.
//? Assume both the given number and the number of times to count will be positive numbers greater than 0.
//? Return the results as an array or list ( depending on language ).
//* My Answer 
function countBy(x, n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
      result.push(x * i);
    }
    return result;
}
//! Better Answer
const countBy = (x, n) => Array.from({length: n}, (v, k) => (k + 1) * x)


//? The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//* My Answer 
function cockroachSpeed(s) {
    const cmPerSecond = Math.floor(s * 100000 / 3600);
    return cmPerSecond;
}
//! Better Answer 
const cockroachSpeed = s => Math.floor(s / 0.036);


//? Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//* My Answer 
function solution(str, ending){
    return str.endsWith(ending);
}
//! Better Answer 
const solution = (str, ending) => str.endsWith(ending);


//? Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
//? The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
//* My Answer 
function toWeirdCase(str) {
    return str.split(' ').map(word => {
        return word.split('').map((char, index) => {
            if (index % 2 === 0) {
                return char.toUpperCase();
            } else {
                return char.toLowerCase();
            }
        }).join('');
    }).join(' ');
}
//! Better Answer 
function toWeirdCase(string){
    return string.replace(/(\w{1,2})/g,(m)=>m[0].toUpperCase()+m.slice(1))
}



