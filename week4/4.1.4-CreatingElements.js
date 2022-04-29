// create a new unordered list (ul) element
const unorderedList = document.createElement("ul")

// remove the paragraph element in the nav-bar
document.querySelector(".nav-bar > P").remove();
// add your new ul element to the nav-bar
document.querySelector(".nav-bar").appendChild(unorderedList);
// create two new list item (li) elements, and add some text to them
let listElementOne = document.createElement("li")
let listElementTwo = document.createElement("li")

listElementOne.textContent = ("list string thingy");
listElementOne.textContent = (" add some text to them");
// add the li elements to the ul in the nav-bar
document.querySelector(".nav-bar > ul").appendChild(listElementOne)