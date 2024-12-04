//D.R.Y
//Donot Repeat Yourself
//Reusable block of code that can be executed whenever needed.

//1. function definition

function greet(){
    console.log("Welcome to the world of function");
    console.log("Lets go");
}
greet();
greet();
greet();

//2. function definition with parameters

/* PARAMETERS - PLACEHOLDER
    ARGUMENTS - VALUES PASSED TO A FUNCTIONS*/


function sum(num1,num2){
    return num1+=num2;
    console.log("Unreachable");
}

console.log("sum of parameter",sum(10,5));
