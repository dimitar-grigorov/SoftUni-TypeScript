//cd .. && cd "02. City Taxes"
//tsc && node .\dist\index.js

type City = {
  name: string;
  population: number;
  treasury: number;
  taxRate: number;
  collectTaxes: () => void;
  applyGrowth: (percentage: number) => void;
  applyRecession: (percentage: number) => void;
};

function cityTaxes(name: string, population: number, treasury: number): City {
  const city: City = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes: function () {
      // This is by the task requirements
      this.treasury += Math.floor(this.population * this.taxRate);
      // The correct way to do it in general
      // this.treasury += Math.floor(this.population * this.taxRate / 100);
    },
    applyGrowth: function (percentage: number) {
      this.population = Math.floor(this.population * (1 + percentage / 100));
    },
    applyRecession: function (percentage: number) {
      this.treasury -= Math.floor((this.treasury * percentage) / 100);
    },
  };
  return city;
}

//console.log("First test");
const firstCity = cityTaxes("Tortuga", 7000, 15000);
console.log(firstCity);

//console.log("Second test - Test collect taxes");
const secondCity = cityTaxes("Tortuga", 7000, 15000);
secondCity.collectTaxes();
console.log(secondCity.treasury);
// 7000 * (1 + 5 / 100) = 7350
secondCity.applyGrowth(5);
console.log(secondCity.population);

// console.log("Third test - Test recession");
// const thirdCity = cityTaxes("Tortuga", 7000, 15000);
// thirdCity.applyRecession(10);
// // 15000 * 10 / 100 = 1500 => 15000 - 1500 = 13500
// console.log(thirdCity.treasury);
