import {useState} from 'react'
import Receipt from "./Receipt"
import './ReceiptList.css'

function ReceiptList(props) {
    const [receipts, setReceipts] = useState([
      {
        person: 'Karolin',
        order: {
          main: 'Burrito',
          protein: 'Organic Tofu',
          rice: 'Purple Rice',
          sauce: 'Green Crack',
          toppings: [
            'Baby Bok Choy', 'Cucumber Kimchi'
          ],
          drink: 'Korchata',
          cost: 22
        },
        paid: false
      },
      {
        person: 'Jerrica',
        order: {
          main: 'Rice Bowl',
          protein: 'Ginger Soy Chix',
          rice: 'Sticky Rice',
          sauce: 'Korilla',
          toppings: [
            'Yuzu Pickled Sweet Pepper', 'Kale'
          ],
          drink: 'Korchata',
          cost: 19
        },
        paid: false
      },
      {
        person: 'Matt',
        order: {
          main: 'Salad Bowl',
          protein: 'Organic Tofu',
          rice: 'none',
          sauce: "K'lla",
          toppings: [
            'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
          ],
          drink: 'Sparkling Blood Orange Soda',
          cost: 20
        },
        paid: true
      },
    ])

    const receiptList = receipts
      .filter(receipt => !receipt.paid)
      .filter(receipt => {
        if(props.filterValByPerson?.length > 0) {
          return receipt.person.toLowerCase().includes(props.filterValByPerson.toLowerCase())
        }

        return true
      })
      // .filter(receipt => {
      //   return !receipt.paid
      // })
      .map((receipt, ind) => <Receipt key={ind} receipt={receipt} />)

    return (
        <div className="receipt-list">
            {/* { !receipts[0].paid ? <Receipt receipt={receipts[0]} /> : null }
            { !receipts[1].paid ? <Receipt receipt={receipts[1]} /> : null }
            { !receipts[2].paid ? <Receipt receipt={receipts[2]} /> : null } */}
            {receiptList}
        </div>
    )
}

export default ReceiptList
