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
// console.log(garageNamesAndPrices);


// Prompt 5
// Print an array of all the items that are less or equal to $50.
const lessThan50 = (items) => {
    return items.price <= 50;
}

const itemsLessThan50 = garageSale.filter(lessThan50);
// console.log(itemsLessThan50);


// Prompt 6
// Print an array of all the items whose condition are "used."
const usedItems = (items) => {
    return items.condition === 'used';
}

const usedGarageItems = garageSale.filter(usedItems);
// console.log(usedGarageItems);


// Prompt 7
// Print all the prices in garageSale array into a new array.
const salesPrices = (items) => {
    return items.price;
}

const garageSalesPrices = garageSale.map(salesPrices);
// console.log(garageSalesPrices);


// Prompt 8
// Print the total cost of the garageSale array.
const totalCost = (total, items) => {
    return total += items.price;
}

const garageItemsTotal = garageSale.reduce(totalCost, 0);
// console.log(garageItemsTotal);


// Prompt 9
// Print the average price for the garage sale.
const averagePrice = (totalItemsCost, amountOfItems) => {
    return totalItemsCost/amountOfItems;
}

const totalAveragePrice = averagePrice(garageItemsTotal, garageSale.length).toFixed(2);
console.log(totalAveragePrice);