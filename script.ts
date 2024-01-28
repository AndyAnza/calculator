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
let currentInputEle = document.getElementById("display") as HTMLInputElement;
let currentInput = currentInputEle.value;
let previousInput;
const currentOperation = 0;

let btnOne = document.getElementById("one-btn") as HTMLButtonElement;
let btnTwo = document.getElementById("two-btn") as HTMLButtonElement;
let btnThree = document.getElementById("three-btn") as HTMLButtonElement;
let btnFour = document.getElementById("four-btn") as HTMLButtonElement;
let btnFive = document.getElementById("five-btn") as HTMLButtonElement;
let btnSix = document.getElementById("six-btn") as HTMLButtonElement;
let btnSeven = document.getElementById("seven-btn") as HTMLButtonElement;
let btnEight = document.getElementById("eight-btn") as HTMLButtonElement;
let btnNine = document.getElementById("nine-btn") as HTMLButtonElement;
let btnZero = document.getElementById("zero-btn") as HTMLButtonElement;
let btnClear = document.getElementById("c-btn") as HTMLButtonElement;

let btnEqual = document.getElementById("equal-btn") as HTMLButtonElement;
let btnAdd = document.getElementById("addition-btn") as HTMLButtonElement;
let btnSub = document.getElementById("subtraction-btn") as HTMLButtonElement;
let btnMult = document.getElementById(
  "multiplication-btn"
) as HTMLButtonElement;
let btnDiv = document.getElementById("division-btn") as HTMLButtonElement;
let btnPerc = document.getElementById("percentage-btn") as HTMLButtonElement;
let btnPoint = document.getElementById("point-btn") as HTMLButtonElement;

///////////////////
const continuosInput = function () {
  btnOne.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "1";
  });
  btnTwo.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "2";
  });
  btnThree.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "3";
  });
  btnFour.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "4";
  });
  btnFive.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "5";
  });
  btnSix.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "6";
  });
  btnSeven.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "7";
  });
  btnEight.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "8";
  });
  btnNine.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "9";
  });
  btnZero.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "0";
  });
  btnAdd.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "+";
  });
  btnSub.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "-";
  });
  btnMult.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "*";
  });
  btnDiv.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "/";
  });
  btnPerc.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + "%";
  });
  btnPoint.addEventListener("click", (e) => {
    currentInputEle.value = currentInputEle.value + ".";
  });
};
continuosInput();

//////////////////////////

function add(num1: number, num2: number): number {
  const sum = num1 + num2;
  return sum;
}

function operation() {
  const previousInput = parseFloat(currentInputEle.value);
  console.log("previousInput:", previousInput, typeof previousInput);

  clearCalculator();

  let currentInput = parseFloat(currentInputEle.value);
  console.log("currentInput", currentInput, typeof currentInput);

  if (!isNaN(previousInput) && !isNaN(currentInput)) {
    const sum = add(previousInput, currentInput);
    console.log("sum:", sum);

    // currentInputEle.value = sum.toString(); // Update the input with the result
    return sum;
  } else {
    console.error("Invalid input. Please enter valid numbers.");
  }
}
btnAdd.addEventListener("click", operation);

////////////////////////

function total() {
  console.log(operation());
}
btnEqual.addEventListener("click", total);

//////////////////////CLEAR✅

const clearCalculator = function () {
  currentInputEle.value = "";
};
btnClear.addEventListener("click", clearCalculator);

//////////////////////
