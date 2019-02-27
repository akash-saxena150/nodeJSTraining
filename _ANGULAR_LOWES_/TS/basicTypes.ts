//boolean
let isDone: boolean = false;

//Numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

//string
let color: string = "blue";
color = 'red';

//Template strings
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }.

I'll be ${ age + 1 } years old next month.`;

console.log(sentence);

//Arrays
let list: number[] = [1, 2, 3];
let list_01: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error