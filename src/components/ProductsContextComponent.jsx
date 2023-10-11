import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import { products } from "../data/data";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [itemsCart, setItemsCart] = useState(0)
    const [data, setData] = useState([])
    const [cart, setCart] = useState([])

    const addToCart = (index) => {
        setCart([...cart, data[index]])
    }

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setData(response.data)    
            })
    }, [])


    const increaseItemCart = () => {
        setItemsCart(prev => prev + 1)
    }

    const decreaseItemCart = () => {
        itemsCart !== 0 && setItemsCart(prev => prev - 1)
    }

    return (
        <productsContext.Provider
            value={{
                products,
                itemsCart,
                data,
                cart,
                increaseItemCart,
                decreaseItemCart,
                addToCart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;