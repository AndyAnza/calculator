let display = document.getElementById("display") as HTMLInputElement;

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

///////////////////////
const continuosInput = function () {
  btnOne.addEventListener("click", (e) => {
    display.value = display.value + "1";
  });
  btnTwo.addEventListener("click", (e) => {
    display.value = display.value + "2";
  });
  btnThree.addEventListener("click", (e) => {
    display.value = display.value + "3";
  });
  btnFour.addEventListener("click", (e) => {
    display.value = display.value + "4";
  });
  btnFive.addEventListener("click", (e) => {
    display.value = display.value + "5";
  });
  btnSix.addEventListener("click", (e) => {
    display.value = display.value + "6";
  });
  btnSeven.addEventListener("click", (e) => {
    display.value = display.value + "7";
  });
  btnEight.addEventListener("click", (e) => {
    display.value = display.value + "8";
  });
  btnNine.addEventListener("click", (e) => {
    display.value = display.value + "9";
  });
  btnZero.addEventListener("click", (e) => {
    display.value = display.value + "0";
  });
  btnAdd.addEventListener("click", (e) => {
    display.value = display.value + "+";
  });
  btnSub.addEventListener("click", (e) => {
    display.value = display.value + "-";
  });
  btnMult.addEventListener("click", (e) => {
    display.value = display.value + "*";
  });
  btnDiv.addEventListener("click", (e) => {
    display.value = display.value + "/";
  });
  btnPerc.addEventListener("click", (e) => {
    display.value = display.value + "%";
  });
  btnPoint.addEventListener("click", (e) => {
    display.value = display.value + ".";
  });
};
continuosInput();

//////////////////////

const clearCalculator = function () {
  display.value = "";
};
btnClear.addEventListener("click", clearCalculator);

//////////////////////

const total = function () {
  const total: string = eval(display.value);
  //   console.log(total);
  display.value = total;
};

btnEqual.addEventListener("click", total);
