import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
    const { itemsCart } = useContext(productsContext);

    return (
        <>
            <div>El precio se multiplica por {itemsCart}</div>
        </>
    )
}

export default Cart;