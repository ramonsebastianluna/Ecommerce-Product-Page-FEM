import { productsContext } from "../contexts/productsContext";
import { useState } from "react";
import { products } from "../data/data";

const ProductsContextComponent = ({children}) => {
    const [itemsCart, setItemsCart] = useState(0)

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
                increaseItemCart,
                decreaseItemCart,
            }}
        >
            {children}
        </productsContext.Provider>
    )
}

export default ProductsContextComponent;