import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"

const Header = () => {

    const { getElectronics, getJewelery, getMensClothing, getWomensClothing, getAllProducts } = useContext(productsContext)

    return (
        <div>
            <button onClick={getAllProducts}>All products</button>
            <button onClick={getElectronics}>Electronics</button>
            <button onClick={getJewelery}>Jewelery</button>
            <button onClick={getMensClothing}>Men</button>
            <button onClick={getWomensClothing}>Women</button>
        </div>
    )
}

export default Header