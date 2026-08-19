/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const hourlyrate = 8000;
const hours = 7;
const minutes = 35;

const totalminutes: number = hours * 60 + minutes;
const remainingminutes: number = totalminutes % 60;
const billedhours: number = (totalminutes % 60 === 0) ? totalminutes / 60 : ~~(totalminutes / 60) + 1;
const paymentbeforediscount: number = billedhours * hourlyrate;
const discountamount: number = (totalminutes > 5 * 60) ? paymentbeforediscount * 0.15 : 0;
const finalPayment: number = paymentbeforediscount - discountamount;

console.log(`Total playing time : ${totalminutes} minutes`);
console.log(`Remaining minutes  : ${remainingminutes} minutes`);
console.log(`Total billed hours : ${billedhours} hours`);
console.log(`Payment before disc: ${paymentbeforediscount}`);
console.log(`Discount amount    : ${discountamount}`);
console.log(`Final payment      : ${finalPayment}`);