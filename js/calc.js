addEventsToNumbers();
let screen = document.querySelector("#screen");
let clear = document.querySelector("#clear")
let sum = document.querySelector("#sum");
let minus = document.querySelector("#minus");
let multiplication = document.querySelector("#multiplication");
let division = document.querySelector("#division");
let negative = document.querySelector("#negative");
let backSpace = document.querySelector("#back-space");
let equals = document.querySelector("#equals");
let operand1 = null;
let operand2 = null;
let operation = null;
let lastButtonClicked = null;
addEventsToSigns();
dotEntered = false;

clear.addEventListener("click", () => {
    screen.textContent = "0";
    dotEntered = false;
});

function addEventsToSigns() {
    sum.addEventListener("click", sumClicked);
    minus.addEventListener("click", minusClicked);
    multiplication.addEventListener("click", multiplicationClicked);
    division.addEventListener("click", divisionClicked);
    negative.addEventListener("click", negativeClicked);
    backSpace.addEventListener("click", backSpaceClicked);
    equals.addEventListener("click", equalsClicked);
}

function addEventsToNumbers() {
    let numbers = document.querySelectorAll(".number");
    
    numbers.forEach((e) => {
        e.addEventListener("click", () => {
            addNumberToScreen(e.id);
        });
    });
};

function addNumberToScreen(id) {
    if (lastButtonClicked === "sum" || 
        lastButtonClicked === "equals" || 
        lastButtonClicked === "minus" ||
        lastButtonClicked === "multiplication" ||
        lastButtonClicked === "division") {
        screen.textContent = "";        
    }

    if (screen.textContent.length < 10) {
        if (screen.textContent === "0") {
            id === "dot" ? screen.textContent += "." : screen.textContent = id;
        }
        else {
            if (id === "dot") {
                if (!dotEntered) {
                    screen.textContent += ".";
                    dotEntered = true;
                }
            }
            else {
                screen.textContent += id;
            }
        }
        lastButtonClicked = id;
    }
}

function sumClicked() {
    if (!operand1) {
        operand1 = parseFloat(screen.textContent);
    }
    else {
        operand2 = parseFloat(screen.textContent);
        operand1 = operate();
        operand2 = null;
    }

    operation = "sum";
    dotEntered = false;
    lastButtonClicked = "sum";
};

function minusClicked() {
    if (!operand1) {
        operand1 = parseFloat(screen.textContent);
    }
    else {
        operand2 = parseFloat(screen.textContent);
        operand1 = operate();
        operand2 = null;
    }

    operation = "minus";
    dotEntered = false;
    lastButtonClicked = "minus";
};

function multiplicationClicked() {
    if (!operand1) {
        operand1 = parseFloat(screen.textContent);
    }
    else {
        operand2 = parseFloat(screen.textContent);
        operand1 = operate();
        operand2 = null;
    }

    operation = "multiplication";
    dotEntered = false;
    lastButtonClicked = "multiplication";
};

function divisionClicked() {
    if (!operand1) {
        operand1 = parseFloat(screen.textContent);
    }
    else {
        operand2 = parseFloat(screen.textContent);
        operand1 = operate();
        operand2 = null;
    }

    operation = "division";
    dotEntered = false;
    lastButtonClicked = "division";
};

function negativeClicked() {
    const number = parseFloat(screen.textContent);
    if (number !== "0") {
        if (number > 0) {
            screen.textContent = -Math.abs(number);
        }
        else {
            screen.textContent = Math.abs(number);
        }
    }
}

function backSpaceClicked() {
    number = screen.textContent;

    if (number.length === 1 ||
        (parseFloat(number) < 0 && number.length === 2) ||
        parseFloat(number) < 0 && number.length === 4 && number.charAt(2) === ".") {
        number = "0";
    }
    else {
        number = number.slice(0, -1);
    }

    screen.textContent = number;
}

function equalsClicked() {
    operand2 = parseFloat(screen.textContent);
    dotEntered = false;
    lastButtonClicked = "equals";
    operate();
    operand1 = null;
    operand2 = null;
    operation = null;
}

function operate() {
    switch (operation) {
        case "sum":
            screen.textContent = (operand1 + operand2).toFixed(8);
            return operand1 + operand2;
        case "minus":
            screen.textContent = (operand1 - operand2).toFixed(8);
            return operand1 - operand2;
        case "multiplication":
            screen.textContent = (operand1 * operand2).toFixed(8);
            return operand1 * operand2;
        case "division":
            screen.textContent = (operand1 / operand2).toFixed(8);
            return operand1 / operand2;
    }
}