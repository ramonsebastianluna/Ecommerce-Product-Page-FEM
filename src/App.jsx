import ProductsContextComponent from './components/ProductsContextComponent';
import Amount from './components/Amount';
import Cart from './components/Cart';
import Card from './components/Card';
import './sass/main.scss'


function App() {
  return (
    <ProductsContextComponent>
        <Amount />
        <Cart />
        <Card />
    </ProductsContextComponent>
  )
}

export default App
