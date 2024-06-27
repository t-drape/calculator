function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    if (b === 0) {
        reset_values();
        return "Really?"
    }
    return (a/b).toFixed(2);
}

function reset_values() {
    first_num = 0;
    last_num = 0;
    operator = "";
}

let first_num, last_num, operator;


function operate(first_num, last_num, operator) {
    if (operator === "+") {
        display.textContent = add(first_num, last_num);
    } else if (operator === "-") {
        display.textContent = subtract(first_num, last_num);
    } else if (operator === "*") {
        display.textContent = multiply(first_num, last_num);
    } else if (operator === "/") {
        display.textContent = divide(first_num, last_num);
    }
}

const display = document.querySelector(".display");

const nums = document.querySelectorAll(".nums");

nums.forEach((num_row) => {
    const num_btns = num_row.querySelectorAll("button");

    num_btns.forEach((button) => {
        button.addEventListener("click", () => {
            if (display.textContent === "Really?") {
                display.textContent = "";
            }
            num = button.textContent;
            if (!display.textContent) {
                display.textContent = num;
            } else {
                if (display.textContent === "0") {
                    display.textContent = num;
                } else {
                    display.textContent += num;
                }
            }
        });
    });
});


const operators = document.querySelectorAll(".operator");

operators.forEach((op) => {
    op.addEventListener("click", function (e) {
        target = e.target;
        if (target.textContent === "+") {
            operator = "+";
        } else if (target.textContent === "–") {
            operator = "-";
        } else if (target.textContent === "x") {
            operator = "*";
        } else if (target.textContent === "/") {
            operator = "/";
        }
        first_num = +(display.textContent);
        display.textContent = "";
    });
});

const eq = document.querySelector(".eq");

eq.addEventListener("click", () => {
    if (operator) {
        last_num = +(display.textContent);
        console.log(first_num, last_num, operator);
        operate(first_num, last_num, operator);
        reset_values();
    }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    reset_values();
    display.textContent = "";
});