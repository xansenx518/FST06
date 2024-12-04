//array
let fruits = ["apple","pineapple","banana","pear","avocado"];
console.log("fruits:",fruits, fruits.length);

// update the element/s

fruits[3] = "Dates";
console.log("updated fruits", fruits);

//accessing elements
console.log("3rd fruit", fruits[2]);

//Method - function that is associated with an object or a class
// adding element , push method - add element
fruits.push("blueberries");

console.log("updated fruits:", fruits);

fruits.pop()
console.log("updated fruits", fruits)

//Searching element/s
//-includes() method - check if an element exists
console.log("Is banana included", fruits.includes("banana"));

// indexof() method - find index of an element
let index = fruits.indexOf("banana");
console.log("index is:", index)

// .forEach () method - recievesa a function as an argument and execute it once for each array elements.
// Return:  undefined
fruits.forEach(function (fruit) {
    console.log("Fruits:", fruit);
}
)
