/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let outofstock = 0;
let lowstock = 0;
let safestock = 0;
let totalinvent = 0;


for (const quantity of stocks){
    totalinvent += quantity;

    if(quantity === 0){
        outofstock++;
    } else if(quantity < 10){
        lowstock++;
    } else {
        safestock++;
    }
}

const averagestock = totalinvent / stocks.length;

console.log(`Out of Stock : ${outofstock}`)
console.log(`Low Stock : ${lowstock}`)
console.log(`Safe Stock : ${safestock}`)
console.log(`Total Inventory : ${totalinvent}`)
console.log(`Average Stock : ${averagestock}`)