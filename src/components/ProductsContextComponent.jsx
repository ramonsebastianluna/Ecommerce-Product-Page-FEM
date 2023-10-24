import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])
    const [cartLength, setCartLength] = useState(0)

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

    const deleteProductCart = (index) => {
        const clonedCart = structuredClone(cart)
        clonedCart.splice(index, 1)
        setCart(clonedCart)
    }

    useEffect(() => {
        if (cart.length === 0) {
            setCartLength(0)
        } else {
            const totalAmount = cart.reduce((accumulator, product) => {
                return accumulator + product.amount
            }, 0)
            setCartLength(totalAmount)
        }
    }, [cart])

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
                cartLength,
                addToCart,
                deleteProductCart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;