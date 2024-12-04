console.log("Hello World");

// this is a single line comment

/* this is not a single line comment
multi-line
*/
// let - mutable/changeable - block scope
let firstname = "Ansen";
console.log("Firstname:", firstname);
firstname = "Eric";
console.log("FirstName", firstname);

// var mutable/changeable - global
var lastname = "Doe";
console.log("Lastname:",lastname);
lastname = "smith"
console.log("Lastname:",lastname);

//const - unmutable/unchangeable
const birthday = "01-24-1999";
console.log("Birthday:",birthday);
// birthday = "02-12-1996" this will not work

if(true){
    var email = "jamessmith@gmail.com";
    let username = "jamessmith"; // for declaration block only
    console.log(username);
}

console.log(email);
console.clear
//primitive data type
// Strings - textual data enclosed in either '' or ""
let firstName = "Ferdinand";
console.log("FirstName:",firstName);
// typeof determines the type of a variable(built in operator)
console.log("type of firstname:", typeof firstName);

//Number: represent numeric values(30, -30 , 3.14)
let age = 30;
console.log("Age:", age);
console.log("Type of age:", typeof age);

let decimal = 3.14;
console.log("Decimal:" , decimal);
console.log("type of decimal:", typeof decimal);

//boolean: true or false conditional statement
let isStudent = true;
console.log("is student?:",isStudent);
console.log("type of isstudent:", typeof isStudent);

//Null: Intentional absence of value;
let car = null;

console.log("Car:", car);
console.log("type of Car", typeof car);

//undefined
let unintentional = undefined;
console.log("unintentional:", unintentional);
console.log("type of unintentional:", typeof unintentional);

console.clear();

let num1 = 22, num2 = 5,num3 = 10, num4 = 5,num5 = 2;
console.log("Addition:", num1 + num2);
console.log("Substract:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Exponent(**):", num1 ** num2);
console.log("Modulo(%):", num1 % num2);

// order of operation
// Pemdas - parenthesis,Exponents,Multiplication and Division(same level),Addition and substraction (same level)
console.log("Result:", num3/num4 * num5);

let answer = 3+(4*(5 -2)** 2)/2;
console.log("Answer:",answer);
// 2. String Expressions or Concatenation
let greeting = "Hi";
let myName = "Ansen";
console.log(greeting + " " + myName + "!");
//3. Comparison Operators 
// Equal Operation == check if two values are equal

console.log("Equal to(==)", 5==5);
console.log("Equal to (==) with type coercion", 5 == '5' );

//not Equal operator (!=): check two value if not equal

console.log("Not Equal to (!=):",5 !=5); //false
console.log("Not Equal to (!=) with type coercion:",5 !='5'); //true

//Strict Equal to "===" check if two values are equal and type

console.log("stricly Equal to(===)", 5===5); //true
console.log("stricly Equal to(===)", 5==='5'); //false

//not Equal operator (!==): check two value if not equal value or type
console.log("stricly Not Equal to (!==):",5 !==5); // false
console.log("stricly Not Equal to (!==):",5 !=='5'); // True

//Greater than (>)

console.log("Greater than(>)", 5>3); // true
console.log("Less than(>)", 5<3); // false
console.log("Less than(<=)", 5<=5); // true
console.log("Greater than(>=)", 5>=3); // true
console.log("Greater than(<=)", 5<=3); // false

console.clear();

let sunny = true;
let warm = false;

// AND: true only if all condition are met

console.log("is sunny and warm:",sunny && warm);
console.log("type of sunny and warm:",typeof sunny,typeof warm);

//OR: true if one condition is met
console.log("is sunny OR warm:",sunny || warm);

//NOT: Inverts the boolean value
console.log("is not sunny",!sunny);

//5. assignment Expression
// asigning a value to a variable

let num7 = 10;
let num8 = 5;

// num7 = num7+num8;
num7+=num8
// addition asignment +=
console.log(num7);
// substruction assignment -=
num7-=num8;
console.log(num7);

//multiplication assignment *=
num7*=num8;
console.log(num7);
//Division assignment *=
num7/=num8;
console.log(num7);
//exponent assignment **=
num7**=num8
console.log(num7);

//modulo/remainder assignment %=
num7%=num8;
console.log(num7);