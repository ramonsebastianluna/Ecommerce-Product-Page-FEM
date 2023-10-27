import ProductsContextComponent from './contexts/ProductsContextComponent';
import Cart from './components/Cart';
import Card from './components/Card';
import Header from './components/Header';
import * as bootstrap from 'bootstrap'
import './sass/main.scss'


function App() {
    return (
        <ProductsContextComponent>
            <Header />
            <Cart />
            <Card />
        </ProductsContextComponent>
  )
}

export default App
