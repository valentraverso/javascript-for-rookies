// How can i create multiple elements with the same createelement method

//This is the example of multiple creation of element thead in a table

// Create or get the Nodes of the parent elements 
let bodyTable = document.createElement("table");
let tableRow = document.createElement("tr");

// Assign them to the DOM
parentElement.appendChild(bodyTable);
bodyTable.appendChild(tableRow);

// And for making multiple same node i used a for loop
// Where i assign the creation of 4 same elements
for (let i = 0; i < 4; i++) {
    let thead = document.createElement("th");
    tableRow.appendChild(thead);
}
