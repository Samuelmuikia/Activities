//
const pizzToppings = ["pepperoni", "bacon", "sausage", "lemon"]
function greetCustomer(Toppings) {
  let greeting = (`Welcome to johnny's pizza we offer`);
    greeting += ` ${Topping}`
   console.log (greeting);
};
greetCustomer(pizzaToppings);

function getPizzaOrder (size, crust, ...Toppings) {
 let order = `One $(size) $(crust) pizza with` ;
 for (let toping of  toppings)
  order += ` ${Topping}`
console.log(pizzaOrder ("coming up");
}
return [size, crust, toppings];
order += `coming up`
getPizzaOrder(`large`, `stuffed crust`, `bacon`, `sausage`, `pepperoni`, `lemons`)

function preparePizza ["size", "crust", "...Toppings"]
 let pizzaObject = "...Cooking pizza..." ;
 for (let toping of  toppings)
 pizzaObject += ` ${Topping}`
 console.log("...Cooking pizza...");
 pizzaObject[];
 return (pizzaObject);

function servePizza {pizza}
let pizza = `Order up! Here's your ${pizza.code} ${pizza.crust}crust pizza with x, y, z, ... Enjoy!`;
for (let toping of  pizza.toppings){
pizza += ` ${Topping}`
console.log(servePizza(pizza +"!");
pizza[];
return [size, crust, toppings];

greetCustomer();
servePizza(
  preparePizza(getPizzaOrder("large", "stuffed crust", "bacon", "sausage", "pepperoni", "lemons"))
);
