/**
 * File Handling and JSON
 * Professor Lewis
 * 11/24/2026
 */
const student = {
    name: "Tracy",
    course: "SE300"
}

console.log(student);
/**
 * Loads/imports Node.js's built-in File System module
 * fs constant provides file operations: reading, writing, deleting, updating, creating
 */
const fs = require('fs');

/**
 * File operations:  read, write, create, delete, update
 * Writing to a file sychronously means JavaScript waits for the file-writing operation
 * to finish before moving to the next line of code
 */

fs.writeFileSync('message.txt', 'Hello SE300 Class');

/**
 * Read from the message.txt file Synchronously 
 * Reads the file and blocks execution until the read is complete
 */

console.log("1. Starting Sychronous Process");
const data = fs.readFileSync('message.txt', 'utf8')

console.log("2.", data);
console.log("3. Finished");

/**
 * Asynchronous file processing means Node.js starts the file operation and continues
 * running the rest of the program instead of waiting for the file read to finish.
 * Also, known as a non-blocking file read.
 * 
 * This is important because asynchronous processing prevents the program from being blocked while 
 * waiting on slower operations, such as file accesss or reading records from a large table.
 */

console.log("1. Starting Asynchronous Process");

fs.readFile('message.txt', 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("2.", data); 

});

console.log("3. Finished");

const student2 = {
    name: "Jordan",
    course: "SE300",
    grade: 95,
    active: true
};

/**
 * JSON.strigify JSON method that converts a JavaScript Object into a JSON string
 */

const jsonData = JSON.stringify(student2, null, 2);
console.log(jsonData);

/**
 * Write the JSON data to a file
 */
fs.writeFileSync('student.json', jsonData);

console.log("Student saved! ");

/**
 * Read and Parse the student.json file
 * JSON.parse() converts the JSON string back into a JavaScript Object
 */


const fileData = fs.readFileSync('student.json', 'utf8');

const studentObject = JSON.parse(fileData);

console.log(studentObject);

console.log(studentObject.name);
console.log(studentObject.grade);




