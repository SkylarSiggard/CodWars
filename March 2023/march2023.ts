//? Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//* My Answer 
export function createPhoneNumbeV1(numbers: number[]): string {
    const areaCode = numbers.slice(0, 3).join('');
    const firstThree = numbers.slice(3, 6).join('');
    const lastFour = numbers.slice(6).join('');

    return `(${areaCode}) ${firstThree}-${lastFour}`;
}
//! Better Answer 
export function createPhoneNumberV2(numbers: number[]): string {
    return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(-4).join('')}`
}
