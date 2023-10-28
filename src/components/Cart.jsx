import { useContext } from "react";
import { productsContext } from "../contexts/productsContext";

const Cart = () => {
    const { cart, deleteProductCart } = useContext(productsContext);

    return (
        <>
            <ul className="d-none">
                {cart.map((product, index) => (
                    <li key={index}>
                    <h2>{product.title}</h2>                    
                    <img src={product.image} alt="" style={{width: '50px'}} />
                    <p>${product.price} x {product.amount} <span style={{fontWeight: 'bold', color: "black"}}>${product.price * product.amount}</span></p>
                    <button onClick={()=>{deleteProductCart(index)}}>Eliminar producto</button>
                </li>
                ))}
            </ul>
        </>
    )
}

export default Cart;