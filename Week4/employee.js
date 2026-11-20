/**
 * Employee Management System
 * Classes, Inheritance and Composition
 * Professor Lewisgit add Week4git add Week4
 * 11/17/2026  & 11/19/2026
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
console.log(employee1);
employee1.describe();
console.log(Object.getOwnPropertyNames(Employee.prototype));
console.log(employee1.hasOwnProperty("describe"));
console.log(Object.getPrototypeOf(employee1)=== Employee.prototype);
console.log(Object.keys(employee1));

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
 console.log(developer1);
 developer1.describe();

 console.log(Object.keys(developer1));

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
 websiteProject.displayProject();

 console.log(developer1);
 developer1.assignProject(websiteProject);
 console.log(developer1);

class Manager extends Employee{
    constructor(name, employeeId, department, teamSize){
        super(name, employeeId, department);
        this.teamSize = teamSize;
    }

    describe(){
        console.log(`${this.name} manages a team of ${this.teamSize} employees.`);
    }
}

const emp = new Employee("Monica Smith", "E1","Human Resources");
const dev = new Developer("Trish Jones", "E2", "Software Engineering", "JavaScript");
const man = new Manager("Kim Hill", "E3", "Software Dev. Managerial", "20");

const employees = [
    emp,
    dev,
    man
];

employees.forEach(employee => {
    console.log(employee);
});

employees.forEach(emp =>{
      emp.describe();    //emp.describe(),  dev.describe(), man.describe()
});


function createEmployeeIdGenerator(){
    let nextId = 100;

    return function (){
        nextId++;
        return `ID:${nextId}`;
    }
}

const generateEmployeeId = createEmployeeIdGenerator();

console.log(generateEmployeeId());
console.log(generateEmployeeId());
console.log(generateEmployeeId());

const employee2 = new Employee("Tracy Jones", generateEmployeeId(), "Information Technology");
const developer2 = new Developer("Jane Doe", generateEmployeeId(), "Software Engineering", "JavaScript");
const manager2 = new Manager("Angela Johnson", generateEmployeeId(), "Python Dev. Team", "7");

const employees2 = [
    employee2,
    developer2,
    manager2
];

employees2.forEach(emp =>{
    emp.describe();
});

employees2.forEach(emp =>{
    console.log(emp);
});






