var myBoolean: boolean = true;
var myNum: number = 23;
var myString: string = "james";
var myArry: string[] = ["zero", "first", "second", "third"];

myBoolean = myNum === 456;
console.log(`my boolean = ${myBoolean}`);

myArry = [myNum.toString(), `5678`];
console.log(`myArray = ${myArry}`);

myNum = myArry.length;
console.log(`myNum = ${myNum}`);
