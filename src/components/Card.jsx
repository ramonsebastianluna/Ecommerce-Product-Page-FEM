import { productsContext } from "../contexts/productsContext"
import { useContext } from "react"
import Amount from "./Amount"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Card = () => {
    const { data, addToCart } = useContext(productsContext)

    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <>
            <div>
                <h1>Lista de Productos</h1>
                
                <ul>
                    <Slider {...settings}> {/* corregir scroll orizontal que genera */}
                        {data.map((product) => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>Precio: ${product.price}</p>
                            <img src={product.image} alt="" style={{width: '50px'}} />
                            <div style={{display: "flex"}}>
                                <Amount sendAmount={(amount)=>{product.amount = amount}}/>
                            </div>
                            <button onClick={() => addToCart(product)}>Add to cart el producto {product.id}</button>
                        </li>
                        ))}
                    </Slider>
                </ul>
                
            </div>
        </>
    )
}

export default Card