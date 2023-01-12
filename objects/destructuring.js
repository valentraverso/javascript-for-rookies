// Let's see how we can destructure an Object to make it easier to use

// Example object with shark

let sharkInfo = {
    type: 'White Shark',
    region: 'Caribe',
    habitat: 'Water',
    dangerOfExtintion: 'Vulnerable',
}

// Then we aplied destructuring with the keys of object and assign the name of the object as value
let { type, region, habitat, dangerOfExtintion } = sharkInfo;

// Now we could use the key to call the elements of the object in our code
console.log(type);
