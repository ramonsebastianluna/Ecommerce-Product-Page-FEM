import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Amount from "./Amount";

const ProductsContextComponent = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (product, amount) => {
        const indexOfProduct = cart.findIndex(item => item.id === product.id)
        console.log(indexOfProduct)
        if (indexOfProduct === -1) {
            product.cantidad = amount
            setCart(prev => [...prev, product]);
            console.log("producto agregado al carrito ")
        } else {
            const clonedCart = structuredClone(cart)
            clonedCart[indexOfProduct].cantidad = amount
            setCart(clonedCart)
            console.log("este producto ya existe en el carrito y su cantidad es: " + cart[indexOfProduct].cantidad)
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