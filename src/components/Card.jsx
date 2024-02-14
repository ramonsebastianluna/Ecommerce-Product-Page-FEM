import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import AmountButton from "./buttons/AmountButton"
import AddToCartButton from "./buttons/AddToCartButton"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Card = () => {
    const { data } = useContext(productsContext)

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className="card-container">
            <ul className="p-0">
                <Slider {...settings}> {/* corregir scroll orizontal que genera */}
                    {data.map((product) => (
                    <li key={product.attributes.id} className="container-fluid product-card">
                        <div className="row product-card__item">
                            <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center product-card__item__img">
                                <div className="d-flex align-items-center justify-content-center product-card__item__img--content">
                                    <img className="rounded-4" style={{width: "100%"}} src={product.attributes.image} alt="Product Image"/>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 product-card__item__description">
                                <p className="my-3 product-card__item__description--company-name">SNEAKER COMPANY</p>
                                <h2 className="product-card__item__description--title">{product.attributes.title}</h2>
                                <p className="my-3 product-card__item__description--product-description">{product.attributes.description}</p>
                                <p className="product-card__item__description--price">Precio: ${product.attributes.price}</p>
                                <div className="d-lg-flex">
                                    <AmountButton sendAmount={(amount)=>{product.attributes.amount = amount}}/>
                                    <AddToCartButton product={product.attributes} />
                                </div>
                            </div>
                        </div>
                    </li>
                    ))}
                </Slider>
            </ul>  
        </div>        
    )
}

export default Card