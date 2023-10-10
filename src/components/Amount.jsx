import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Amount = () => {

    const {itemsCart, increaseItemCart, decreaseItemCart} = useContext(productsContext);

    return (
        <>
            <button onClick={decreaseItemCart}>-</button>
            <div>{itemsCart}</div>
            <button onClick={increaseItemCart}>+</button>
        </>
    )
}

export default Amount;