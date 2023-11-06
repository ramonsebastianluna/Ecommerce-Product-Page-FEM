import { useState, useEffect} from "react"

const AmountButton = ({sendAmount}) => {
    
    const [amount, setAmount] = useState(1)

    const increaseAmount = () => {
        amount < 10 && setAmount(prev => prev + 1)
    }

    const decreaseAmount = () => {
        amount !== 1 && setAmount(prev => prev - 1)
    }

    useEffect(()=>{
        sendAmount(amount)
    }, [amount])

    return (
        <div className="d-flex d-sm-inline-flex my-3 my-lg-0 me-lg-3 align-items-center rounded-2 amount">
            <button className="btn amount__btn" onClick={decreaseAmount}>-</button>
            <p className="m-0 text-center amount__digit">{amount}</p>
            <button className="btn amount__btn" onClick={increaseAmount}>+</button>
        </div>
    )
}

export default AmountButton;