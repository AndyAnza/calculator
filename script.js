/*
INSTRUCTIONS

The logic of a JavaScript calculator typically involves handling user input, performing mathematical operations, and updating the display accordingly. Here's a general outline of the logic:

1. **Initialize Variables:** Set up variables to store the current input, the previous input, and the current operation.

2. **Handle User Input:** Capture user input when they press buttons on the calculator. This input may include digits (0-9), decimal points, and operators (+, -, *, /).

3. **Update Display:** Update the display to show the current input. This allows users to see the numbers and operations they are entering.

4. **Perform Operations:** When an operator is pressed, perform the corresponding mathematical operation on the current and previous inputs. Update the current input with the result.

5. **Handle Special Cases:** Handle special cases such as clearing the input, handling decimal points, and managing negative numbers.

6. **Display Result:** After performing an operation, update the display to show the result.

7. **Continuous Input:** Allow users to continue entering numbers and operators, chaining multiple operations together.

8. **Error Handling:** Implement error handling to handle scenarios like division by zero or other invalid operations.

9. **Memory Functions (Optional):** Implement memory functions like memory recall, memory store, etc., if needed.

10. **Keyboard Support (Optional):** Optionally, provide support for keyboard input in addition to button clicks.

The actual implementation details may vary based on the specific requirements of the calculator and the design choices you make.
*/
let currentInputEle = document.getElementById("display");
// const currentOperation = 0;
let btnOne = document.getElementById("one-btn");
let btnTwo = document.getElementById("two-btn");
let btnThree = document.getElementById("three-btn");
let btnFour = document.getElementById("four-btn");
let btnFive = document.getElementById("five-btn");
let btnSix = document.getElementById("six-btn");
let btnSeven = document.getElementById("seven-btn");
let btnEight = document.getElementById("eight-btn");
let btnNine = document.getElementById("nine-btn");
let btnZero = document.getElementById("zero-btn");
let btnClear = document.getElementById("c-btn");

// const previousInput = function () {
//   const input = document.getElementById("display").value;
//   return input;
// };
// addEventListener("keypress", (e) => {
//   console.log(e);
//   if (e.key === "Enter") {
//     previousInput();
//   } else {
//     console.log("press enter");
//   }
// });

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
};
continuosInput();

const add = function (num1, num2) {
  return num1 + num2;
};

const perfomOperations = function (prevInp, currentInp) {};

const clearCalculator = function () {
  currentInputEle.value = "";
  console.log(`C btn clicked`);
};
btnClear.addEventListener("click", clearCalculator);
