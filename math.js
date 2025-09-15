// Math Utility functions

function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    if(b===0){
        throw new Error("Cannot divide by zero")
    }
    return a/b;
}

// Test the functions with console.log
console.log("Testing Math Functions");
console.log('add(5,3)=',add(5,3)); //should be 8
console.log('Subtract(10,4)=',subtract(10,4));//should be 6
console.log('multiply(3,7)=',multiply(3,7)); //should be 21
console.log('divide(20,4)=',divide(20,4)); //should be 5