const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll("#no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkBtn.addEventListener("click", validateAmount);

function validateAmount() {
    hideError();

    if (billAmount.value > 0) {
        if (Number(cashGiven.value) >= Number(billAmount.value)) {
            const amountToBeReturn = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturn);
        } else {
            showError(
                "The cash provided should atleast be equal to the bill amount."
            );
        }
    } else {
        if (billAmount.value.match("^[A-Za-z0-9]+$")) {
            showError("Bill Amount should only contain numbers.");
        } else {
            showError("Invalid Bill Amount.");
        }
    }
}

function hideError() {
    errorMsg.style.display = "none";
}

function showError(message) {
    errorMsg.style.display = "block";
    errorMsg.innerHTML = message;
}

function calculateChange(amountToBeReturn) {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturn / availableNotes[i]);
        amountToBeReturn %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}
