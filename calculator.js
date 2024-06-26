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
    return a/b;
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

const nums = document.querySelector(".nums");

const num_btns = nums.querySelectorAll("button");

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

const op_con = document.querySelector(".operators");
op_con.addEventListener("click", function (e) {
    target = e.target;
    if (target.textContent === "Add") {
        operator = "+";
    } else if (target.textContent === "Subtract") {
        operator = "-";
    } else if (target.textContent === "Multiply") {
        operator = "*";
    } else if (target.textContent === "Divide") {
        operator = "/";
    }
    first_num = +(display.textContent);
    display.textContent = "";
});


function reset_values() {
    first_num = 0;
    last_num = 0;
    operator = "";
}

const eq = document.querySelector(".eq");

eq.addEventListener("click", () => {
    if (operator) {
        last_num = +(display.textContent);
        operate(first_num, last_num, operator);
        console.log(first_num, last_num, operator);
        reset_values();
    }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    reset_values();
    display.textContent = "";
});

