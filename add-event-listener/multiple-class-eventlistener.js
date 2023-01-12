// If you have more than one element with the same class you want to add the same event listener to all, you need to do the following:

// First we need to get the elements, we could do it with querySelectorAll
const varname = document.querySelectorAll('.className'); //Remember that query selector obtain the element by the css selector

// This variable it's going to sabe all the elements in an array so we could do a forEach loop
varname.forEach(item => {
    item.addEventListener('click', nameFunction)
});

// we are going to iterate every index of the array varname with forEach
// item it's a param and refer to every single element
// Then an arrow funcition it's going to make the addEventListener