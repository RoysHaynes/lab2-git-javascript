/**
 * Main entry point for lab 2
 * @file 'index.js'
 * @author '<Roy Haynes>'
 */

// Import math functions
import * as math from './math.js';

console.log("====Testing Math Function===");
console.log('add(5,3)=',math.add(5,3)); //should be 8
console.log('Subtract(10,4)=',math.subtract(10,4));//should be 6
console.log('multiply(3,7)=',math.multiply(3,7)); //should be 21
console.log('divide(20,4)=',math.divide(20,4)); //should be 5
console.log('power(2,8)=',math.power(2,8));// should be 256
console.log('sqrt(16)=',math.sqrt(16));// should be 4
console.log('factorial(5)=',math.factorial(5));// should be 120