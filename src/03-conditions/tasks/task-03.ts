/**
 * An Internet Service Provider recommends an internet package based on the customer's monthly data usage.
 * Business Rules
 * | Monthly Usage    | Recommended Package |
 * | ---------------- | ------------------- |
 * | Less than 50 GB  | Basic               |
 * | 50–150 GB        | Standard            |
 * | More than 150 GB | Premium             |
 * 
 * Today's customer has used:
 * | Information   | Value        |
 * | ------------- | ------------ |
 * | Customer Name | Raka Saputra |
 * | Monthly Usage | 124 GB       |
 * 
 * Tasks:
 * 1. Declare all variables.
 * 2. Implement the business rules using if...else if...else.
 * 3. Display the recommended package.
 */

const less50gb = "Basic";
const gb50150 = "Standard";
const morethan150gb = "Premium";

const customername = "Raka Saputra";
const monthlyusage = 124;

if (monthlyusage < 50){
    console.log(`Basic Package`)
} else if (monthlyusage <= 150){
    console.log(`Standard Package`) 
} else if (monthlyusage > 150){
    console.log(`Premium Pack`)
}