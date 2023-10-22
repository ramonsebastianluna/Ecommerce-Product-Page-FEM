import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product, amount) => {
        const indexOfProduct = cart.findIndex(item => item.id === product.id)
        if (indexOfProduct === -1) {
            product.cantidad = amount
            setCart(prev => [...prev, product]);
        } else {
            const clonedCart = structuredClone(cart)
            clonedCart[indexOfProduct].cantidad = amount
            setCart(clonedCart)
        }
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                response.data.map((product)=>{product.cantidad = 1})
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