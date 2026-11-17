/**
 * Employee Management System
 * Classes, Inheritance and Composition
 * Professor Lewisgit add Week4git add Week4
 * 11/17/2026
 */
class Employee{
    constructor(name, employeeId, department){
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;

        this.project = null;
    }

    describe(){
        console.log(`${this.name} works in the ${this.department} department.`);
    }

    assignProject(project){
        this.project = project;
    }
}

const employee1 = new Employee("Jane", "E101", "Information Technology");
// console.log(employee1);
// employee1.describe();
// console.log(Object.getOwnPropertyNames(Employee.prototype));
// console.log(employee1.hasOwnProperty("describe"));
// console.log(Object.getPrototypeOf(employee1)=== Employee.prototype);
// console.log(Object.keys(employee1));

 class Developer extends Employee{
    constructor(name, employeeId, department, language){
       super(name, employeeId, department);

       this.language = language;
    }
    
    describe(){
        console.log(`${this.name} is a developer who works with ${this.language}.`);
    }
    

 }

 const developer1 = new Developer("Tracy", "E102", "Software Engineering", "JavaScript");
//  console.log(developer1);
//  developer1.describe();

//  console.log(Object.keys(developer1));

 class Project{
    constructor(projectName, deadline){
        this.projectName = projectName;
        this.deadline = deadline;
    }

    displayProject(){
        console.log(`${this.projectName} is due ${this.deadline}.`);
    }

 }

 const websiteProject = new Project("Company Website", "November 30, 2026");
//  websiteProject.displayProject();

 console.log(developer1);
 developer1.assignProject(websiteProject);
 console.log(developer1);
