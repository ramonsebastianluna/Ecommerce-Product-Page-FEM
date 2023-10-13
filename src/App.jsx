import ProductsContextComponent from './components/ProductsContextComponent';
import Cart from './components/Cart';
import Card from './components/Card';
import CartCounter from './components/CartCounter';
import './sass/main.scss'


function App() {
  return (
    <ProductsContextComponent>
        <CartCounter />
        <Cart />
        <Card />
    </ProductsContextComponent>
  )
}

export default App
