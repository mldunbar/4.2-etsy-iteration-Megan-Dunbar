var _ = require('underscore');
var data = require('./items.json');

//Getting prices from the data.

//Reducing the prices to a single number

var priceList = _.pluck(data, 'price');

var sum = priceList.reduce(function(a,b){
  return (a+b);
});

var avg = sum/(data.length);
var avgTimes = Math.round(avg*100);
var avgDivide = avgTimes/100;

console.log("The average price is $" + avgDivide + ".");
//Dividing that by the number of items in the array

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

//get the item priced in GBP
var pounds = _.filter (data,
  function(poundFinder){
    return (poundFinder.currency_code) === "GBP";
  }
  );

//get the name of said item

var justPounds = _.pluck(pounds, 'title');

//get its price

var amountPounds = _.pluck(pounds, 'price');

//log the price and name of the item

console.log(justPounds + " costs " + "£" + amountPounds + ".");

//Question 4

//find materials of each item
var materials = _.filter (data,
  function(woodFinder){
    return (woodFinder.materials) === "wood";
  }
  );

 console.log(materials);

//filter for only wood materials

//log

//Question 5

//find materials for each item

//filter for materials that are greater than 8

//Question 6

// var madeOwn = _.filter (data,
//     ("who_made" === "i_did");
//
// console.log(madeOwn.length + " were made by their sellers.");
