//Local Storage - can only store simple things like strings, not arrays

const someItem = localStorage.getItem('todoList')

console.log(JSON.parse(someItem))

const complexStructure = [
    {name: "Jonathan", age: "18"},
    {name: "Eugene", age: "18"},
]

localStorage.setItem('todolist', JSON.stringify(complexStructure))
//jasonParse convert string into java script data structure




//Calling the - "Add button", "Things to do" and "Things done" columns
const addBtn = document.querySelector('#todo-form button')
const thingsTodoContainer = document.querySelector('#list-things-todo ul')
const doneContainer = document.querySelector('#list-done-todo ul')


//Onclick function to add tasks
addBtn.onclick = function() {
    const input = document.querySelector('#new-todo')
    if (input.value === "") {
        return
    }

    //create li within ul, assign "pending" class
    const listItem = document.createElement('li')
    listItem.setAttribute('class','pending')

    //create p within li, innerText change to the user input
    const listItemP = document.createElement('p')
    listItemP.innerText = input.value

    //create button within li
    const completedBtn = document.createElement('button')
    completedBtn.setAttribute('type','button')
    completedBtn.innerText = "Completed"

    //append p to li
    //append btn to li
    //apepend li (contains p and btn) to ul
    listItem.append(listItemP)
    listItem.append(completedBtn)
    thingsTodoContainer.append(listItem)

    //clearing text field after clicking add
    input.value = ""

}

//Onclick function to Complete task, move to Things Done
    // Note that task is not present initially
    // So we give the function to its parent, then the child will inherit the function
    // And we target only the "Completed Button"

const listThingsTodo = document.querySelector('#list-things-todo')
listThingsTodo.onclick = function(event) {
    //upon event, target the HTML element that triggered event
    //event.target.tagName or .nodeName === 'P' or 'DIV'
    //event.target.parentNode or parentElement
    //event.target.childNodes

    //we target the button, change class, innerText
    //because class is changed, the styling changes
    //button from "Completed" we change to "Remove"
    if (event.target.tagName === 'BUTTON') {
        const itemToMove = event.target.parentNode
        itemToMove.setAttribute('class','done')
        event.target.innerText = "Remove"
        
        doneContainer.append(itemToMove)

    }

}

//On click function to remove completed task from Things done
    // same thing, need to target parent container, as initially this task
    // does not exist
const listDone = document.querySelector('#list-done-todo')
listDone.onclick = function(event) {
    if (event.target.nodeName ==='BUTTON') {

        const itemToRemove = event.target.parentElement
        itemToRemove.remove()
    }
}

//Now lets play with API
//Generate a random quote for my Todo List
const quoteDiv = document.querySelector('#quote')

axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(jsonData => {
        quoteDiv.innerHTML = `${jsonData.data.quotes[0].text} ~ ${jsonData.data.quotes[0].author}`
    })
    .catch(err => {
        console.log(err)
    })






//Notes on promise
// returns a promise
// non-blocking operations
//fetch the response
//then do something -- if there is error, use .catch to do something to that error
//return a json converted response
//then pick the quote out from the array

fetch('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(response => {
        return response.json()
    })
    .then(jsonData => {
        console.log(jsonData)
        quoteDiv2.innerHTML = jsonData.quotes[0].text
    })
    .catch(err => {
        console.log(err)
    })


    //OR use
    //axios is same as fetch, abit more configuration (preferred method)
axios.get('https://goquotes-api.herokuapp.com/api/v1/random?count=1')
    .then(jsonData => {
        quoteDiv2.innerHTML = jsonData.data.quotes[0].text

    })
    .catch(err => {
        console.log(err)
    })