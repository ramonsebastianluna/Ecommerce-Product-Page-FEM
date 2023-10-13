import { useState } from "react";

const Amount = ({amountProduct}) => {
    const [amount, setAmount] = useState(amountProduct)

    const increaseAmount = () => {
        setAmount(prev => prev + 1)
    }

    const decreaseAmount = () => {
        amount !== 1 && setAmount(prev => prev - 1)
    }
    return (
        <>
            <button onClick={decreaseAmount}>-</button>
            <div>{amount}</div>
            <button onClick={increaseAmount}>+</button>
        </>
    )
}

export default Amount;