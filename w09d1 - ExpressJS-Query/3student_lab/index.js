//Things to do to start project
//initialize new project folder: npm init
//Then install ExpressJS locally: npm install --save express
//Copy the boilerplate at https://expressjs.com/en/starter/hello-world.html
//To start server use: node index.js OR nodemon index.js
//To stop server: ctrl c

//Express_Calculator
//This lab is express_calculator
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Worldasdas!')
})

//Make a route in server.js that responds to the URI calc. 
//Give the route two params, :num1 and :num2.
app.get('/calc/:nums1/:nums2', (req, res) => {
    const nums_1 = parseInt(req.params.nums1, 10)
    const nums_2 = parseInt(req.params.nums2, 10)
    console.log('nums_1',nums_1)
    console.log('nums_2',nums_2)

    // validation
    if (isNaN(nums_1) || isNaN(nums_2)) {
        res.send('values must be numeric')
        return
    }

    sum = nums_1 + nums_2

//The sum will be a number. 
//If you try to send a number to the browser it will be interpreted as an error code.
//eg. res.send(sum)
//The number must be coerced into a string when you send it back. 
//The coercion could be as simple as:
    res.send("the sum is " + sum)
    // OR
    // res.send(`${sum}`)
})


//Req.query - creating queries for different arithmetic operation
//Let's expand our calculator so that we can get it to do more than just addition.
//We could make a route for each arithmetic expression (addition, multiplication, etc.), 
//or code in another param, but there is another way using req.query. Let's explore:
//url now is http://localhost:3000/someroute? ---- get an empty object
//but if you do this http://localhost:3000/someroute?operation=add --- object { operation: 'add' }
app.get('/someroute', (req, res) => {
console.log('req.query: ', req.query);
res.send('someroute accessed');
});

//Making new route for URL calcquery with :num1 and :num2 params
//url will be something like this: http://localhost:3000/calcquery/2/4?operation=add
app.get('/calcquery/:nums1/:nums2', (req, res) => {
    const nums_1 = parseInt(req.params.nums1, 10)
    const nums_2 = parseInt(req.params.nums2, 10)

    
    console.log(nums_1)
    console.log(nums_2)
    
    console.log('req.query.operation', req.query.operation)

    //Addition
	if ( req.query.operation === "add" ) {
        sum = nums_1 + nums_2
        res.send('The sum is ' + sum)
        return
    }

    //Subtraction
    if ( req.query.operation === "subtract" ) {
        result = nums_1 - nums_2
        res.send('The subtraction is ' + result)
        return
    }

    //Division
    if ( req.query.operation === "divide" ) {
        result = nums_1/nums_2
        res.send('The division is ' + result)
        return
    }

    //Multiply
    if ( req.query.operation === "multiply" ) {
        result = nums_1*nums_2
        res.send('The multiplication is ' + result)
        return
    }

    res.send("url works")

});

//Below is jonathan's method
// const validOperations = {
//     add: 'add',
//     sub: 'sub',
//     mul: 'mul',
//     div: 'div',
// }


// app.get('/calcquery/:num1/:num2', (req, res) => {
//     const num1 = parseInt(req.params.num1)
//     const num2 = parseInt(req.params.num2)
//     const operation = req.query.operation

//     // validate is num
//     if (isNaN(num1) || isNaN(num2)) {
//         res.send('values must be numeric')
//         return
//     }

//     // validate operation query param exists
//     if (!operation) {
//         res.send('operation query param is required')
//         return
//     }

//     validate operation is acceptable
//     if (!validOperations[operation]) {
//         res.send('operation value is invalid')
//         return
//     }

//     let result = null

//     switch(operation) {
//         case 'add':
//             result = num1 + num2
//             break
//         case 'sub':
//             result = num1 - num2
//             break
//         case 'mul':
//             result = num1 * num2
//             break
//         default:
//             // division
//             if (num2 === 0) {
//                 res.send('num2 cannot be 0 when doing division')
//                 return
//             }
//             result = num1 / num2
//     }

//     res.send(`Result is ${result}`)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



//For the homework
//When running command on terminal
//node helper.js state=SC - commnands are in array
//node = index 0, helper.js = index 1, state=SC = index 2
// access the argument
const state = process.argv[2]

// test it
console.log(state) 

// expected output
// state=SC