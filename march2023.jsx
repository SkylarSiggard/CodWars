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
