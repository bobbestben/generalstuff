const operateNums = ( number, callbackFunc, ) => {
    return callbackFunc(number)
    //newNumber = callbackFunc(number)
    //console.log(newNumber)
}

const multByTwo = (number) => {
    return number*2
}

const squareNum = (number) => {
    return number**2
}

console.log(operateNums(4,squareNum))



//Q3. isPanagram
// Make a function isPanagram that takes 2 arguments. Assume the 2 arguments are an array of string and a function (a callback)
// make it so that when isPanagram is invoked, the callback "operates" on the string
// Given the following array, use isPanagram to check whether each letter (a-z) - case insensitive - is used at least once

// function isPanagram(arr, cbFn) {
//     //Combining my string
//     let combinedString = ""
//     for (let i=0; i<arr.length; i++) {
//         combinedString += arr[i].toUpperCase()
//     }

//     //Sorting my array
//     let sortedString = [...combinedString]
//     sortedString = sortedString.sort()
//     console.log(sortedString)


//     return cbFn(sortedString)
// }
// //default return value is undefined, hence is false
// //no need set default false
// function cbFn(str) {
//     for (let i=1; i<str.length; i++) {
//         if (str[i] === str[i-1]) {
//             return true
//         }
//     }
// }

// const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// //const panagram = ['a','b','c']
// console.log(isPanagram(panagram, cbFn) === true); // Should be true


function isPanagram(arr, cbFn) {
    //Combining my string
    let combinedString = ""
    for (let i=0; i<arr.length; i++) {
        combinedString += arr[i].toUpperCase()
    }
    return cbFn(combinedString)
}
//default return value is undefined, hence is false
//no need set default false
function cbFn(str) {
    alphabets = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

    for (i=0; i<alphabets.length; i++) {
        if (str.indexOf(alphabets[i]) < 0) {
            return false
        }
    }
    return true
    /*for (let i=0; i<panagramString.length; i++) { //for each letter in alphabet
        for (let j=0; j<str.length) { //each alphabet loop through the string
            if (panagramString[i] === str[j] ) {

            }
        }

    } */
}
//if the alphanet is not in the string, return false

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']
//const panagram = ['a','b','c']
console.log(isPanagram(panagram, cbFn) === true); // Should be true