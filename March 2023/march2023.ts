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


//? The Story:
//? Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
//? Task Overview:
//? You have to write a function that accepts three parameters:
//? cap is the amount of people the bus can hold excluding the driver.
//? on is the number of people on the bus excluding the driver.
//? wait is the number of people waiting to get on to the bus excluding the driver.
//? If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
//* My Answer 
export function enoughV1(cap: number, on: number, wait: number): number {
    if (cap >= on + wait) {
        return 0 
    } else return (on + wait) - cap
}
//! Better Answer 
export function enoughV2(cap: number, on: number, wait: number): number {
    return ( on + wait > cap) ? on + wait - cap : 0
}

//? All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
//? Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// ?Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.
//* My Answer 
export function feastV1(beast:string, dish:string):boolean {
    const firstLetterBeast: string = beast.charAt(0);
    const lastLetterBeast: string = beast.charAt(beast.length - 1);
    const firstLetterDish: string = dish.charAt(0);
    const lastLetterDish: string = dish.charAt(dish.length - 1);
    return (firstLetterBeast === firstLetterDish && lastLetterBeast === lastLetterDish) ? true : false
}
//! Better Answer 
export function feastV2(beast:string, dish:string):boolean {
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}

//? There is a bus moving in the city which takes and drops some people at each bus stop.
//? You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.
//? Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D
//? Take a look on the test cases.
//? Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.
//? The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.
//* My Answer 
export function numberV1(busStops: [number, number][]): number {
    let onBoard: number = 0
    for (let i = 0; i < busStops.length; i++) {
        onBoard += busStops[i][0] - busStops[i][1]
    }
    return (onBoard >= 0) ? onBoard : 0
}
//! Better Answer 
export function number(busStops:number[][]):number {
    return busStops.reduce((rem, [on, off]) => rem+(on-off), 0);
}


//? You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. 
//? If the word's length is even, return the middle 2 characters.
//* My Answer 
export function getMiddleV1(s: string): string {
    const middleIndex = Math.floor(s.length / 2);
    if (s.length % 2 === 0) {
        return s.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return s.slice(middleIndex, middleIndex + 1);
    }
}
//! Better Answer 
export function getMiddleV2(s:string) {
    const middle = Math.ceil(s.length / 2) - 1
    return s.slice(middle, s.length - middle)
}


//? Write function bmi that calculates body mass index (bmi = weight / height2).
//? if bmi <= 18.5 return "Underweight"
//? if bmi <= 25.0 return "Normal"
//? if bmi <= 30.0 return "Overweight"
//? if bmi > 30 return "Obese"
//* My Answer 
export function bmiV1(weight: number, height: number): string {
    let bmi: number = weight / height**2
    if (bmi <= 18.5){
        return 'Underweight'
    } else if (bmi <= 25.0){
        return 'Normal'
    } else if (bmi <= 30.0){
        return 'Overweight'
    } else return 'Obese'
}
//! Better Answer 
export function bmiV2(weight: number, height: number): string {
    let bmi = weight / height ** 2;
    switch (true) {
        case (bmi <= 18.5):
            return 'Underweight';
            break;
        case (bmi <= 25):
            return 'Normal'
            break;
        case (bmi <= 30.0):
            return "Overweight";
            break;
        case (bmi > 30):
            return 'Obese';
            break;
        default:
            return 'other';
            break;
    }
}


//? Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
//? Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
//? Create a function which translates a given DNA string into RNA.
//* My Answer (not mine but what I thought to do)
export function DNAtoRNAV1(dna: string): string {
    return dna.split("").map((letter: string)=> {
        if (letter == "T") {
            return letter = "U"
        } else {
            return letter
        }
        }).join('')
    }
//! Better Answers (My Answer but found the answer online)
export function DNAtoRNAV2(dna: string): string {
    return dna.replace(/T/g, "U");
}


//? It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
//? You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
//* My Answer 
export function removeCharV1(str: string): string {
    return str.slice(1, -1);
}
//! Better Answer 
export const removeCharV2 = (str: string): string => str.slice(1, -1)


//? Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
//* My Answer 
export function invertV1(array: number[]): number[] {
    let nums: number[] = [] //todo I need to remember number[] is the way to make a list of numbers. 
    for (let i:number = 0; i < array.length; i++){
      nums.push(array[i] * -1)
    }
    return nums;
}
//! Better Answers
export const invertV2 = (array: number[]) => array.map(n => -n);



//? Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//* My Answer 
export function doubleCharV1(str: string): string {
    return str.split('').map(char => char + char).join('');
}
//! Better Answer 
export const doubleCharV2 = (str: string): string =>
    str.split('').map(c => c.repeat(2)).join('');


//? Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//? Note: a and b are not ordered!
//* My Answer 
export function getSumV1(a: number, b: number): number {
    let num: number = 0
    if (a < b){
        for (let i = a; i <= b; i++) {
        num += i
        }
    } else if (a > b) {
        for (let i = b; i <= a; i++) {
        num += i
        }
    } else {
        num = a
    }
    return num
}
//! Better Answer 
export function getSumV2(a: number, b: number): number {
    const start = a < b ? a : b;
    const end = start === a ? b : a;
    
    let sum = 0;
    
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
}

//? Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//? The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. 
//* My Answer 
export function setAlarmV1(employed: boolean, vacation: boolean) {
    return (employed === true && vacation === false) ? true : false
}
//! Better Answer 
export function setAlarmV2(employed: boolean, vacation: boolean) {
    return employed && !vacation
}

//? Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, 
//? and return the largest and lowest number in that list, respectively.
//* My Asnwer 
export const minV1 = (list: number[]): number => {
    return Math.min(...list)
};
  export const maxV1 = (list: number[]): number => {
    return Math.max(...list)
};
//! Better Answer 
export const min = list => Math.min(...list);
export const max = list => Math.max(...list);

//? Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
//* My Answer 
export function getGradeV1(a: number, b: number, c: number): string {
    let score:number = (a+b+c)/3
    if (score >= 90 && score <= 100){
        return 'A'
    } else if (score >= 80 && score < 90){
        return 'B'
    } else if (score >= 70 && score < 80){
        return 'C'
    } else if (score >= 60 && score < 70){
        return 'D'
    } else return 'F'
}
//! Better Answer 
export function getGradeV2(a: number, b: number, c: number): string {
    const mean = (a + b + c) / 3;
    if (mean >= 90) return 'A';
    if (mean >= 80) return 'B';
    if (mean >= 70) return 'C';
    if (mean >= 60) return 'D';
    return 'F';
}










