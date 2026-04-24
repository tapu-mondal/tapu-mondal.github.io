// typing effect (unchanged)
const text = ["CSE Student", "Aspiring Software Engineer", "Problem Solver"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if (letter.length === currentText.length) {
        setTimeout(() => {
            index = 0;
            count++;
        }, 1500);
    }

    setTimeout(type, 100);

})();


// ✅ popup open
function openPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    setTimeout(() => {
        document.getElementById("popupPass").focus();
    }, 100);
}


// ✅ password check
function checkPassword() {
    const pass = document.getElementById("popupPass").value;

    if (pass === "Bangtan") {
        window.location.href = "https://tapu-mondal.github.io/all-games/";
    } else {
        document.getElementById("popup-error").innerText = "Wrong Password!";
    }
}


// ✅ DOM fully loaded হলে event add হবে
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("popupPass");

    if (input) {
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                checkPassword();
            }
        });
    }
});




// ✅ close popup when clicking outside
function closePopup(event) {
    if (event.target.id === "popup") {
        document.getElementById("popup").style.display = "none";
    }
}
