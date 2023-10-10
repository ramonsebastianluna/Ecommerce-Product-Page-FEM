import ProductsContextComponent from './components/ProductsContextComponent';
import Amount from './components/Amount';
import Cart from './components/Cart';
import './sass/main.scss'


function App() {
  return (
    <ProductsContextComponent>
        <Amount />
        <Cart />
    </ProductsContextComponent>
  )
}

export default App
