import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/navbar';
import Header from './components/header';
import ProductList from './components/product-list';
import Footer from './components/footer';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  console.log(count,cartProduct);

  const handleCountIncrease = () => {
    setCount(count+1);
  }
  const handleCountDecrease = () => {
    setCount(count-1);
  }

  const handleAddToCart = (data)=> {
    const arr = [...cartProduct, data];
    setCartProduct(arr);
    handleCountIncrease();    
  }

  const handleRemoveFromCart = (data)=> {
    const arr = cartProduct.filter((el) => el !== data);
    setCartProduct(arr);
    handleCountDecrease();
  }

  return (
    <>
      <Navbar count={count}/>
      <Header />
      <ProductList handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />
      <Footer />
    </>

  );
}

export default App;
