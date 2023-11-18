"use strict";
//cd .. && cd "02.Lowest Prices in Cities"
//tsc && node ./dist/solution.js
function lowestPricesInCities(input) {
    const products = {};
    for (const line of input) {
        const [town, product, price] = line.split(" | ");
        const priceInfo = { price: Number(price), town };
        if (!products[product]) {
            products[product] = priceInfo;
        }
        else {
            if (priceInfo.price < products[product].price) {
                products[product] = priceInfo;
            }
        }
    }
    // Print the products
    for (const product in products) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }
}
// Test the function
const input = [
    "Sample Town | Sample Product | 1000",
    "Sample Town | Orange | 2",
    "Sample Town | Peach | 1",
    "Sofia | Orange | 3",
    "Sofia | Peach | 2",
    "New York | Sample Product | 1000.1",
    "New York | Burger | 10",
];
lowestPricesInCities(input);
