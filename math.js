/**
 * Math utilities for learning purposes
 * @file 'math.js'
 * @author '<Roy Haynes>'
 */


/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
 export function add (a,b){
     if((typeof a !=="number")||(typeof b!=="number")){
         throw new Error("Add numbers only")
     }
     return a+b;
}

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
export function subtract (a,b){
    return a-b;
}

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
export function multiply (a,b){
    return a*b;
}

/**
 * Divide two numbers
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient
 * @throws {Error} If b is zero
 */
export function divide (a,b){
    if(b===0){
        throw new Error("Cannot divide by zero")
    }
    return a/b;
}

/**
 * Calculate power
 * @param {number} base - Base number
 * @param {number} exponent - Exponent
 * @returns {number} Base raised to exponent
 */
export function power(base, exponent){
    return Math.pow(base, exponent);
}

/**
 * Calculate square root
 * @param {number} n - Number to find square root of
 * @returns {number} Square root
 * @throws {Error} If n is negative
 */
export function sqrt(n){
    if(n < 0) {
        throw new Error("Cannot calculate square root of negative number");
    }
    return Math.sqrt(n);
}

/**
 * Calculate factorial
 * @param {number} n - Number to calculate factorial of
 * @returns {number}  Factorial of n
 * @throws {Error} If n is negative
 */
export function factorial(n){
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

