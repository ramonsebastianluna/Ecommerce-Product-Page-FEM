import { useState, useEffect} from "react"

const Amount = ({sendAmount}) => {
    
    const [amount, setAmount] = useState(1)

    const increaseAmount = () => {
        setAmount(prev => prev + 1)
    }

    const decreaseAmount = () => {
        amount !== 1 && setAmount(prev => prev - 1)
    }

    useEffect(()=>{
        sendAmount(amount)
    }, [amount])
    //cuando agrego un nuevo objeto al carrito me queda la cantidad del anterior. Corregir.

    return (
        <>
            <button onClick={decreaseAmount}>-</button>
            <div>{amount}</div>
            <button onClick={increaseAmount}>+</button>
        </>
    )
}

export default Amount;