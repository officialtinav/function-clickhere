var hamburger = {
veg: ["lettuce", "tomato", "onion"],
meat: "shark",
mayo: true,
mustard: true,
ketchup: true,
price: 50,
quantity: 1,
ounces: 8
}

var x = prompt("what is the new price of the hamburger?");
hamburger.price = x;
window.alert(hamburger.price);