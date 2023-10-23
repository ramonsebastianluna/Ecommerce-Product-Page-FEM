import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product) => {
        const indexOfProduct = cart.findIndex(item => item.id === product.id)
        if (indexOfProduct === -1) {
            setCart(prev => [...prev, product]);
        } else {
            const clonedCart = structuredClone(cart)
            clonedCart[indexOfProduct].amount = product.amount
            setCart(clonedCart)
        }
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                response.data.map((product)=>{product.amount = 1})
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