// Document Object Model
// Document - referring to HTML Document
//<HTML></HTML> - > ROOT ELEMENT
// ALLOWS US TO MODIFY , ACCESS, STYLE , BEHAVIOUR, MORE INTERACTIVE
//PROPERTIES
//1. ACCESSING ELEMENT USING GET ELEMENT BY ID'S .getElementById()

let elementWithID =document.getElementById("first-div")
console.log(elementWithID);
elementWithID.textContent = "Div 1";

// ACCESSING ELEMENT USING .getElementsByClass
// Return: Element / Null
let elementWithClass = document.getElementsByClassName("sample-div");
console.log(elementWithClass[1]);

elementWithClass[1].textContent = "Div 2";

//ACCESSING ELEMENT USING the .getElementsByTagName()
let listItems = document.getElementsByTagName("li");
console.log(listItems);
listItems[0].style.backgroundColor="crimson";
//querySelector - more flexible
// pass: classname, element-id or tag name
//Return: Firs element or null
let orderedListItem = document.querySelector(".ordered-list")
console.log(orderedListItem);
orderedListItem.style.color = "lightgreen"
//querySelectorAll - allow us to access all elements
let headings = document.querySelectorAll("h3");

console.log(headings)

// headings[0].style.backgroundColor = "tomato"
headings.forEach(function(heading){
    heading.style.backgroundColor = "tomato";
    heading.style.color ="white";
})

// Also works with
// 1. get .getElementsByClassName()
// 2. get .getElementsByTagName()

//Updating element attributes
let dayNightIcon=document.querySelector("#day-night-icon");
dayNightIcon.setAttribute("src","https://cdn-icons-png.flaticon.com/512/3688/3688129.png");

//APPENDING NEW ELEMENTS - TO PARENTS
let parentElement = document.getElementById("parent-element");
let createdElement = document.createElement("div");
createdElement.textContent = "This is a child Element";
parentElement.appendChild(createdElement);

//Removing an Element

let elementtoBeRemoved = document.querySelector("#element-to-be-removed");
elementtoBeRemoved.remove();

//Adding Event Listener and Manipulating Element Styles
let DarkModeButton = document.querySelector("#dark-mode-btn");
DarkModeButton.addEventListener("click", function(){
    let pageContainer = document.querySelector("#page-container");
    pageContainer.style.backgroundColor = "black";
    pageContainer.style.color = "white";
    let pageModeText = document.querySelector("#page-mode-text")
    pageModeText.textContent = "Dark Mode";
})