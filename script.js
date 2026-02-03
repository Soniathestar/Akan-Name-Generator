document.getElementById("AkanNameForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);
    const gender = document.querySelector('input[name="gender"]:checked');

    const resultDiv = document.getElementById("result");

    if (!gender) {
        resultDiv.innerHTML = "Please select your gender.Thank you!";
        return;
    }

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        resultDiv.innerHTML = "Please enter a valid date.Thank you!";
        return;
    }

    const birthDate = new Date(year, month - 1, day);
    const weekDay = birthDate.getDay(); // 0 = Sunday, 6 = Saturday

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const maleNames = [
        "Kwasi",
        "Kwadwo",
        "Kwabena",
        "Kwaku",
        "Yaw",
        "Kofi",
        "Kwame"
    ];

    const femaleNames = [
        "Akosua",
        "Adwoa",
        "Abenaa",
        "Akua",
        "Yaa",
        "Afua",
        "Ama"
    ];

    const akanName =
        gender.value === "Male"
            ? maleNames[weekDay]
            : femaleNames[weekDay];

    resultDiv.innerHTML = `
        🎉You were born on a <strong>${days[weekDay]}</strong>.<br>
        Your Akan name is <strong>${akanName}</strong>!
    `;
});
