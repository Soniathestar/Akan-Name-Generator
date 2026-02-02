document.getElementById("AkanNameForm").addEventListener("submit", function(event){event.preventDefault()};

const day = parseInt(document.getElementById("day").value);
const month = parseInt(document.getElementById("month").value);
const year = parseInt(document.getElementById("year").value);
const gender = document.querySelector(`input[name="gender"]:checked`)

if(!isValidDate(day,month,year)){
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

 function calcDayofWeek(day, month, year)
 {
    const CC = Math.floor(year/100);
    const YY = year % 100;

    const d = Math.floor(
        (
            (4 * CC - 2 * CC - 1) +
            (5 * YY / 4) +
            (26 *(month + 1) /10) +
            day
        ) % 7

        return d;
    )
    function isValidDate(day, month, year)
    {
        const daysInMonth = [
            31,
            isLeapYear(year) ? 29:28,
            31,
            30,
            31,
            30,
            31,
            31,
            30,
            31,
            30,
            31,
        ];
    }

    return(
        Month >= 1 &&
        month <= 12 &&
        day>= 1 &&
        day <= daysInMonth[month - 1]
    );
 }

 const maleNames = [
    "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw" , "Kofi" , "Kwame"
 ];

 const femaleNames = [
    "Akosua" , "Adwoa","Abenaa", "Akua", "Yaa", "Afua", "Ama"
 ];

 const akanName = 
 gender.value === "male"
 ? maleNames[dayIndex]
 : femaleNames[dayIndex];

 document.getElementbyId("result").textContent = `Your Beautiful Akan Name is ${akanName}!`


