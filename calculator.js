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
        tc = add(first_num, last_num);
        if (tc.toString().length > 8) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
        }

    } else if (operator === "-") {
        tc = subtract(first_num, last_num);
        if (tc.toString().length > 8) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
        }
    
    } else if (operator === "*") {
        tc = multiply(first_num, last_num);
        if (tc.toString().length > 8) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
        }

    } else if (operator === "/") {
        tc = divide(first_num, last_num);
        str = tc.toString();
        if (str.includes(".00")) {
            str = str.slice(0, -3);
        }
        if (str.length > 8) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = +str;
        }
    }
}

const display = document.querySelector(".display");

const nums = document.querySelectorAll(".nums");

nums.forEach((num_row) => {
    const num_btns = num_row.querySelectorAll("button");
    num_btns.forEach((button) => {
        button.addEventListener("click", () => {
            if (display.textContent === "Really?" || display.textContent === "Err: Val") {
                display.textContent = "";
            }
            if (display.textContent.length != 8) {
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
        if (typeof first_num != "number" || typeof last_num != "number") {
            alert("ERROR: Please enter suitable number values")
            reset_values();
            display.textContent = "";
        } else {
            operate(first_num, last_num, operator);
            reset_values();
        }           
    }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    reset_values();
    display.textContent = "";
});