import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import MenuButton from "./buttons/MenuButton"
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
        <header className="row py-4 border-bottom">  
            <div className="col-6 order-2 col-lg-3 order-lg-1 d-flex justify-content-start align-items-center ps-0">
                <img className="logo" src={logo} alt="Logo" />
            </div>
            <div className="col-2 order-1 col-lg-6 order-lg-2 d-flex justify-content-center align-items-center">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <button className="navbar-toggler p-0 border-0 burger-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <img src={burguer} alt="Burguer Menu" />
                        </button>
                        
                        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header mt-4 w-75">
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
            <div className="col-4 order-3 col-lg-3 order-lg-3 d-flex align-items-center justify-content-around justify-content-lg-end p-lg-0">
                <a type="button" className="position-relative">
                    <img src={iconCart} alt="Icon Cart" />
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill cart-counter-content">
                        <CartCounter />
                    </span>
                </a>
                <img className="rounded-circle ms-lg-5 profile-img" src={seba} alt="Profile image" />
            </div>
        </header>
    )
}

export default Header