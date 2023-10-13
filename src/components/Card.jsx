import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import Amount from "./Amount"

const Card = () => {
    const { data, addToCart } = useContext(productsContext)

    return (
        <>
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {data.map((product, index) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <img src={product.image} alt="" style={{width: '50px'}} />
                        <div style={{display: "flex"}}>
                            <Amount amountProduct = {product.cantidad}/>
                        </div>
                        <div>{product.id} + {index}</div>
                        <button onClick={() => addToCart(index)}>Add to cart el producto {product.id}</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Card