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

function power(base, exponent){
    return Math.pow(base, exponent);
}

function sqrt(n){
    if(n < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(n);
}

function factorial(n){
    if (n < 0){
        throw new Error("Factorial not defined for negative numbers");
    }
    if(n===0|| n===1) return 1;
    let result= 1;
    for (let i=2;i<=n;i++){
        result *=i;
    }
    return result;
}

// Test the functions with console.log
console.log("Testing Math Functions");
console.log('add(5,3)=',add(5,3)); //should be 8
console.log('Subtract(10,4)=',subtract(10,4));//should be 6
console.log('multiply(3,7)=',multiply(3,7)); //should be 21
console.log('divide(20,4)=',divide(20,4)); //should be 5

// Add tests for new functions
console.log('power(2,8)=',power(2,8));// should be 256
console.log('sqrt(16)=',sqrt(16));// should be 4
console.log('factorial(5)=',factorial(5));// should be 120