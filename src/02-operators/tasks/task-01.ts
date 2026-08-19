/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedriceqty: number = 3;
const friedriceprice: number = 18000;
const mineralwaterqty: number = 2;
const mineralwaterprice: number = 5000;
const discount: number = 10000;

const totalfoodprice: number = friedriceqty * friedriceprice;
const totaldrinkprice: number = mineralwaterqty * mineralwaterprice;
const total: number = totalfoodprice + totaldrinkprice;
const payment: number = total - discount;

console.log(`Total Food Price : Rp ${totalfoodprice}`);
console.log(`Total Drink Price: Rp ${totaldrinkprice}`);
console.log(`Grand Total      : Rp ${total}`);
console.log(`Discount         : Rp ${discount}`);
console.log(`Final Payment    : Rp ${payment}`);