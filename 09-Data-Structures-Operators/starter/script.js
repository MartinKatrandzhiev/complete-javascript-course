'use strict';

// Data needed for a later exercise
const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    // function with object destructuring in the params
    orderDelivery: function ({
        starterIndex = 1,
        mainIndex,
        time = '20:00',
        address
    }) {
        console.log(
            `Order received!! Your order of ${this.mainMenu[mainIndex]} and
            ${this.starterMenu[starterIndex]} will be delivered to ${address} at ${time}`
        );
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(
            `Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`
        );
    },

    orderPizza: function (mainIngredient, ...otherIngrdient) {
        console.log(mainIngredient);
        console.log(otherIngrdient);
    },

    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0, // Open 24 hours
            close: 24,
        },
    },
};

/*
    103: Destructuring Arrays
*/

// // Leave a hole to ignore a certain element in the array
// let [main, , secondary] = restaurant.categories;

// console.log(main, secondary);

// // Switching variables without temp
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive more than 1 return value from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //Nested destructuring
// const nested = [1, 2, [3, 4]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default Values -- can be used when we don't want to use undefined 
// // to a value that doesn't exist in the arrar
// const [p = 1, q = 1, r = 1] = [7, 8];
// console.log(p, q, r);

/*
    104: Destructuring Objects
*/

// const {
//     name: restaurantName,
//     openingHours,
//     categories: tags} = restaurant;
// console.log(restaurantName, openingHours, tags);

// // Default values
// const {menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = {a: 14, b: 7, c: 14};

// // Gives error as JS expects code inside -- {} -- to be a block.
// // So, we have to wrap it in parentheses
// ({a, b} = obj);

// // Nested Objects
// // const {fri} = openingHours;
// // console.log(fri);

// // We want only the open and close hours for friday and have a custom name for variables
// const {fri: {
//     open: openhours, close: closeHours
// }} = openingHours;
// console.log(openhours, closeHours);

// // Pass object into function
// restaurant.orderDelivery({
//     address: '29, 2nd main, water tank road',
//     mainIndex: 2,
//     starterIndex: 1,
//     time: '21:30'
// });

// restaurant.orderDelivery({  // using the default values in the function
//     address: '29, 2nd main, water tank road',
//     mainIndex: 3
// });

/*
    105: The Spread Operator
*/

// const newMenu = [...restaurant.mainMenu, 'Idli'];
// console.log(newMenu);

// // Join 2 arrays
// const allMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(allMenu);

// // Real world example
// const ingredients = [
//     // prompt(`Let's make pasta!! Ingrdient 1?`),
//     // prompt(`Ingrdient 2?`),
//     // prompt(`Ingrdient 3?`)
// ];
// console.log(ingredients);
// //basic way
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //spread operator
// restaurant.orderPasta(...ingredients);

// // Objects -- after ES2018

// const newRestaurant = {
//     foundedIn: 1998,
//     ...restaurant,
//     founder: 'Vishu'
// };
// console.log(newRestaurant);
// // create a copy of restaurant
// const restaurantCopy = {...restaurant};
// restaurantCopy.name = 'Om Ganesh Restaurant';
// console.log(restaurantCopy.name, restaurant.name);

/* 
    106: Rest Pattern and parameters
*/

// Spread -- on the RHS of =
const array = [1, 2, 3, ...[4, 5]];
// REST -- on the LHS of =
const [a, b, ...others] = array;
console.log(a, b, others);

const [pizza, , risotto, ...otherMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// Rest will ignore the skipped elements and only collect the remaining elements
console.log(pizza, risotto, otherMenu);


// Objects
const {sat, ...weekDays} = restaurant.openingHours;
console.log(sat, weekDays);

// Functions
// accepts arbitrary number of arguments
const add = function (...numbers) {     // Unpack the values using rest
    console.log(numbers);
    const sum = numbers.reduce((a, b) => a + b);
    console.log(sum);
};

add(2, 3, 4);
add(2, 3, 4, 5, 6);
const x = [4, 5, 6];
add(...x);

restaurant.orderPizza('mushrooms', 'onions', 'tomato', 'spinach');

