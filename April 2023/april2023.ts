//? In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//* My Answer 
export class KataV1 {
    static highAndLow(numbers: string): string {
        const arr: number[] = numbers.split(' ').map(Number);
        const max: number = Math.max(...arr);
        const min: number = Math.min(...arr);
        return `${max} ${min}`;
    }
}
//! Better Answer 
export class KataV2 {
    static highAndLow(numbers: string) {
        const max = Math.max(...numbers.split(' ').map(i => +i));
        const min = Math.min(...numbers.split(' ').map(i => +i));
        return `${max} ${min}`;
    }
}

//? Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him
//? Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
//? If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//? If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//* My Answer 
export function hoopCount(n: number): string {
    return (n >= 10) ? "Great, now move on to tricks":"Keep at it until you get it"
}




















