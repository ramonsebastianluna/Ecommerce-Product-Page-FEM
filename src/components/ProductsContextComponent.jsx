import { productsContext } from "../contexts/productsContext";
import { useState, useEffect } from "react";
import { products } from "../data/data";
import axios from "axios";

const ProductsContextComponent = ({children}) => {
    const [itemsCart, setItemsCart] = useState(0)
    const [data, setData] = useState([])

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
                increaseItemCart,
                decreaseItemCart
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;