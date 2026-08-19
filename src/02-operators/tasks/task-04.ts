/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const items = [
  { name: "Mechanical Keyboard", price: 850000, quantity: 1 },
  { name: "Wireless Mouse", price: 275000, quantity: 2 },
  { name: "Mouse Pad", price: 120000, quantity: 1 }
];

const isPremiumMember = true;

let subtotal = 0;
let totalItemCount = 0;

for (const item of items) {
  subtotal += item.price * item.quantity;
  for (let i = 0; i < item.quantity; i++) {
    totalItemCount++;
  }
}

const discountPercentage = subtotal > 1000000 ? 0.10 : 0;
const discountAmount = subtotal * discountPercentage;

const shippingFee = isPremiumMember ? 0 : 25000;

const finalPayment = subtotal - discountAmount + shippingFee;

console.log(`Total Items Purchased : ${totalItemCount}`);
console.log(`Subtotal             : Rp ${subtotal}`);
console.log(`Discount             : Rp ${discountAmount}`);
console.log(`Shipping Fee         : Rp ${shippingFee}`);
console.log(`Final Payment        : Rp ${finalPayment}`);
