import { productsContext } from "./productsContext";
import { useState, useEffect } from "react";
import useData from "../hooks/useData";

const ProductsContextComponent = ({children}) => {
    const [cart, setCart] = useState([])
    const [cartLength, setCartLength] = useState(0)
    const { 
        data,
        getAllProducts,
        getElectronics,
        getJewelery,
        getMensClothing,
        getWomensClothing
    } = useData()

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
        getAllProducts()
    }, [])

    
    return (
        <productsContext.Provider
            value={{
                data,
                cart,
                cartLength,
                addToCart,
                deleteProductCart,
                getElectronics,
                getJewelery,
                getMensClothing,
                getWomensClothing,
                getAllProducts
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;