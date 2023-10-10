import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
    const { itemsCart } = useContext(productsContext);

    return (
        <>
            <div>mi carrito tiene {itemsCart} productos</div>
        </>
    )
}

export default Cart;