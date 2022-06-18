//Recursion need 3 steps - base case, the operations, and the recursion

function sumArrayOfNums(arr, index =0, sum = 0) {
    //base case
    if (arr.length === index) {
        return sum
    }

    //operations
    sum = sum + arr(index)

    //recursive case
    return sumArrayOfNums(arr, index + 1, sum)


}

const arr = [10,20,100]
console.log(sumArrayOfNums(arr, 0, 0))

//Recursion likely less efficient
//Can consider 




//Bubble Sort
