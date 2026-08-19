/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomprice = 650000;
const nightsstayed = 4;
const servicecharge = 120000;
const taxrate = 0.11;
const isvip = true;

const roomsubtotal: number = roomprice * nightsstayed;
const discount: number = isvip ? roomsubtotal * 0.12 : 0;
const discountedroomtotal: number = roomsubtotal - discount;
const taxableamount: number = discountedroomtotal + servicecharge;
const tax: number = taxableamount * taxrate;
const finalpayment: number = taxableamount + tax;
const iseligibleforfreebreakfast: boolean = nightsstayed >= 3 || isvip;

console.log(`Room Subtotal    : ${roomsubtotal}`);
console.log(`Discount         : ${discount}`);
console.log(`Tax              : ${tax}`);
console.log(`Final Payment    : ${finalpayment}`);
console.log(`Free Breakfast   : ${iseligibleforfreebreakfast}`);