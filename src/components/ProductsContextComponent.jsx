import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (index) => {
        console.log(data[index].cantidad + " unidades del producto " + data[index].title)
        setCart([...cart, data[index]])
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                response.data.map((product)=>{product.cantidad = 1})
                console.log(response.data) //borrar esto una vez terminada la lógica.
                setData(response.data)    
            })
    }, [])


    return (
        <productsContext.Provider
            value={{
                data,
                cart,
                addToCart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;