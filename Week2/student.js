/**
 * Student Grade Processor app
 * Professor Lewis
 * November 3, 2026 -  November 5, 2026
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

    return student;

}
/**
 * Validat the student data before calculating the grade.
 */
function validateStudent(studentRecord){
    if(studentRecord.name === "" || studentRecord.studentId === ""){
        throw new Error("The student's name and ID are required.");
    }
    if(studentRecord.assignmentScores.length != REQUIRED_ASSIGNMENT_COUNT){
        throw new Error("Enter exactly 4 assignment scores.");
    }
                                    //[85, 90, 78, 92]
    for(let i =0; i < studentRecord.assignmentScores.length; i++ ){
        const score = studentRecord.assignmentScores[i];
        
        if (Number.isNaN(score) || score < 0 || score > 100){
             throw new Error("Each assignment score must be a number from 0 to 100.");
        }
    }//end of for loop

    if(Number.isNaN(studentRecord.examScore) || studentRecord.examScore < 0 || studentRecord.examScore > 100){
          throw new Error("The exam score must be a number from 0 to 100.");
    }

}
 
/**
 * Calculates the average of the four assignment scores.
 */
function calculateAverage(scores){
    let total = 0;
                //[85, 90, 78, 92]
    for(let i = 0; i < scores.length; i++ ){
        total += scores[i];
    }
    return total / scores.length;
    
}

/**
 * Calculate the weighted final grade.
 */
function calculateFinalGrade(assignmentAverage, examScore){
    return (assignmentAverage * ASSIGNMENT_WEIGHT) + (examScore * EXAM_WEIGHT);
}


function determineStatus(finalGrade){
    if(finalGrade >= PASSING_GRADE){
        return "Pass";
    }
    return "Fail";
}


function isHonorRoll(finalGrade){
    return finalGrade >= HONOR_ROLL_GRADE;
}


function processStudent(studentRecord){
    validateStudent(studentRecord);
    const assignmentAverage = calculateAverage(studentRecord.assignmentScores);
    const finalGrade = calculateFinalGrade(assignmentAverage, studentRecord.examScore);

    //Creating a new object on the fly with no variable name and returning it to the calling function.
    //This is called an object literal or an anonymous object.
    return{
        name: studentRecord.name,
        studentId: studentRecord.studentId,
        assignmentAverage: assignmentAverage.toFixed(2),
        finalGrade: finalGrade.toFixed(2),
        status: determineStatus(finalGrade),
        honorRoll: isHonorRoll(finalGrade)
    };

}

function displayResult(result){
       document.getElementById("result").textContent = `Student: ${result.name}
Student ID: ${result.studentId}
Assignment Average: ${result.assignmentAverage}
Final Grade: ${result.finalGrade}
Status: ${result.status}
Honor Roll: ${result.honorRoll ? "Yes" : "No"}`;

}

function displayError(error){
    document.getElementById("result").textContent = `Error: ${error.message}`;
}

/**
 * Controls the complete workflow after the button is clicked.
 */
function handleButtonClick(){

    try{
         const studentRecord = getStudentInput();
         const result = processStudent(studentRecord);
         displayResult(result);

    }catch(error){
          displayError(error);

    }
  


}

/**
 * Connects event (click) to the button and executes the function handleButtonClick()
 */
document.getElementById("processButton").addEventListener("click", handleButtonClick);


