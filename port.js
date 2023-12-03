document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const hiddenSection = document.querySelector(".hidden-section");

    toggleButton.addEventListener("click", function () {
        if (hiddenSection.style.display === "none" || hiddenSection.style.display === "") {
            hiddenSection.style.display = "block";
        } else {
            hiddenSection.style.display = "none";
        }
    });
});