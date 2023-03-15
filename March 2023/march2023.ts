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


//? There was a test in your class and you passed it. Congratulations!
//? But you're an ambitious person. You want to know if you're better than the average student in your class.
//? You receive an array with your peers' test scores. Now calculate the average and compare your score!
//? Return True if you're better, else False!
//* My Answer 
export function betterThanAverageV1(classPoints: number[], yourPoints: number) : boolean {
    const sum: number = classPoints.reduce((total, current) => {
        return total + current;
    }, 0);
    if (sum/classPoints.length < yourPoints){
        return true;
    } else {
        return false;
    }
}
//! Better Answer 
export function betterThanAverageV2(classPoints: number[], yourPoints: number) {
    return (classPoints.reduce((a, v) => a + v) / classPoints.length) < yourPoints;
}
