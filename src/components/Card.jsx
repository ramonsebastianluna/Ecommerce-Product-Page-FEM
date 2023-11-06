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
        <div>
            <ul className="p-0">
                <Slider {...settings}> {/* corregir scroll orizontal que genera */}
                    {data.map((product) => (
                    <li key={product.id} className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <img src={product.image} alt="" style={{width: '50px'}} />
                            </div>
                            <div className="col-12 col-sm-6">
                                <h2>{product.title}</h2>
                                <p>{product.description}</p>
                                <p>Precio: ${product.price}</p>
                                <div class="d-lg-flex">
                                    <AmountButton sendAmount={(amount)=>{product.amount = amount}}/>
                                    <AddToCartButton product={product} />
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