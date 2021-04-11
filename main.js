let activeNumber = '';
let activeOperator = '';
let storedNumber = '';

function digitIsPressed(digit) {
    activeNumber += digit;
    updateScreen(); // calls function that updates the screen
    console.log('digitIsPressed, digit: ', digit);
}

function operatorisPressed(operator) {
    activeOperator = operator; // stores the operator
    console.log('operatorisPressed, operator: ', operator);
    console.log('operatorisPressed, act: ', activeNumber);
    console.log('operatorisPressed, stor: ', storedNumber);

    // doMath(); // calls function that does the math
    storedNumber = activeNumber; // takes the active number and palces it in the stored number
    updateScreen(); // calls function that updates the screen
    activeNumber = ''; // clears the first number

    console.log('operatorisPressed, act: ', activeNumber);
    console.log('operatorisPressed, stor: ', storedNumber);
}

function equalsIsPressed() {
    // storedNumber = activeNumber;
    console.log('equalsIsPressed, act: ', activeNumber);
    console.log('equalsIsPressed, stor: ', storedNumber);
    doMath();
    updateScreen();
}

function clearScreen() {
    activeNumber = '';
    activeOperator = '';
    storedNumber = '';
    updateScreen();
    document.getElementById('screen').innerHTML = '0';
    
}

function updateScreen() {
    console.log('updScr: act.len: ', activeNumber.toString().length)
    // prevent the numbers overflow the screen
    if (activeNumber.length <= 15) {
        document.getElementById('screen').innerHTML = activeNumber;
    } else if (activeNumber.toString().length <= 15) {
        document.getElementById('screen').innerHTML = activeNumber;
    } else {
        document.getElementById('screen').innerHTML = 'Stop it!';
    }
    console.log('updScr: act.len: ', activeNumber.toString().length)
}

function doMath() {
    console.log('doMath, act, st, actOp: ', activeNumber, storedNumber, activeOperator);
    console.log('doMath, act.len: ', activeNumber.toString().length);
    if (activeNumber && storedNumber && activeOperator) {
        switch (activeOperator) {
            case '+':
                activeNumber = parseFloat(storedNumber) + parseFloat(activeNumber);
                break;
            case '-':
                activeNumber = parseFloat(storedNumber) - parseFloat(activeNumber);
                break;
            case 'x':
                activeNumber = parseFloat(storedNumber) * parseFloat(activeNumber);
                break;
            case '/':
                activeNumber = parseFloat(storedNumber) / parseFloat(activeNumber);
                break;
        }
    }
    console.log('doMath, act, st, actOp: ', activeNumber, storedNumber, activeOperator);
    console.log('doMath, act.len: ', activeNumber.toString().length);

}