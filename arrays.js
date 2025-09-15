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

/**
 * Calculate average of array
 * @param {number[]} arr - array of numbers
 * @returns {number} Average value
 */
export function average(arr){
    if (!Array.isArray(arr) || arr.length === 0){
        throw new Error('Input must be a non-empty Array');
    }
    return sum(arr)/arr.length;
}