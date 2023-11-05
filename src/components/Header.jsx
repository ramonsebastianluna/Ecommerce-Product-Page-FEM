import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import MenuButton from "./MenuButton"
import CartCounter from "./CartCounter"
import logo from '../assets/images/logo.svg'
import iconCart from '../assets/images/icon-cart.svg'
import seba from '../assets/images/seba.jpg'
import burguer from '../assets/images/icon-menu.svg'


const Header = () => {

    const { getElectronics,
            getJewelery,
            getMensClothing,
            getWomensClothing,
            getAllProducts } = useContext(productsContext)

    return (
        <header className="row">  
            <div className="col-3">
                <img src={logo} alt="Logo" />
            </div>
            <div className="col-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <img className="navbar-toggler-icon" src={burguer} alt="burguer menu" />
                        </button>
                        
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body"> 
                                <ul className="navbar-nav flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <MenuButton action={getAllProducts} description='All products'/>
                                    </li>
                                    <li className="nav-item">
                                        <MenuButton action={getElectronics} description='Electronics' />
                                    </li>
                                    <li className="nav-item">
                                        <MenuButton action={getJewelery} description='Jewelery' />
                                    </li>
                                    <li className="nav-item">
                                        <MenuButton action={getMensClothing} description='Men' />
                                    </li>
                                    <li className="nav-item">
                                        <MenuButton action={getWomensClothing} description='Women' />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>   
            <div className="col-3">
                <a type="button" className="position-relative">
                    <img src={iconCart} alt="Icon Cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <CartCounter />
                        <span className="visually-hidden">unread messages</span>
                    </span>
                </a>
                <img className="rounded-circle" src={seba} alt="Seba" style={{width: '55px'}} />
            </div>
        </header>
    )
}

export default Header