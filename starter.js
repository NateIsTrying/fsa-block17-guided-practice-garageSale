// const garageSale = require("./guided_practice_data_starter");
const garageSale = require("./data");


// Prompt 3
// Print an array of all the item names in garageSale.
const garageItemNames = (items) => {
    return items.name;
}

const garageItemNamesClean = garageSale.map(garageItemNames);
// console.log(garageItemNamesClean)


// Prompt 4
// Print an array of arrays of all the items with their prices.
// For example: [["blue sweater", 20], ["yellow raincoat", 20]];
const namesAndPrices = (items) => {
    return [items.name, items.price];
}

const garageNamesAndPrices = garageSale.map(namesAndPrices);
console.log(garageNamesAndPrices);


// Prompt 5
// Print an array of all the items that are less or equal to $50.

// console.log(garageSale.filter(lessThan50));

// Prompt 6
// Print an array of all the items whose condition are "used."


// Prompt 7
// Print all the prices in garageSale array into a new array.




// Prompt 8
// Print the total cost of the garageSale array.


// Prompt 9
// Print the average price for the garage sale.