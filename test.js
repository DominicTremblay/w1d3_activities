var someObject = {
  prices: [1, 2, 3, 4, 5],

  total: function() {
    var total = 0;
    this.prices.forEach(function(nb) {
      total += nb;
    });
    return total;
  }
};

var taxes = 0.2;

console.log(someObject.total());
