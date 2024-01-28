var display = document.getElementById("display");
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
///////////////////////
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
//////////////////////
var clearCalculator = function () {
    display.value = "";
};
btnClear.addEventListener("click", clearCalculator);
//////////////////////
var total = function () {
    var total = eval(display.value);
    //   console.log(total);
    display.value = total;
};
btnEqual.addEventListener("click", total);
