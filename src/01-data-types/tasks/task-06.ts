/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Marketplace = {
    productCode: string;
    productName: string;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: number; 
    averageRating: number;
    isDiscounted: boolean;
};

const marketplace: Marketplace[] = [
    {
        productCode: "TECH-001",
        productName: "Luicithik Wireless Mouse",
        sellingPrice: 1550000,
        stockQuantity: 42,
        productWeight: 141, 
        averageRating: 4.9,
        isDiscounted: false,
    },
    {
        productCode: "FASH-024",
        productName: "Erigus Jacket Black",
        sellingPrice: 185000,
        stockQuantity: 120,
        productWeight: 450,
        averageRating: 4.7,
        isDiscounted: true, 
    },
    {
        productCode: "HOME-889",
        productName: "Philipus LED Bulb 9W",
        sellingPrice: 85000,
        stockQuantity: 215,
        productWeight: 120,
        averageRating: 4.8,
        isDiscounted: true,
    },
];

console.log(marketplace);