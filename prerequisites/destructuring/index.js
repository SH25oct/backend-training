//destructuring the objects and arrays 

const colors = ['red', 'green', 'blue', 'orange', 'pink', 'black']
//destructuring the colors array
//to access the first element from the array 
const [color1] = colors;
//use the third value in array 
const [,,color3] = colors;
//destructuring array using object method

const {3: color4} = colors;

const user = {
    name: 'Shahroz',
    age: '25',
    address: {
        city: 'lahore',
        state: 'punjab',
    },
}

//simply accessing the value 

// const name = user.name;
// const city = user.address.city;
//getting values through destructuring

// const {name, age} = user;
//getting value from nested object through destructuring 

const {address: {city, state}} = user;
// destructuring objects using functions

function findName ({address}){
 console.log(address.city);
}

findName(user);