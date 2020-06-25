var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100]
  }
];

const select = key => object => object[key];

const addKey = key => obj => (obj[key] = obj[key] || {});

const addKeyToObj = (obj, key) => {
  addKey(key)(obj);
  return obj;
};

const calcTotal = arr => arr.reduce((sum, nb) => (sum += nb));

const initializeObj = (arr, key) =>
  arr.map(select(key)).reduce(addKeyToObj, {});

const salesSummary = initializeObj(companySalesData, "name");

const getSalesData = salesObj => salesObj.sales;

console.log(companySalesData.map(select("sales")));

console.log(Object.keys(salesSummary));
//console.log(calcTotal([80, 20, 10, 100, 90, 500]));
//console.log(initializeObj(companySalesData, "name"));

/* Expected Results:
{
  Telus: {
    totalSales: 1300
    totalTaxes: 144
  },
  Bombardier: {
    totalSales: 800,
    totalTaxes: 40
  }
}
*/
