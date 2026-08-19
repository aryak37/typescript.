/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
  ]

let totalrevenue = 0;
let highesttransaction = sales[0];
let lowesttransaction = sales [0];
let rp300kormore = 0;
let total300kormore = 0;

for (const amount of sales){
    totalrevenue += amount;

    if (amount > highesttransaction){
        highesttransaction = amount;
    }
    if (amount <lowesttransaction){
        lowesttransaction = amount;
    }
    if (amount >= 300000){
        rp300kormore++;
        total300kormore += amount;
    }
}

const averagevalue = sales.length > 0 ? totalrevenue / sales.length : 0;

console.log (`Total Sales Revenue : ${totalrevenue}`)
console.log (`Highest Transaction : ${highesttransaction}`)
console.log (`Lowest Transaction : ${lowesttransaction}`)
console.log (`Rp300,000 or More : ${rp300kormore}`)
console.log (`Average Transaction Value: ${averagevalue}`)
console.log (`Total 300 or more :  ${total300kormore}`)