/**
 * Student Grade Processor app
 * Professor Lewis
 * November 3, 2026
 */

const REQUIRED_ASSIGNMENT_COUNT = 4;
const ASSIGNMENT_WEIGHT = 0.4;
const EXAM_WEIGHT = 0.6;
const PASSING_GRADE = 50;
const HONOR_ROLL_GRADE = 90;

const student = {
    name: "",
    studentId: "",
    assignmentScores: [],
    examScore: 0
};

/**
 *  Convert prompt text into a clean String.
 */
function cleanText(text){
    if(text === null){
        return "";
    }
    
    return text.trim();  //removes whitespace from the beginning and end of a string
}

/**
 *  Convert one entered value into a Number.
 */
function convertToNumber(numberText){
    if(numberText === null || numberText.trim() === ""){
        return NaN;
    }
       
    return Number(numberText);  

}

/**
 * Converts assignment string values to numeric values
 */
function convertAssignmentScores(scoreText){  //"85, 90, 78, 92” passed in as one String
    if(scoreText == null || scoreText.trim()=== ""){ 
        return [];
    }
    const scorePieces = scoreText.split(","); //["85", " 90", " 78", " 92"] divides into an array of Strings using a specified separator, comma.
    const scores = [];
    for(let i = 0; i < scorePieces.length; i++){
        scores.push(convertToNumber(scorePieces[i])) //85, 90, 78, 92
    }

    return scores;

}
/**
 * Prompt the user to enter student data and sets the global student object.

 */
function getStudentInput(){
    const nameInput = prompt("Enter the student name: ");
    const idInput = prompt("Enter the student ID:");
    const assignmentInput = prompt("Enter exactly 4 assignment scores separated by commas:"); //85,90,78,92 --- "85, 90, 78, 92”
    const examInput = prompt("Enter the exam score:");  //98.8 --- "98.8"

    //Clean, convert and then store the entered values into our student object
    student.name = cleanText(nameInput);
    student.studentId = cleanText(idInput);
    student.assignmentScores = convertAssignmentScores(assignmentInput);
    student.examScore = convertToNumber(examInput);


}

/**
 * Controls the complete workflow after the button is clicked.
 */
function handleButtonClick(){
    const studentRecord = getStudentInput();

document.getElementById("result").textContent = `Student: ${student.name}
Student ID: ${student.studentId} 
Student Assignment Scores: ${student.assignmentScores} 
Student Exam Score: ${student.examScore}`
}

/**
 * Connects event (click) to the button and executes the function handleButtonClick()
 */
document.getElementById("processButton").addEventListener("click", handleButtonClick);


