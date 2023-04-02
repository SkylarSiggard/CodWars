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













