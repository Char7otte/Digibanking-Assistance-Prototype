const transferMoneyForm = document.querySelector("#transfer-money-form");
const moneyDisplayElements = document.querySelectorAll(".money-amount-display");
moneyAmount = moneyDisplayElements[0].innerText;

transferMoneyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    transferMethod = e.submitter.value;

    if (transferMethod === "transfer") {
        transferee = prompt("Who are you transferring to?");
        transferAmount = prompt(`How much do you want to transfer to ${transferee}?`);
        alert("Authenticate via fingerprint...");
        alert(`$${transferAmount} has been sent to ${transferee}!`);
    } else if (transferMethod === "transfer-assistance") {
        otp = Math.floor(Math.random() * 1000000) + 100000;
        alert(`Your otp is ${otp}`);
        setTimeout(() => {
            alert("Request to transfer $10 to Jerry, please authenticate with fingerprint");
        }, 5000);
        transferAmount = 10;
    } else {
        alert("what");
        return;
    }

    moneyAmount -= transferAmount;

    moneyDisplayElements.forEach((displayElement) => {
        displayElement.innerText = moneyAmount;
    });
});
