/**
 * API and JSON Integration
 * Professor Lewis
 * 11/24/2026
 */
fetch('https://jsonplaceholder.typicode.com/users/1')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(`Name: ${data.name}`);
    console.log(`Email: ${data.email}`);
    console.log(`City: ${data.address.city}`);
});