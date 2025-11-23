
let buttons = document.querySelectorAll(".buttons .values .number");
let firstval = document.querySelector(".firstval");
let secondval = document.querySelector(".secondval");
let operators = document.querySelectorAll(".values .operator");
let equal = document.querySelector(".answer");
let clear = document.querySelector(".reduce");
let decrease = document.querySelector(".decrease");
let valuesecond = "";
let operatorval = "";
let operator = "";
let firstText = "";
let secondText = "";
let finalans = "";
let value = "";
let operatorvalPrev = ""; 
let updateval = false;

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
          value = button.value;
           if(updateval){
            secondval.innerText=value;
            updateval = false;
        }

        if (value === "." && secondval.innerText.includes("."))
             return;
        valuesecond = value;
        if(secondval.innerText === "0" || secondval.innerText ==="")
            {
            secondval.innerText = valuesecond;
        }
        else{
            secondval.innerText += valuesecond;
        }
    });
});

operators.forEach((operator) =>{
    operator.addEventListener("click",()=>{
        operatorval = operator.value;

        if(firstText !== "" && operatorvalPrev !== ""){
            let num1 = parseFloat(firstText);
            let num2 = parseFloat(secondval.innerText);
            switch(operatorvalPrev){
                case "+": finalans = num1 + num2; 
                break;
                case "-": finalans = num1 - num2; 
                break;
                case "*": finalans = num1 * num2; 
                break;
                case "/": 
                    if(num2 === 0){ alert("Cannot divide by zero"); return; }
                    finalans = num1 / num2; 
                    break;
            }
            finalans = parseFloat(finalans);
            if(finalans % 1 !== 0){
                secondval.innerText = finalans.toFixed(2);
            }else{
                secondval.innerText = finalans;
            }
            firstText = finalans;
        } else {
            firstText = secondval.innerText;
        }

        firstval.innerText = firstText + operatorval;
        secondval.innerText = "0";
        operatorvalPrev = operatorval;
        updateval = false;
    });
});

equal.addEventListener("click",()=>{
    let equalvalue = equal.value;
    if(equalvalue === "="){
        secondText = secondval.innerText;
        let num1 = parseFloat(firstText);
        let num2 = parseFloat(secondText);
        if(isNaN(num1) || isNaN(num2)) return;

        operator = operatorval;
        switch(operator){
        case "+":
            finalans = num1 + num2;
            break;
        case "-":
            finalans = num1 - num2;
            break;
        case "*":
            finalans = num1 * num2;
            break;
        case "/":
            if(secondText === 0){
                alert("cannot divide by zero");
            }else{
                finalans = num1 / num2;
            } 
            break;
        default :
            return;
        }   
        if(finalans % 1 !== 0){
            secondval.innerText = finalans.toFixed(2);
        }else{
            secondval.innerText = finalans;
        }
        firstval.innerText = "";
        updateval = true;
    }    
});

const resetbtn =(clear)=>{
    clear.addEventListener("click",()=>{
        firstval.innerText = "";
        secondval.innerText = "0";
        operatorval = "";
        firstText = "";
        secondText = "";
        finalans = "";
        valuesecond = "";
        updateval = false;      
    });
}
resetbtn(clear);

decrease.addEventListener("click",()=>{
    let dissapearvalue =secondval.innerText;
    dissapearvalue = dissapearvalue.slice(0,-1);
    secondval.innerText = dissapearvalue;
    if(secondval.innerText === ""){
        secondval.innerText = firstval.innerText;
        firstval.innerText = "";
        if(secondval.innerText ===""){
            secondval.innerText = "0";
        }
    }
    updateval = false;  
    console.log("clicked");
});