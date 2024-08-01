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

function sqrt(a) {
    return (a ** 0.5).toFixed(2);
}

function square(a) {
    return a ** 2;
}

function exponent(a, b) {
    return a ** b;
}

function reset_values() {
    first_num = 0;
    last_num = 0;
    operator = "";
}

let first_num, last_num, operator, prev_val, cur_val, pv;


function operate(first_num, last_num, operator) {
    if (operator === "+") {
        tc = add(first_num, last_num);
        if (tc.toString().length > 7) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
            cur_val = tc;
        }

    } else if (operator === "-") {
        tc = subtract(first_num, last_num);
        if (tc.toString().length > 7) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
            cur_val = tc;
        }
    
    } else if (operator === "*") {
        tc = multiply(first_num, last_num);
        if (tc.toString().length > 7) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
            cur_val = tc;
        }

    } else if (operator === "/") {
        tc = divide(first_num, last_num);
        str = tc.toString();
        if (str.includes(".00")) {
            str = str.slice(0, -3);
        }
        if (str.length > 7) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = +str;
            cur_val = +str;
        }
    } else if (operator === "a**b") {
        tc = exponent(first_num, last_num);
        if (tc.toString().length > 7) {
            display.textContent = "Err: Val";
            reset_values();
        } else {
            display.textContent = tc;
            cur_val = tc;
        }
    }
    if (pv) {
        previous_value.textContent = "Prev: " + pv;
        prev_val = pv;
    }

}

const display = document.querySelector(".display_nums");

const previous_value = document.querySelector(".prev")

const nums = document.querySelectorAll(".nums");

nums.forEach((num_row) => {
    const num_btns = num_row.querySelectorAll("button");
    num_btns.forEach((button) => {
        button.addEventListener("click", () => {
            if (display.textContent === "Really?" || display.textContent === "Err: Val" || cur_val) {
                display.textContent = "";
                cur_val = "";
            }
            if (display.textContent.length != 7) {
                if (button.textContent == "Prev") {
                    num = prev_val;
                } else {
                    num = button.textContent;
                }
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
        first_num = +(display.textContent);
        if (target.textContent === "x²" || target.textContent === "√") {
            if (target.textContent === "x²") {
                str = square(first_num).toString();
                if (str.includes(".00")) {
                    str = str.slice(0, -3);
                }
                if (pv) {
                    previous_value.textContent = "Prev: " + pv;
                    prev_val = pv;
                }
                display.textContent = +str;
                pv = +(display.textContent);
                cur_val = +str;
            } else if (target.textContent === "√") {
                str = sqrt(first_num).toString();
                if (str.includes(".00")) {
                    str = str.slice(0, -3);
                }
                if (pv) {
                    previous_value.textContent = "Prev: " + pv;
                    prev_val = pv;
                }
                display.textContent = +str;
                pv = +(display.textContent);
                cur_val = +str;
                
            }

        } else {
            if (target.textContent === "+") {
                operator = "+";
            } else if (target.textContent === "–") {
                operator = "-";
            } else if (target.textContent === "x") {
                operator = "*";
            } else if (target.textContent === "/") {
                operator = "/";
            } else if (target.textContent === "x^") {
                operator = "a**b"
            }
            display.textContent = "";
            cur_val = "";
        }
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
            pv = +(display.textContent);
            reset_values();
        }           
    }
});

const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    reset_values();
    display.textContent = "";
    prev_val = "";
    pv = "";
    previous_value.textContent = "Prev: Value";
});