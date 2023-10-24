import { productsContext } from "../contexts/productsContext";
import { useContext } from "react";

const CartCounter = () => {
    const {cartLength} = useContext(productsContext)

    return (
        <div>{cartLength} productos en el carrito</div>
    )
}

export default CartCounter;