/**
 * The warehouse checks customer orders before shipping based on array below.
 * 
 * Business Rules
 * An order is ready to ship only if:
 * - Payment has been completed.
 * - Stock is available.
 * 
 * Student Task:
 * Loop through every order and calculate:
 * - Number of orders ready to ship
 * - Number of unpaid orders
 * - Number of orders waiting for stock
 * - Display all order IDs that are ready to ship
 */
const orders = [
  { id: "ORD001", paid: true, stockAvailable: true },
  { id: "ORD002", paid: false, stockAvailable: true },
  { id: "ORD003", paid: true, stockAvailable: false },
  { id: "ORD004", paid: true, stockAvailable: true },
  { id: "ORD005", paid: false, stockAvailable: false },
  { id: "ORD006", paid: true, stockAvailable: true }
];

let readyToShip = 0
let unpaidOrders = 0
let waitingForStock = 0
let shipableOrders: string[] = []

for (const order of orders) {
  if (order.paid && order.stockAvailable) {
    readyToShip++
    shipableOrders.push(order.id)
  } else if (!order.paid) {
    unpaidOrders++
  } else if (!order.stockAvailable) {
    waitingForStock++
  }
}

console.log(`Orders ready to ship: ${readyToShip}`)
console.log(`Unpaid orders: ${unpaidOrders}`)
console.log(`Orders waiting for stock: ${waitingForStock}`)
console.log(`Shipable order IDs: ${shipableOrders.join(", ")}`)