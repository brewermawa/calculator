addEvents();
let screen = document.querySelector("#screen");
dotEntered = false;

function addEvents() {
    let numbers = document.querySelectorAll(".number");
    
    numbers.forEach((e) => {
        e.addEventListener("click", () => {
            addNumberToScreen(e.id);
        });
    });
};

function addNumberToScreen(id) {
    if (screen.textContent.length < 10) {
        if (screen.textContent === "0") {
            screen.textContent = id;
            console.log("zero");
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
    }
}