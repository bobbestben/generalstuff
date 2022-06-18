//Practice Event Listener on Bakery - contact page

//onclick
let h1Element = document.querySelector('.content-section h1')

console.log(h1Element)

h1Element.onclick = () => {
    alert('onclick alert')
}

let contactForm = document.querySelector('#contact-form')

//onsubmit - default is to submit without validation
contactForm.onsubmit = (event) => {
    //event.preventDefault to prevent submit, allow your form to go through any checks etc.
    event.preventDefault()

    //clear all the error messages
    let errMsgDiv = document.querySelector('#contact-form .error-msgs')
    errMsgDiv.innerHTML = ''
    //clear the success msg
    let successMsgElement = document.querySelector('.success-msg')
    successMsgElement.innerText = ''

    //do validation
    let errMsgs = []
    let nameFieldElement = document.querySelector('#fullname')
    //if name field is empty
    if (nameFieldElement.value === "") {
        errMsgs.push("Name must not be empty")
    }
    console.log(nameFieldElement.value)

    //validate the email field
    //if querySelect id email - check if does not contain @gmail.com or @yahoo.com etc.
    let emailFieldElement = document.querySelector('#email')
    //JS code to validate an email id - regex / regular expression
    if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailFieldElement.value)) {
        errMsgs.push("Invalid email")
    }

    //validate the message field - at least how many word
    // check spaces?
    //check character length message.value.length
    let messageFieldElement = document.querySelector('#message')
    let messageWordsArr = messageFieldElement.value.split(' ') //delimiter, split by empty space
    if (messageWordsArr.length < 3) {
        errMsgs.push("Please enter your message")
    }

    //if there is any error
    //-> put the err-msgs class to block and append all the error as <li>
    //if errMsgs.length > 0
    if (errMsgs.length != 0) {
        // let errMsgDiv = document.querySelector('#contact-form .error-msgs')
        errMsgDiv.style.display = 'block' //or display = show

        errMsgs.forEach(item => {
            let errMsgLi = document.createElement('li')
            errMsgLi.innerText = item
            errMsgDiv.append(errMsgLi)
        })

        //return here to prevent form submission (dont submit the form)
        return
    }


    //After form submission
    // clear the form fields
    //querySelect the div. then put email.value = '' empty string
    nameFieldElement.value = ''
    emailFieldElement.value = ''
    messageFieldElement.value = ''

    // display a message: Thank you for your submission, we have received your messages
    successMsgElement.innerText = "form submitted successfully"

    // console.log('onSubmit - form submitted')
    // alert('form-submitted')


}

