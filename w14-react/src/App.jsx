import {useState} from 'react';
import './App.css';
import ReceiptList from './Components/ReceiptList';
import Filter from './Components/Filter'

function App() {
  const [receiptPerson, setReceiptPerson] = useState('')

  const abc = (xxx) => {
    console.log('xxx: ', xxx)
    // Do anything I want with the value
    // eg: call API, refresh page, quit app, etc
    setReceiptPerson(xxx)
  }

  return (
    <div className="App">
      <Filter onSubmit={abc} />
      <ReceiptList filterValByPerson={receiptPerson} />
    </div>
  );
}

export default App;
