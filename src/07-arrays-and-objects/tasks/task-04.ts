/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

import { log } from "node:console";

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

let discountrate = 0;

if (subtotal >= 3000000){
    discountrate = 0.10;
} else if (subtotal >= 2000000) {
    discountrate = 0.05;
}

const discountamount = subtotal * discountrate;
const finalsubtotal = subtotal - discountamount;
const expensiveproduct = cart.filter(item => item.price > 1000000)

log(`Subtotal: ${subtotal}`)
log(`Discount: ${discountrate * 100}%`)
log(`Final Subtotal: ${finalsubtotal}`)
log(`Expensive Products: ${expensiveproduct.map(product => product.product).join()}`)