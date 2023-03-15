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

//? Can you find the needle in the haystack?
//? Write a function findNeedle() that takes an array full of junk but containing one "needle"
//? After your function finds the needle it should return a message (as a string) that says:
//? "found the needle at position " plus the index it found the needle, so:
//* My Answer 
export function findNeedleV1(haystack: any[]):string {
    const position = haystack.indexOf('needle')
    return `found the needle at position ${position.toString()}`
}
//! Better Answer 
export function findNeedleV2(haystack: any[]): string {
    return `found the needle at position ${haystack.indexOf('needle')}`;
}

//? Let's play! You have to return which player won! In case of a draw return Draw!.
//* My Answer 
export function rpsV1(p1: string, p2: string): string {
    if (p1 === p2) {
        return 'Draw!';
    }
    if (
        (p1 === 'rock' && p2 === 'scissors') ||
        (p1 === 'paper' && p2 === 'rock') ||
        (p1 === 'scissors' && p2 === 'paper')
    ) {
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}
//! Better Answer 
const beats: {[index: string]: string} = {
    'scissors': 'paper',
    'paper': 'rock',
    'rock': 'scissors',
}

export function rpsV2(p1: string, p2: string): string{
    if (p1 === p2) return 'Draw!'
    
    if (beats[p1] == p2) return 'Player 1 won!'
    return 'Player 2 won!'
}

//? Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.
//* My Answer 
export function getVolumeOfCuboidV1(length: number, width:number, height:number): number {
    return length * width * height
}
//! Better Answer 
export function getVolumeOfCuboidV2(l: number, w:number, h:number): number {
    return l * w * h
}

//? Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
//* My Answer 
export function greetV1(name: string): string {
    return `Hello, ${name} how are you doing today?`
}
//! Better Answer 
export const greetV2 = (name: string): string => `Hello, ${name} how are you doing today?`;


//? Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
//? Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
//* My Answer 
export function paperworkV1(n: number, m :number): number{
    if (n < 0 || m < 0 || n * m < 0) { 
        return 0 } 
    else return n * m
}
//! Better Answer 
export function paperworkV2(n: number, m :number): number{
    return (n < 1 || m < 1) ? 0 : n * m;
}


//? Write a function which calculates the average of the numbers in a given list.
//* My Answer 
export function findAverageV1(array: number[]): number {
    if (array.length > 0) {
        let num = 0;
        for (let value of array) {
            num += value;
        }
        return num / array.length;
    } else return 0
}
//! Better Answer 
export function findAverageV2(array: number[]): number {
    return !array.length ? 0 : array.reduce((a, b) => a + b, 0) / array.length;
}







