import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
    const { itemsCart, cart } = useContext(productsContext);

    return (
        <>
            <div>El precio se multiplica por {itemsCart}</div>
            <ul>
                {cart.map((product, index) => (
                <li key={index}>
                    <h2>{product.title}</h2>                    
                    <img src={product.image} alt="" style={{width: '50px'}} />
                </li>
                ))}
            </ul>
        </>
    )
}

export default Cart;