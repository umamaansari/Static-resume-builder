var toggleButton = document.getElementById("toggle-skill");
var skills = document.getElementById("skill");
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
