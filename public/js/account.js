const accountLoginForm = document.querySelector("#account-login-form");
const usernameDisplayElements = document.querySelectorAll(".username-display");

accountLoginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Logged in!");

    username = e.target[0].value;
    usernameDisplayElements.forEach((displayElement) => {
        displayElement.innerText = username;
    });
});

const accountAssistanceForm = document.querySelector("#assistance-login-form");
const investOverlay = document.querySelector(".invest-overlay");

accountAssistanceForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("You are now assisting.");
    document.querySelector("#transfer-assistance-btn").disabled = true;

    // show the invest overlay when OTP is submitted
    if (investOverlay) {
        investOverlay.classList.add("active");
    }
});
