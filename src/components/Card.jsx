import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"

const Card = () => {
    const { products } = useContext(productsContext)

    return (
        <>
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {products.map((producto) => (
                    <li key={producto.id}>
                        <h2>{producto.title}</h2>
                        <p>{producto.description}</p>
                        <p>Precio: ${producto.price}</p>
                        <button>Add to cart el producto {producto.id}</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Card