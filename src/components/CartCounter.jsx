import { productsContext } from "../contexts/productsContext";
import { useContext } from "react";

const CartCounter = () => {
    const {cart} = useContext(productsContext)

    return (
        <div>{cart.length} productos en el carrito</div>
    )
}

export default CartCounter;