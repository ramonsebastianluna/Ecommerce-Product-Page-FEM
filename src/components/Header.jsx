import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import CartCounter from "./CartCounter"
import logo from '../assets/images/logo.svg'
import iconCart from '../assets/images/icon-cart.svg'
import seba from '../assets/images/seba.jpg'

const Header = () => {

    const { getElectronics,
            getJewelery,
            getMensClothing,
            getWomensClothing,
            getAllProducts } = useContext(productsContext)

    return (
        <header className="row align-items-center">      
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <img src={logo} alt="Logo" />
                            </div> 
                            <ul className="navbar-nav flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <button className="nav-link btn btn-primary mx-2"
                                            onClick={getAllProducts}
                                            type="button"
                                            data-bs-toggle="offcanvas"                  
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                            All products
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-primary mx-2"
                                            onClick={getElectronics}
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                            Electronics
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-primary mx-2"
                                            onClick={getJewelery}
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                            Jewelery
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-primary mx-2"
                                            onClick={getMensClothing}
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                            Men
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-primary mx-2"
                                            onClick={getWomensClothing}
                                            type="button"
                                            data-bs-toggle="offcanvas"
                                            aria-controls="offcanvasNavbar"
                                            aria-label="Toggle navigation">
                                            Women
                                    </button>
                                </li>
                            </ul>
                            <div>
                                <a type="button" className="position-relative">
                                    <img src={iconCart} alt="Icon Cart" />
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        <CartCounter />
                                        <span className="visually-hidden">unread messages</span>
                                    </span>
                                </a>
                            </div>
                            <div>
                                <img className="rounded-circle" src={seba} alt="Seba" style={{width: '55px'}} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header