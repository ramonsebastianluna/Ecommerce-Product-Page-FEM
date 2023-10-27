import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import CartCounter from "./CartCounter"
import logo from '../assets/images/logo.svg'
import iconCart from '../assets/images/icon-cart.svg'
import seba from '../assets/images/seba.jpg'

const Header = () => {

    const { getElectronics, getJewelery, getMensClothing, getWomensClothing, getAllProducts } = useContext(productsContext)

    return (
        <div className="d-flex align-items-center">
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <nav>
                <button className="btn btn-primary mx-2" onClick={getAllProducts}>All products</button>
                <button className="btn btn-primary mx-2" onClick={getElectronics}>Electronics</button>
                <button className="btn btn-primary mx-2" onClick={getJewelery}>Jewelery</button>
                <button className="btn btn-primary mx-2" onClick={getMensClothing}>Men</button>
                <button className="btn btn-primary mx-2" onClick={getWomensClothing}>Women</button>
            </nav>
            <div>
                <img src={iconCart} alt="Icon Cart" />
                <CartCounter />
            </div>
            <div>
                <img className="rounded-circle" src={seba} alt="Seba" style={{width: '55px'}} />
            </div>
        </div>
    )
}

export default Header