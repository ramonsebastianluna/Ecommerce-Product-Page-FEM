import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"

const Card = () => {
    const { data } = useContext(productsContext)

    return (
        <>
            <div>
                <h1>Lista de Productos</h1>
                <ul>
                    {data.map((data) => (
                    <li key={data.id}>
                        <h2>{data.title}</h2>
                        <p>{data.description}</p>
                        <p>Precio: ${data.price}</p>
                        <img src={data.image} alt="" style={{width: '50px'}} />
                        <button>Add to cart el producto {data.id}</button>
                    </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Card