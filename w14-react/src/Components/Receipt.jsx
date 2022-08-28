import './Receipt.css'

function Receipt(props) {
    return (
        <div className="receipt">
            <h2>{props.receipt.person}</h2>
            <p>Main: {props.receipt.order.main}</p>
            <p>Protein: {props.receipt.order.protein}</p>
            <p>Rice: </p>
            <p>Sauce: </p>
            <p>Drink: </p>
            <p>Cost: </p>
        </div>
    )
}

export default Receipt
