import {useState, useRef} from 'react';

function Filter(props) {
  const [receiptPerson, setReceiptPerson] = useState('')

  // const filterByPersonInputRef = useRef()

  const formObj = {
    filterByPersonInputRef: useRef(),
    usernameRef: useRef(),
    passwordRef: useRef(),
  }

  const fn = (evnt) => {
    evnt.preventDefault();

    props.onSubmit(receiptPerson)
  }

  const fnControlledInputFilter = (evnt) => {
    evnt.preventDefault();

    const val = formObj.filterByPersonInputRef.current.value;
    props.onSubmit(val);
  }

  const fnControlledInputLogin = (evnt) => {
    evnt.preventDefault();

    const { usernameRef, passwordRef } = formObj
    // const usernameRef = formObj.usernameRef
    // const passwordRef = formObj.passwordRef

    console.log('username: ', usernameRef.current.value)
    console.log('password: ', passwordRef.current.value)
    console.log('---')
    // call API with username & password to login
  }

  const onInputValChange = (evnt) => {
    setReceiptPerson(evnt.target.value)
    props.onSubmit(evnt.target.value)
    // if input do not have one lowecase, show error
    // if input do not have one uppercase, show error
    // if input do not have one number, show error
    // if input do is less than 8 characters, show error
  }

  const onPasswordValChange = (evnt) => {
    // validate password format
    const password = evnt.target.value
    console.log(' ---- password: ', password)
    if (password.length < 8) {
      console.error('Password must be more than 8 characters')
    }
  }

  return (
    // <form onSubmit={fnControlledInputLogin}>
    //   <label>
    //     username
    //     <input
    //       type="text"
    //       ref={formObj.usernameRef}
    //     />
    //   </label>
    //   <label>
    //     password
    //     <input
    //       type="password"
    //       onChange={onPasswordValChange}
    //       ref={formObj.passwordRef}
    //     />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
    <form onSubmit={fnControlledInputFilter}>
      <label>
        Filter By Person
        <input
          type="text"
          ref={formObj.filterByPersonInputRef}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    // <>
    //   <label>
    //     Filter By Person
    //     <input
    //       type="text"
    //       value={receiptPerson}
    //       onChange={onInputValChange}
    //     />
    //   </label>
    // </>
    // <form onSubmit={fn}>
    //   <label>
    //     Filter By Person
    //     <input
    //       type="text"
    //       value={receiptPerson}
    //       onChange={onInputValChange}
    //     />
    //   </label>
    //   <input type="submit" value="Submit" />
    // </form>
  )
}

export default Filter;
