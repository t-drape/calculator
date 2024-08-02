function add(a, b) {
    x = (a+b);
    if (x.toString().includes(".")) {
        x = +x.toFixed(2)
    }
    return x;
}

function subtract(a, b) {
    x = (a-b);
    if (x.toString().includes(".")) {
        x = +x.toFixed(2)
    }
    return x;
}

function multiply(a, b) {
    x = (a*b);
    if (x.toString().includes(".")) {
        x = +x.toFixed(2)
    }
    return x;
}

function divide(a, b) {
    if (b === 0) {
        reset_values();
        display.textContent = "Really?";
        return;
    }
    return (a/b).toFixed(2);
}

function sqrt(a) {
    return (a ** 0.5).toFixed(2).toString();
}

function square(a) {
    return (a ** 2).toFixed(2).toString();
}

function exponent(a, b) {
    return (a ** b).toFixed(2);
}

function remove_zeros(str) {
    if (str.includes(".00")) {
        str = str.slice(0, -3);
    }
    return str;
}

function reset_values() {
    first_num = 0;
    last_num = 0;
    operator = "";
}

function update_previous() {
    if (pv) {
        previous_value.textContent = "Prev: " + pv;
        prev_val = pv;
    }
}

function update_current(tc) {
    tc = +(remove_zeros(tc.toString()));
    display.textContent = tc;
    cur_val = tc;
}

function error_procedure() {
    display.textContent = "Err: Val";
    reset_values();
    prev_val = "";
    pv = "";
    cur_val = "";
    previous_value.textContent = "Prev: Value";
}

let first_num, last_num, operator, prev_val, cur_val, pv;


function operate(first_num, last_num, operator) {
    if (operator === "+") {
        tc = add(first_num, last_num);
        tc.toString().length > 7 ? error_procedure() : update_current(tc);

    } else if (operator === "-") {
        tc = subtract(first_num, last_num);
        tc.toString().length > 7 ? error_procedure() : update_current(tc);
    
    } else if (operator === "*") {
        tc = multiply(first_num, last_num);
        tc.toString().length > 7 ? error_procedure() : update_current(tc);

    } else if (operator === "/") {
        div = divide(first_num, last_num);
        str = div.toString();
        str = remove_zeros(str);
        str.length > 7 ? error_procedure() : update_current(+str);
    } else if (operator === "a**b") {
        tc = exponent(first_num, last_num);
        tc.toString().length > 7 ? error_procedure() : update_current(tc);
    }
    update_previous();
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
        if (Number.isNaN(first_num)) {
            alert("ERROR: Please enter suitable number values")
            reset_values();
            display.textContent = "";
            prev_val = "";
            pv = "";
            cur_val = "";
            previous_value.textContent = "Prev: Value";
        }
        if (target.textContent === "x²" || target.textContent === "√") {
            if (target.textContent === "x²") {
                str = square(first_num).toString();
                str = remove_zeros(str);
                update_previous();
                pv = +str;
                str.length > 7 ? error_procedure() : update_current(+str);
            } else if (target.textContent === "√") {
                str = sqrt(first_num).toString();
                str = remove_zeros(str);
                update_previous();
                pv = +str;
                str.length > 7 ? error_procedure() : update_current(+str);
                
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
            prev_val = "";
            pv = "";
            cur_val = "";
            previous_value.textContent = "Prev: Value";
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
    cur_val = "";
    previous_value.textContent = "Prev: Value";
});