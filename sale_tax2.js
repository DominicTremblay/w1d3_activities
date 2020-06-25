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
function getTotalSales(sales) {
  var sum = 0;
  for (var salesItem of sales) {
    sum += salesItem;
  }
  return sum;
}

function getTaxRate(province) {
  return salesTaxRates[province];
}

function getTotalTaxes(totalSales, taxRate) {
  return totalSales * taxRate;
}
function calculateSalesTax(salesData, taxRates) {
  var salesObj = {};

  for (var company of salesData) {
    var totalSales = getTotalSales(company.sales);
    var taxRate = getTaxRate(company.province);
    var totalTaxes = getTotalTaxes(totalSales, taxRate);

    if (salesObj[company.name]) {
      salesObj[company.name].totalSales += totalSales;
      salesObj[company.name].totalTaxes += totalTaxes;
    } else {
      salesObj[company.name] = {
        totalSales: totalSales,
        totalTaxes: totalTaxes
      };
    }
  }
  return salesObj;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);
console.log(results);
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
} */
