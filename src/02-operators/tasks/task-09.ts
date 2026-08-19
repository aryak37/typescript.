/**
 * An online marketplace wants to calculate the customer's final payment and reward points after checkout.
 * The customer purchases the following items:
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Monitor Stand       | 420000 |        1 |
 * 
 * Customer Information:
 * | Information       | Value                            |
 * | ----------------- | -------------------------------- |
 * | Voucher Value     | 100000                           |
 * | Premium Member    | Yes                              |
 * | Reward Point Rate | 1 point for every Rp50,000 spent |
 * 
 * Business Rules:
 * - Premium members receive 10% discount.
 * - Voucher is deducted after the membership discount.
 * - Reward points are calculated from the final payment before tax.
 * - VAT is 11%.
 * - Free shipping is available if:
 * - Premium member OR
 * - Final payment before tax exceeds Rp1,500,000.
 * 
 * The checkout system must calculate:
 * - Product subtotal
 * - Membership discount
 * - Voucher deduction
 * - Payment before tax
 * - VAT
 * - Final payment
 * - Reward points
 * - Free shipping eligibility
*/

const keyboardprice = 850000;
const keyboardqty = 1;
const mouseprice = 275000;
const mouseqty = 2;
const standprice = 420000;
const standqty = 1;

const vouchervalue = 100000;
const ispremium = true;
const vatrate = 0.11;

const productsubtotal: number = (keyboardprice * keyboardqty) + (mouseprice * mouseqty) + (standprice * standqty);
const membershipdiscount: number = ispremium ? productsubtotal * 0.10 : 0;
const paymentafterdiscount: number = productsubtotal - membershipdiscount;
const paymentbeforetax: number = paymentafterdiscount - vouchervalue;
const vat: number = paymentbeforetax * vatrate;
const finalpayment: number = paymentbeforetax + vat;
const rewardpoints: number = ~~(paymentbeforetax / 50000);
const iseligibleforfreeshipping: boolean = ispremium || paymentbeforetax > 1500000;

console.log(`Product Subtotal     : Rp ${productsubtotal}`);
console.log(`Membership Discount  : Rp ${membershipdiscount}`);
console.log(`Voucher Deduction    : Rp ${vouchervalue}`);
console.log(`Payment Before Tax   : Rp ${paymentbeforetax}`);
console.log(`VAT (11%)            : Rp ${vat}`);
console.log(`Final Payment        : Rp ${finalpayment}`);
console.log(`Reward Points        : ${rewardpoints} points`);
console.log(`Free Shipping        : ${iseligibleforfreeshipping}`);