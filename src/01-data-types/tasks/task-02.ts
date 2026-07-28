/**
 * An e-commerce platform is preparing a flash sale event. Before the discount calculation begins, 
 * the system temporarily stores several pieces of information as individual variables.
 * A customer wants to purchase a Mechanical Keyboard RGB with the product code KBR-001. 
 * The original price of the product is 850000 rupiahs, 
 * and the flash sale offers a 25% discount. The customer plans to buy 2 keyboards. 
 * Because the customer is a premium member, they are eligible for free shipping. 
 * The current stock available in the warehouse is 18 units.
 * 
 * Task:
 * 1. Identify every value that should become a variable.
 * 2. Choose an appropriate variable name for each value.
 * 3. Determine the correct data type.
 * 4. Declare all variables in TypeScript.
 * 5. Display the product data using console.log.
 */

const productName: string = "Mechanical Keyboard RGB";
const productCode: string = "KBR-001";
const originalPrice: number = 850000;
const discountPercentage: number = 25; 
const purchaseQuantity: number = 2;
const isFreeShipping: boolean = true;
let stockQuantity: number = 18;

const discountAmount: number = originalPrice * (discountPercentage / 100);
const finalUnitPrice: number = originalPrice - discountAmount;
const totalPrice: number = finalUnitPrice * purchaseQuantity;

console.log(`Product Name    : ${productName}`);
console.log(`Product Code    : ${productCode}`);
console.log(`Original Price  : Rp ${originalPrice.toLocaleString('id-ID')}`);
console.log(`Discount        : ${discountPercentage}%`);
console.log(`Discount Price  : Rp ${finalUnitPrice.toLocaleString('id-ID')} per unit`);
console.log(`Quantity Bought : ${purchaseQuantity}`);
console.log(`Total Payment   : Rp ${totalPrice.toLocaleString('id-ID')}`);
console.log(`Free Shipping   : ${isFreeShipping ? "Eligible" : "Not Eligible"}`);
console.log(`Stock Available : ${stockQuantity} units`);