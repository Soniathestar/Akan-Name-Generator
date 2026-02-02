document.getElementById("AkanNameForm").addEventListener("submit") Event.preventDefault()

const day = parseInt(document.getElementbyId("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = document.querySelector(`input[name="gender"]:checked`)

if(isValidDate(day,month,year)){
    alert("Kindly enter a valid date!Thank you!");
    return;
}

if(gender === null){
    alert("Please select your gender!Thank you!");
    return;
}
 function isLeapYear(year){
    return( year % 4 === 0 && year % 100 !==0) || (year % 400 === 0)
 }

 

