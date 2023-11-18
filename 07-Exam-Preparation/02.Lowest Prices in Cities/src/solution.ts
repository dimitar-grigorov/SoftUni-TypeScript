//cd .. && cd "02.Lowest Prices in Cities"
//tsc && node ./dist/solution.js

type PriceInfo = {
  price: number;
  town: string;
};

function lowestPricesInCities(input: string[]): void {
  // Create a dictionary of products
  const products: { [name: string]: PriceInfo } = {};

  // Fill the dictionary with products
  for (const line of input) {
    const [town, product, price] = line.split(" | ");
    const priceInfo = { price: Number(price), town };

    // If the product is not in the dictionary, add it
    if (!products[product]) {
      products[product] = priceInfo;
    } else {
      // If the product is in the dictionary, compare the prices
      if (priceInfo.price < products[product].price) {
        products[product] = priceInfo;
      }
    }
  }
  // Print the products
  for (const product in products) {
    console.log(
      `${product} -> ${products[product].price} (${products[product].town})`
    );
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
