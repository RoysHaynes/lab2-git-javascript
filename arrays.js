/**
 * Array utilities for Lab 2
 * @file 'arrays.js'
 * @author '<Roy Haynes>'
 */

/**
 * Sum all elements in array
 * @
 */
export function sum(arr){
    if (!Array.isArray(arr)){
        throw new Error('Input must be an Array');
    }
    return arr.reduce((acc, num) => acc + num, 0);
}