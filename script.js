let answer = null
let txt = ""
let display = txt
let numberOne = " "
let numberTwo = " "
let operation = null
const buttonOne = document.getElementById("one");
const buttonTwo = document.getElementById("two");
const buttonThree = document.getElementById("three");
const buttonFour = document.getElementById("four");
const buttonFive = document.getElementById("five");
const buttonSix = document.getElementById("six");
const buttonSeven = document.getElementById("seven");
const buttonEight = document.getElementById("eight");
const buttonNine = document.getElementById("nine");
const buttonZero = document.getElementById("zero");
const buttonC = document.getElementById("c");
const buttonDel = document.getElementById("del")
const buttonAdd = document.getElementById("add");
const buttonSubtract = document.getElementById("subtract");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals")
function buttonOneClick() {
    txt = txt += 1
    display = txt 
    document.getElementById("output").innerHTML = display
        }
buttonOne.addEventListener('click', buttonOneClick);

function buttonTwoClick() {
    txt = txt += 2
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonTwo.addEventListener('click', buttonTwoClick);
 
function buttonThreeClick() {
    txt = txt += 3
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonThree.addEventListener('click', buttonThreeClick)

function buttonFourClick() {
    txt = txt += 4
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonFour.addEventListener('click', buttonFourClick)

function buttonFiveClick() {
    txt = txt += 5
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonFive.addEventListener('click', buttonFiveClick)

function buttonSixClick() {
    txt = txt += 6
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonSix.addEventListener('click', buttonSixClick)

function buttonSevenClick() {
    txt = txt += 7
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonSeven.addEventListener('click', buttonSevenClick)

function buttonEightClick() {
    txt = txt += 8
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonEight.addEventListener('click', buttonEightClick)

function buttonNineClick() {
    txt = txt += 9
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonNine.addEventListener('click', buttonNineClick)

function buttonZeroclick() {
    txt = txt += 0
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonZero.addEventListener('click', buttonZeroclick)

function buttonAddClick() {
operation = "+"
numberOne = Number(display)
txt = " "
display = txt
document.getElementById("output").innerHTML = display
}
buttonAdd.addEventListener('click', buttonAddClick)

function buttonSubtractClick() {
    operation = "-"
    numberOne = Number(display)
    txt = " "
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonSubtract.addEventListener('click', buttonSubtractClick)

function buttonMultiplyClick() {
    operation = "X"
    numberOne = Number(display)
    txt = " "
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonMultiply.addEventListener('click', buttonMultiplyClick)

function buttonDivideClick() {
    operation = "/"
    numberOne = Number(display)
    txt = " "
    display = txt
    document.getElementById("output").innerHTML = display
}
buttonDivide.addEventListener('click', buttonDivideClick)

function buttonEqualsClick() {
    numberTwo = Number(display)
    if (operation==="+") {
        answer = numberOne += numberTwo
    }
    if (operation==="-") {
        answer = numberOne -= numberTwo
    }
    if (operation==="X") {
        answer = numberOne *= numberTwo
    }
    if (operation==="/") {
        answer = numberOne /= numberTwo
    }
    
    txt = answer.toString(); 
    display = txt
    document.getElementById("output").innerHTML = display
    operation = null
    numberOne = null
    numberTwo = null
    answer = null
}
buttonEquals.addEventListener('click', buttonEqualsClick)

function buttonDelClick() {
   txt = txt.slice(0, -1); 
   display = txt
   document.getElementById("output").innerHTML = display
}
buttonDel.addEventListener('click', buttonDelClick)

function buttonCClick() {
    answer = null
    txt = " "
    display = txt
    numberOne = " "
    numberTwo = " "
    operation = null
    document.getElementById("output").innerHTML = display
}
buttonC.addEventListener('click', buttonCClick)