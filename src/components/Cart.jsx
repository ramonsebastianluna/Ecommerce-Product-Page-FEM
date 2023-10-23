import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
    const { cart } = useContext(productsContext);

    return (
        <>
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                    <h2>{product.title}</h2>                    
                    <img src={product.image} alt="" style={{width: '50px'}} />
                    <p>${product.price} x {product.amount} <span style={{fontWeight: 'bold', color: "black"}}>${product.price * product.amount}</span></p>
                </li>
                ))}
            </ul>
        </>
    )
}

export default Cart;