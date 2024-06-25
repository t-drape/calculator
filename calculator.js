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
        return "Really? NaN"
    }
    return a/b;
}

let first_num, last_num, operator;

function operate(first_num, last_num, operator) {
    if (operator === "add") {
        add(first_num, last_num);
    } else if (operator === "sub") {
        subtract(first_num, last_num);
    } else if (operator === "mult") {
        multiply(first_num, last_num);
    } else if (operator === "divide") {
        divide(first_num, last_num);
    }
}