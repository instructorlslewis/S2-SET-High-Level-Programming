/**
 * Week 1 -  JavaScript Fundamentals
 * Professor Lewis
 * 10/27/2026 && 10/29/2026
 */

// let customerName = "Jane Doe";
// console.log(customerName);

/**
 * Variables, constants and Data Types
 */
const TAX_RATE = 0.08;
console.log("Tax Rate: ", TAX_RATE);
const PI = 3.14;
console.log(PI);
const ORG_NAME = "Frontier Technology";
console.log("Organization Name: ", ORG_NAME);
// const isActive = false;
// console.log("Is Active:", isActive);

let visitCount = 100;
console.log("Visitor Count: ", visitCount);
visitCount = visitCount + 1;
console.log("Updated Visitor Count: ", visitCount);

//  var studentName = "Morgan Chris";
//  var studentName = "Mary Smith";
//  console.log(studentName);

let studentName = "Mary Smith";
console.log(studentName);
studentName = "Morgan Smith";
console.log(studentName);

/**
 * Basic Data Types 
 * String: Text inside quotation marks, such as "Premium" or "Professor Lewis".
   Number: Numeric data used in calculations, such as 150, 0.10, or 25.
  Boolean: A logical true or false value, such as isActive = true.
  typeof: An operator that reports the data type of a value. For example, typeof isActive produces boolean.

 */
let studentAddress = "123 Hope Avenue";
console.log("Student Address: " + studentAddress);

let num1 = 5; num2 = 7;
let sum =  num1 + num2;
console.log(sum);

let bookTitle ="For Whom The Bell Tolls"
const isCheckedIn =true;
console.log("Is the book titled, " + bookTitle + " checked in ? " + isCheckedIn);


console.log(`Student Address: ${studentAddress}`);
console.log(`Is the Book ${bookTitle} checked in ? ${isCheckedIn}`);

/**
 * Array is a data structure that stores multiple values in a single variable/constant.  
 * Ordered collections,  because each element has a numerical index that indentifies its 
 * position within the array.  The index starts with 0 not 1
 * 
 * Imagine a restaurant where customers are waiting to be seated. JavaScript array methods can help manage the waiting list.
 */
         //index.  0       1     2
let customers = ["Jane", "John", "Mary"];
console.log(customers);

// A new customer joins the end of the line//Add element to end of array
customers.push("Morgan");
console.log(customers);

// Jane is seated and leaves the front of the line First customer is seated and removed from the line.
customers.shift();
console.log(customers);

// Morgan leaves the restaurant, Last customer leaves the waiting line.
customers.pop();
console.log(customers);


// Tracy is given priority and moves to the front, Priority customer is added to the front of the line.
customers.unshift("Tracy");
console.log(customers);

/**
 * Object groups related info. using property names
 * Makes data easier to organize, access and manage
 */

const customerName = "Mary Jones";
const membershipType = "Premium";
const accountBalance = 150;
const isActive = true;
const purchases = [21, 75, 220, 19, 150,300];

const customer = {
  name: customerName,
  membership: membershipType,
  accountBalance: accountBalance,
  active: isActive,
  purchases: purchases
};

console.log(customer);

const [, , subscriberName, planName, balanceInput] = process.argv;
const subscription = {
  subscriber: subscriberName,
  plan: planName,
  balanceDue: Number(balanceInput)
};
// console.log("Subscription Information");
// console.log(`Subscriber: ${subscription.subscriber}`);
// console.log(`Plan: ${subscription.plan}`);
// console.log(` Balance Due: $${subscription.balanceDue}`);

/**
 * Create function that accepts a membership plan as an argument, sets the argument to lowercase
 * then using if...else condition to apply appropriate discount rate based on premium plan type
 */

function getDiscountRate(membership){
   const normalizedMembership = membership.toLowerCase();

   if(normalizedMembership === "premium"){
     return 0.10;
   }else if (normalizedMembership === "standard"){

    return 0.05;
   }else{
    return 0;
   } 
}
const discountRate = getDiscountRate("stanDarD");
console.log("Member discount Rate is: ", discountRate.toFixed(2));

/**
 * Arithmetic Operators
 * + addition:
   - subtraction:
   * multiplication: 
   / division:
 * 
 */

   const subtotal = 200;
   const startingBalance = 50;
   const numberOfPurchases = 4;
   const rewardPoints = 275;

   const discountAmount = subtotal * discountRate;
   const finalPurchaseTotal = subtotal - discountAmount;
   const updatedBalance = startingBalance + finalPurchaseTotal;
   const averagePurchase = subtotal / numberOfPurchases;
   const pointsRemainder = rewardPoints % 100;  


console.log(`Discount: $${discountAmount}`);                 
console.log(`Final Total: $${finalPurchaseTotal}`);          
console.log(`Updated Balance: $${updatedBalance}`);         
console.log(`Average Purchase: $${averagePurchase}`);       
console.log(`Remaining Points: ${pointsRemainder}`); 


/**
 * for ... loop with the continue operator
 */

//const purchases = [21, 75, 0, 19,150];

let total = 0;
for(let index = 0; index < purchases.length; index++ ){
   const purchase = purchases[index];

   if(purchase <=0){
    break;
   }

   total = total + purchase;
}


const grandTotal = total;
console.log(`Grand Total: ${grandTotal}`);


/**
 * for ... of loop
 */
// const purchases = [21, 75, 220, 19,150];

let largePurchase;
for (const purchase of purchases) {
    if (purchase >= 100) {
        largePurchase = purchase;
        break;
    }
}
console.log(`Large Purchase ${largePurchase}`);


/**
 * While loop repeats as long as the condition is true
 */

let reminderNumber = 1;
while(reminderNumber <= 3){
  console.log(`Reminder ${reminderNumber}`);
  reminderNumber++;  //2, 3, 4
}

function checkBalance(value){
  try{
      const balance = Number(value);   //NaN

      if(typeof balance !== "number"|| Number.isNaN(balance)){
        throw new Error("Balance must be a number");
      }
      console.log(`Balance: $${balance}`);

  }catch(error){
    console.error(`Error: ${error.message}`);
  }
}
checkBalance(150);

