var spicyAhi = {
fishType: "Ahi",
sauce: "Sriracha & Mayo",
price: 100.00,
rice: "White",
ounces: 8

};

var x = spicyAhi.sauce;
window.alert(x);

//ask the user for amount of spicy ahi to buy
var amount = prompt("Amount to buy");
//display the total amount of ounces the user will buy
var total = amount * spicyAhi.ounces;
window.alert("Buying" + totalOunces);
//then display the total dollar amount
var totalDollar = amount * spicyAhi.price;
window.alert("Your total price: " + totalDollar);