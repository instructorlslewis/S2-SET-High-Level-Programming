/**
 * Classes and inheritance of JavaScript: 
 * super class and subclasses that inherit from the super class ,prototypes,
 * Object.create(), extends, super(), method overriding, polymorphism
 * and the creation of subclasses.
 * 
 * Professor Lewis
 * November 12, 2026
 */


const APP_NAME = "Fruit Class Application";
/**
 * Parent / Super class 
 */
class Fruit{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    describe(){
        return `${this.name} is ${this.color}.`;
    }

}

// const apple = new Fruit("Apple","red" );
// console.log(apple);
// console.log(apple.describe());
// console.log(Object.getPrototypeOf(apple) === Fruit.prototype);

/**
 * Subclass or Child class of Fruit
 */
class Apple extends Fruit{
    constructor(color){
         super("Apple", color);
    }

    describe(){
        return `${super.describe()} Apples can be crisp.`;
    }

}

/**
 * Subclass or Child class of Fruit
 */
class Orange extends Fruit{
    constructor(color){
        super("Orange", color);
    }

    describe(){
        return `${super.describe()} Oranges can be juicy.`;
    }

}

/**
 * Subclass or Child class of Fruit
 */
class Strawberry extends Fruit{
    constructor(color){
        super("Strawberry", color);
    }

    describe(){
        return `${super.describe()} Strawberries can be sweet.`;
    }

}
/**
 * This function creates fruit objects
 */
function createFruit(name, color){

    const lowerName = name.toLowerCase();

    if(lowerName === "apple"){
        return new Apple(color);
    }
     if(lowerName === "orange"){
        return new Orange(color);
    }

     if(lowerName === "strawberry"){
        return new Strawberry(color);
    }

    return new Fruit(name, color);
    
}

/**
 * This function receives a fruit object and returns a message about
 * its property ownership and prototype.
 */

function getPrototypeMessage(fruit) {
    const ownName = Object.hasOwn(fruit, "name");
    const className = Object.getPrototypeOf(fruit).constructor.name;

    return `Own name property: ${ownName}. Prototype class: ${className}.`;
}

/**
 * This function searches for the id
 */
function getInputValue(elementId){
    return document.querySelector(elementId).value.trim();
}


/**
 * This function ensures the user entered text
 */
function validateText(value, fieldName){

    if(value === ""){
        throw new Error(`${fieldName} is required`);
    }
}

/**
 * Displays message passed into function.
 */
function displayMessage(message){
    document.querySelector("#output").textContent = message;
}

/**
 * Handles application flow
 */
function handleShowFruit(){

    try{
        const name = getInputValue("#fruit-name");
        const color = getInputValue("#fruit-color");
        
        validateText(name, "Fruit Name");
        validateText(color, "Fruit Color");

        const fruit = createFruit(name, color);

        const description =  fruit.describe();

        const prototypeMessage = getPrototypeMessage(fruit);

        displayMessage(`${description} ${prototypeMessage}`);


    }catch(error){
        displayMessage(error.message);
    }
}

/**
 * Initializes the application
 */
function initializeApplication() {
    document.querySelector("h1").textContent = APP_NAME;
    document.querySelector("#show-fruit").addEventListener("click", handleShowFruit);
}

document.addEventListener("DOMContentLoaded", initializeApplication);