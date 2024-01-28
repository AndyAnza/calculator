/*
INSTRUCTIONS

The logic of a JavaScript calculator typically involves handling user input, performing mathematical operations, and updating the display accordingly. Here's a general outline of the logic:

1. **Initialize Variables:** Set up variables to store the current input, the previous input, and the current operation.✅

2. **Handle User Input:** Capture user input when they press buttons on the calculator. This input may include digits (0-9), decimal points, and operators (+, -, *, /). ✅

3. **Update Display:** Update the display to show the current input. This allows users to see the numbers and operations they are entering. ✅

4. **Perform Operations:** When an operator is pressed, perform the corresponding mathematical operation on the current and previous inputs. Update the current input with the result. TODO

5. **Handle Special Cases:** Handle special cases such as clearing the input ✅, handling decimal points TODO, and managing negative numbers TODO.

6. **Display Result:** After performing an operation, update the display to show the result. TODO

7. **Continuous Input:** Allow users to continue entering numbers and operators, chaining multiple operations together. TODO

8. **Error Handling:** Implement error handling to handle scenarios like division by zero or other invalid operations. TODO

9. **Keyboard Support (Optional):** Optionally, provide support for keyboard input in addition to button clicks. TODO

The actual implementation details may vary based on the specific requirements of the calculator and the design choices you make.
*/
var display = document.getElementById("display");
var currentInput = "";
var previousInput = "";
var currentOperation;
var btnOne = document.getElementById("one-btn");
var btnTwo = document.getElementById("two-btn");
var btnThree = document.getElementById("three-btn");
var btnFour = document.getElementById("four-btn");
var btnFive = document.getElementById("five-btn");
var btnSix = document.getElementById("six-btn");
var btnSeven = document.getElementById("seven-btn");
var btnEight = document.getElementById("eight-btn");
var btnNine = document.getElementById("nine-btn");
var btnZero = document.getElementById("zero-btn");
var btnClear = document.getElementById("c-btn");
var btnEqual = document.getElementById("equal-btn");
var btnAdd = document.getElementById("addition-btn");
var btnSub = document.getElementById("subtraction-btn");
var btnMult = document.getElementById("multiplication-btn");
var btnDiv = document.getElementById("division-btn");
var btnPerc = document.getElementById("percentage-btn");
var btnPoint = document.getElementById("point-btn");
///////////////////
var continuosInput = function () {
    btnOne.addEventListener("click", function (e) {
        display.value = display.value + "1";
    });
    btnTwo.addEventListener("click", function (e) {
        display.value = display.value + "2";
    });
    btnThree.addEventListener("click", function (e) {
        display.value = display.value + "3";
    });
    btnFour.addEventListener("click", function (e) {
        display.value = display.value + "4";
    });
    btnFive.addEventListener("click", function (e) {
        display.value = display.value + "5";
    });
    btnSix.addEventListener("click", function (e) {
        display.value = display.value + "6";
    });
    btnSeven.addEventListener("click", function (e) {
        display.value = display.value + "7";
    });
    btnEight.addEventListener("click", function (e) {
        display.value = display.value + "8";
    });
    btnNine.addEventListener("click", function (e) {
        display.value = display.value + "9";
    });
    btnZero.addEventListener("click", function (e) {
        display.value = display.value + "0";
    });
    btnAdd.addEventListener("click", function (e) {
        display.value = display.value + "+";
    });
    btnSub.addEventListener("click", function (e) {
        display.value = display.value + "-";
    });
    btnMult.addEventListener("click", function (e) {
        display.value = display.value + "*";
    });
    btnDiv.addEventListener("click", function (e) {
        display.value = display.value + "/";
    });
    btnPerc.addEventListener("click", function (e) {
        display.value = display.value + "%";
    });
    btnPoint.addEventListener("click", function (e) {
        display.value = display.value + ".";
    });
};
continuosInput();
//////////////////////////
// function add(num1: number, num2: number): number {
//   const sum = num1 + num2;
//   return sum;
// }
// function operation() {
//   const previousInput = parseFloat(display.value);
//   console.log("previousInput:", previousInput, typeof previousInput);
//   clearCalculator();
//   let currentInput = parseFloat(display.value);
//   console.log("currentInput", currentInput, typeof currentInput);
//   if (!isNaN(previousInput) && !isNaN(currentInput)) {
//     const sum = add(previousInput, currentInput);
//     console.log("sum:", sum);
//     // display.value = sum.toString(); // Update the input with the result
//     return sum;
//   } else {
//     console.error("Invalid input. Please enter valid numbers.");
//   }
// }
// btnAdd.addEventListener("click", operation);
////////////////////////
// function total() {
//   console.log(operation());
// }
// btnEqual.addEventListener("click", total);
//////////////////////CLEAR✅
var clearCalculator = function () {
    display.value = "";
};
btnClear.addEventListener("click", clearCalculator);
//////////////////////
// const calculations = {
//   "/": (a, b) => a / b,
//   "*": (a, b) => a * b,
//   "+": (a, b) => a + b,
//   "-": (a, b) => a - b,
//   "=": (a, b) => (a = b),
// };
var total = function () {
    var total = eval(display.value);
    console.log(total);
    display.value = total;
};
btnEqual.addEventListener("click", total);
