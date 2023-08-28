let displayValue = "0";

function appendToDisplay(value) {
    if (displayValue === "0") {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = "0";
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function calculateSquare() {
    try {
        displayValue = (eval(displayValue) ** 2).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function calculateSquareRoot() {
    try {
        displayValue = Math.sqrt(eval(displayValue)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function calculateFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    } else {
        return number * calculateFactorial(number - 1);
    }
}

function calculate() {
    try {
        if (displayValue.includes('!')) {
            const number = parseFloat(displayValue.replace('!', ''));
            if (!isNaN(number)) {
                displayValue = calculateFactorial(number).toString();
            } else {
                displayValue = "Error";
            }
        } else {
            displayValue = eval(displayValue).toString();
        }
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function calculateLog() {
    try {
        displayValue = Math.log10(eval(displayValue)).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
    }
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === "") {
        displayValue = "0";
    }
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById("display");
    display.textContent = displayValue;
}
