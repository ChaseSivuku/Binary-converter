var num1 = 0;
var num2 = 0;
var result = 0;


moreContent = document.getElementById("to-hide");
moreContent.style.display = "none";


function add(value1, value2){
    return value1 + value2;
}

function sub(value1, value2){
    return value1 - value2;
}

function multi(value1, value2){
    return value1 * value2;
}

function toBinary(value){
    var result = [];
    var remainder;
    var quotient;
    do {
        remainder = value % 2;
        result.push(remainder);
        quotient = Math.floor(value / 2);
        value = quotient;
    } while (quotient >= 1);

    return result.reverse().join("");
}

function toDecimal(value) {
    const valueStr = value.toString(); 
    const valueArr = valueStr.split("");        
    let result = 0;

    for (let i = 0; i < valueArr.length; i++) {
        const bit = Number(valueArr[i]);
        const power = valueArr.length - 1 - i;
        result += bit * Math.pow(2, power);
    }

    return result;
}


document.addEventListener("DOMContentLoaded", () => {
    const input1 = document.getElementsByName("in1")[0];
    const input2 = document.getElementsByName("in2")[0];
    const out1 = document.getElementById("out1");
    const out2 = document.getElementById("out2");
    const resultOutput = document.querySelector(".result-output");
    const select1 = document.getElementById("converson1");
    const select2 = document.getElementById("converson2");

    function parseValue(value, type) {
        if (type === "bin") {
            if (!/^[01]+$/.test(value)) return NaN;
            return toDecimal(value);
        } else {
            return Number(value);
        }
    }

    // Convert input1 to out1 
    function updateConversion1() {
        const val = input1.value.trim();
        const from = select1.value;
        const to = select2.value;

        if (!val || !from || !to) {
            out1.value = "";
            return;
        }

        const parsed = parseValue(val, from);
        if (isNaN(parsed)) {
            out1.value = "Invalid";
            return;
        }

        out1.value = (to === "bin") ? toBinary(parsed) : parsed;
    }

    function updateConversion2() {
    const val = input2.value.trim();
    const from = select2.value;
    const to = select1.value;

    if (!val || !from || !to) {
        out2.value = "";
        return;
    }

    const parsed = parseValue(val, from);
    if (isNaN(parsed)) {
        out2.value = "Invalid";
        return;
    }

    out2.value = (to === "bin") ? toBinary(parsed) : parsed;
}

    input1.addEventListener("input", () => {
        updateConversion1();
        updateConversion2();
    });
    input2.addEventListener("input", () => {
    updateConversion2();
    updateConversion1();
    });
    select1.addEventListener("change", () => {
        updateConversion1();
        updateConversion2();
    });
    select2.addEventListener("change", () => {
        updateConversion1();
        updateConversion2();
    });

    function handleOperation(op) {
        const val1 = input1.value.trim();
        const val2 = input2.value.trim();
        const type1 = select1.value;
        const type2 = select2.value;

        if (!val1 || !val2) {
        resultOutput.value = "Please enter both inputs";
        return;
        }

        const num1 = parseValue(val1, type1);
        const num2 = parseValue(val2, type2);

        if (isNaN(num1) || isNaN(num2)) {
            resultOutput.value = "Invalid";
            return;
        }

        // update outputs
        out1.value = (type1 === "bin") ? toBinary(num1) : num1;
        out2.value = (type2 === "bin") ? toBinary(num2) : num2;

        // Calculations
        let result = 0;
        if (op === "add") result = add(num1, num2);
        else if (op === "sub") result = sub(num1, num2);
        else if (op === "multi") result = multi(num1, num2);

        resultOutput.value = (type1 === "bin") ? toBinary(result) : result;
    }

    document.getElementById("add").addEventListener("click", e => {
        e.preventDefault();
        handleOperation("add");
    });

    document.getElementById("sub").addEventListener("click", e => {
        e.preventDefault();
        handleOperation("sub");
    });

    document.getElementById("multi").addEventListener("click", e => {
        e.preventDefault();
        handleOperation("multi");
    });

    
});
