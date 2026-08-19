/**
 * A smart home monitors electricity usage every day.
 * Today's information:
 * | Information               | Value |
 * | ------------------------- | ----- |
 * | Previous Meter            | 25640 |
 * | Current Meter             | 25892 |
 * | Electricity Price per kWh | 1650  |
 * | Solar Panel Installed     | Yes   |
 * | Energy Saving Mode        | No    |
 * 
 * Business Rules
 * - Electricity usage is calculated from the meter difference.
 * - Houses with solar panels receive a 20% discount.
 * - Houses receive an additional 5% discount if Energy Saving Mode is enabled.
 * - A house qualifies for the Green Energy Program only if:
 *      - Solar panel is installed
 *      - Energy consumption is below 300 kWh
 *      - Energy Saving Mode is enabled
 * 
 * The system must calculate:
 * - Total energy consumption
 * - Electricity bill
 * - Final bill
 * - Green Energy Program eligibility
 */

const previousmeter = 25640;
const currentmeter = 25892;
const priceperkwh = 1650;
const hassolarpanel = true;
const isenergysavingmode = false;

const energyconsumption: number = currentmeter - previousmeter;
const baseelectricitybill: number = energyconsumption * priceperkwh;

const solardiscountrate: number = hassolarpanel ? 0.20 : 0;
const energysavingdiscountrate: number = isenergysavingmode ? 0.05 : 0;
const totaldiscountrate: number = solardiscountrate + energysavingdiscountrate;

const discountamount: number = baseelectricitybill * totaldiscountrate;
const finalBill: number = baseelectricitybill - discountamount;

const iseligibleforgreenenergy: boolean = hassolarpanel && energyconsumption < 300 && isenergysavingmode;

console.log(`Total Energy Consumption : ${energyconsumption} kWh`);
console.log(`Electricity Bill (Base)  : ${baseelectricitybill}`);
console.log(`Discount Amount          : ${discountamount}`);
console.log(`Final Bill               : ${finalBill}`);
console.log(`Green Energy Program     : ${iseligibleforgreenenergy}`);