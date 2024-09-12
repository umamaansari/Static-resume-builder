const toggleButton = document.getElementById("toggle-skill") as HTMLButtonElement;
const skills = document.getElementById("skill") as HTMLElement;

toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none" || skills.style.display === "") {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
});
