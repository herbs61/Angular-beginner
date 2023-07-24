let lname : string;

lname = "Santosh";

let newname = lname.toUpperCase();

console.log(newname);

let age: number ;
age = 25;
age = 25.5;

let dab = "25";

let result = parseInt(dab);

let isvalid : boolean =false;

console.log(isvalid);
let empList : string[];

empList = ["Santosh","Santosh1","Santosh2"];

let numList : Array<number>;

numList = [1,2,3,4,5]

let results = numList.filter((num)=> num> 2);

let emp = empList.find((emp)=> emp === "Santosh");

let sum = numList.reduce((acc, num) => acc + num);

console.log(results);
console.log(emp);
console.log(sum);

//lname = 10;

const enum Color{
    Red,
    Green,
    Blue
}

let c:Color = Color.Blue;

