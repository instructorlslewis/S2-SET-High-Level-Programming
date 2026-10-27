let customerName = "Jane Doe";
console.log(customerName);

/**
 * Variables, constants and Data Types
 */
const TAX_RATE = 0.08;
console.log("Tax Rate: ", TAX_RATE);
const PI = 3.14;
console.log(PI);
const ORG_NAME = "Frontier Technology";
console.log("Organization Name: ", ORG_NAME);
const isActive = false;
console.log("Is Active:", isActive);

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



