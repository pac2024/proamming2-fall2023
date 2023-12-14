document.getElementById("generateName").addEventListener("click", function() {
    var birthMonth = document.getElementById("birthMonth").value;
    var age = parseInt(document.getElementById("age").value, 10);
    var favoriteColor = document.getElementById("favoriteColor").value;
    
    var generatedName = generateNameBasedOnInputs(birthMonth, age, favoriteColor);


    document.getElementById("nameOutput").textContent = generatedName;
});

function generateNameBasedOnInputs(birthMonth, age, favoriteColor) {
    
    if ((birthMonth === "January" || birthMonth === "February" || birthMonth === "March") && age < 20 && favoriteColor === "Blue") {
        return "Hockey";
    } else if ((birthMonth === "April" || birthMonth === "May" || birthMonth === "June") && age >= 20 && age < 40 && favoriteColor === "Red") {
        return "Baseball";
    } else if ((birthMonth === "July" || birthMonth === "August") && age >= 40 && favoriteColor === "Green") {
        return "Swimming";
    } else if (birthMonth === "September" && age < 30 && favoriteColor === "Yellow") {
        return "Football";
    } else if (birthMonth === "October" && age >= 30 && favoriteColor === "Pink") {
        return "Basketball";
    }
    else {
        return "Benched";
    }
}
