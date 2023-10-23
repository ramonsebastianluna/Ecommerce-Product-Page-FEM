import { productsContext } from "../contexts/productsContext"
import { useContext, useState } from "react"
import Amount from "./Amount"

const Card = () => {
    const { data, addToCart } = useContext(productsContext)

    return (
        <>
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {data.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Precio: ${product.price}</p>
                        <img src={product.image} alt="" style={{width: '50px'}} />
                        <div style={{display: "flex"}}>
                            <Amount sendAmount={(amount)=>{product.amount = amount}}/>
                        </div>
                        <button onClick={() => addToCart(product)}>Add to cart el producto {product.id}</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Card