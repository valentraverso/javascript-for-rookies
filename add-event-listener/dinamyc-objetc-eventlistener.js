// If we are creating dinamic nodes in the DOM we can't use event listeners on them so we need to do the following:

function createNode(){
    const elBody = document.getElementsByTagName('body');

    let div = document.createElement("div");
    div.textContent = "Hi, this is a sollution";
    div.id = 'my-div';

    elBody.appenChild(div);

    // In this example we are dinamically a div and setting the id to "my-div"
    // If i want to assign an event listener to this new div i need to do it in a rellated function of the node created

    let elMyDiv = document.getElementById('my-div');
    elMyDiv.addEventListener('click', anotherFunction);

    // So i get the dynamic element and assign an event listener
}