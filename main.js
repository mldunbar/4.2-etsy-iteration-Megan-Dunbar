var _ = require('underscore');
var data = require('./items.json');

//Getting prices from the data.

 // var prices = _.pluck (data, 'price');
 // console.log(prices)

//Reducing the prices to a single number
//Dividing that by the number of items in the array

// var avgPrice = _.reduce(prices, function(a, b);
//
// console.log(prices)

//Second question!
//get prices between $14 and $18, not using other list of prices

var priceRange = _.filter(data,
  function(priceList){
    return Number (priceList.price) > 14 && Number (priceList.price) < 18;
    }

    );
//get names of said items

var rangeNames = _.pluck(priceRange, 'title');

console.log("Items that cost between $14.00 USD and $18.00 USD:" + " " + rangeNames + ".");

//Question three

// var pounds = _.pluck (data, 'currency_code');
// console.log(pounds)
