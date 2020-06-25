var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function addSales( sales ) {
  return sales.reduce( function ( sum, next){
    return sum += next;
  }, 0);
}

function calculateTax( totalSales, province, taxRates ) {
  var taxRate = taxRates[ province ];
  return totalSales * taxRate;
}

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var salesSummary = {};
  for( var company of salesData ) {
    salesSummary[ company.name ] = salesSummary[ company.name ] ||
    {
      totalSales: 0,
      totalTaxes: 0,
    };
    var totalSales = addSales( company.sales );
    var totalTaxes = calculateTax( totalSales, company.province, taxRates );
    salesSummary[ company.name ][ 'totalSales'] += totalSales;
    salesSummary[ company.name ][ 'totalTaxes'] += totalTaxes;
  }
  return salesSummary; 
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
}
*/