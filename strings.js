/**
 * String utilities for learning purposes
 * @file 'string.js'
 * @author '<Roy Haynes>'
 */

/**
 * Reverse a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
export function reverse(str){
    if(typeof str!== 'string'){
        throw new Error('Input must be a string');
    }
    return str.split('').reverse().join('');
}

/**
 * Capitalize the first letter of a string
 * @param {string} str - String to capitalize
 * @returns {string} Capitalized string
 */
export function capitalize(str){
    if(typeof str !== 'string'){
        throw new Error('Input must be a string');
    }
    if(str.length === 0) return '';
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

/**
* Count vowels in a string
* @param {string} str - String to count vowels in
* @returns {number} Number of vowels
*/
export function countVowels(str){
    if(typeof str !== 'string'){
        throw new Error('Input must be a string');
    }
    const vowels= 'aeiouAEIOU';
    let count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}

/**
 *Check if a string is a palindrome
 * @param str - String to check
 * @returns {boolean} True if palindrome
 */
export function isPalindrome(str){
    if(typeof str !== 'string'){
        throw new Error('Input must be a string');
    }
    const cleaned =str.replace(/\s/g, '').toLowerCase();
    const reversed= cleaned.split('').reverse().join('');
    return cleaned === reversed;
}

