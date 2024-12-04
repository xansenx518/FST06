//control flow structure

//1. conditional statement
// allows us to execute blocks of code in different condition

let temperature = 31;
// () conditional block
//{} code block
if (temperature < 0) {
  console.log("its freezing");
} else if (temperature >= 0 && temperature < 25) {
  console.log("it's cool outside");
} else if (temperature >= 21 && temperature <= 30) {
  console.log("it's warm outside");
} else {
  console.log("its more than 31 degrees, it's hot");
}
//repeatedly execute a block until the condition is met.

//for loop
/*  components
    1. variable initialization
    2. condition expression
    3. increment / decrement */
console.clear();
for (let x = 1; x <= 10; x++) {
  console.log("for loop counting:", x);
}
// while loop
let i = 1;
while (i <= 3) {
  console.log("counting to:", i);
  i++;
}
