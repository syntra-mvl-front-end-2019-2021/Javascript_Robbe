// Return the largest element of array (all elements will be numbers), e.g. [1,2,3] → 3
let array = [1,2,3];

function getLargestItemInArray(array) {
    let highest = array[0];

    for(i = 0, i <= array.length; i++){
        if( i >= highest){
            highest = i;
        }
    }

    return highest;
}

// Reverse order of array, e.g. [1,2,3] → [3,2,1]
let secondArray = [1,2,3];

function reverseArray(secondArray) {
    let reversed = secondArray.reverse();
    
    return reversed;
}

// Make a sum of all elements, e.g. [1,2,3] → 6
let thirdArray = [1,3,2];

function arraySum(thirdArray) {
    let sum = 0;
    for ( let i = 0; i < thirdArray.length; i++){
        sum = sum + thirdArray[i];
    }

    return sum;
}

// Make a string of the first letter of each element of array, e.g. ['Dog', 'cat', 'snake'] → 'Dcs'
let forthArray = ['Dog', 'Cat', 'Snake'];

function stringOfFirstLetters(forthArray) {
    let x = forthArray.substring(0,1);
    for ( let i = 1; i < forthArray.length; i++){
        x += forthArray.substring(0,1);
    }

    return x
}

// Combines two arrays by alternatingly taking elements, e.g. ['a','b','c'], [1,2,3] → ['a',1,'b',2,'c',3].
let arrayOne = ['a','b','c'];
let arrayTwo = [1,2,3];

function combineArrays(arrayOne, arrayTwo) {
    let newArray=[];
    let l = Math.max(arrayOne.length, arrayTwo.length);
    for (let i = 0; i < l; i++){
        if (i < arrayOne.length){
            newArray.push(arrayOne[i])
        }
        elif(i < arrayTwo.length){
            newArray.push(arrayTwo[i])
        }
    }

    return newArray
}

// Takes a number and returns a list of its digits. e.g. 2342 → [2,3,4,2]
let aNumber = 2342
function numberToDigitArray(aNumber) {
    let anArray = new Array();
    anArray = aNumber.split()
    for (i = 0; i < aNumber.length; i++){
        anArray.push(anArray[i])
    }
}

// Translates a text to Pig Latin.
// English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.
// e.g. “The quick brown fox” → “Hetay uickqay rownbay oxfay”.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// let aString = 'The quick brown fox';
// console.log(aString);
// console.log(aString.split(' '));

function translateToPigLating(aString) {}

// Converts English text to Morse code.
// https://en.wikipedia.org/wiki/Morse_code#/media/File:International_Morse_Code.svg
// e.g. 'Hello World' → '****|*|*_**|*_**|___| *__|___|*_*|*_**|_**|'
// if (iets = 'h') {
// iets doen
// } else if (iets = 'e') {

// }...

// switch (iets) {
//     case 'H':
//     case 'h':
//         console.log('h');
//         break;
//     case 'e':
//         console.log('e');
//         break;
//     default:
//         console.log('kweetnie');
//         break;
// }

function translateToMorse(aString) {}

// Write a more advanced version of the previous function
// Where the unnecessary | is omitted
// e.g. 'Hello World' → '****|*|*_**|*_**|___ *__|___|*_*|*_**|_**'\
function translateToMorseFancy(aString) {}
