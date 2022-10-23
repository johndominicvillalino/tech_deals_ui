
import Product from "./component/Product";
import { Routes, Route } from "react-router-dom";
import Nav from "./component/Nav";
import Cart from "./component/Cart";
import Promotions from "./component/Promotions";
import { useEffect, useState } from "react";
import AddProduct from "./ui/Modal";
import AddPromotion from "./component/AddPromotion";
import axios from "axios";
import { baseUrl } from "./helpers/constants";


function App() {



  const [cartItems, setCartItems] = useState([])
  const [currentPage, setCurrentPage] = useState('Tech Deals')
  const [open, setOpen] = useState(false)
  const [products, setProducts] = useState([])


  const handleDelete = e => {
    const filter = cartItems.filter(el => el.id != e)
    setCartItems([...filter])
  }


  useEffect(() => {
    axios.get(`${baseUrl}/products`)
      .then(e => {
        const data = e.data.map(e => e.qty = 0)
        setProducts(e.data)
      })
      .catch(err => console.log(err)
      )
  }, [])


  return (
    <>
      <Nav currentPage={currentPage} cartItems={cartItems} setOpen={setOpen} ></Nav>
      <AddProduct open={open} setProducts={setProducts} setOpen={setOpen}></AddProduct>
      <Routes>
        <Route path='/' element={<Product handleDelete={handleDelete} products={products} setProduct={setProducts} setCurrentPage={setCurrentPage} setCartItems={setCartItems}></Product>}></Route>
        <Route path='/cart' element={<Cart handleDelete={handleDelete} setCartItems={setCartItems} setCurrentPage={setCurrentPage} cartItems={cartItems}></Cart>}></Route>
        <Route path='/promotions' element={<Promotions setCurrentPage={setCurrentPage}></Promotions>}></Route>
        <Route path='promotions/create' element={<AddPromotion setProducts={setProducts} products={products} ></AddPromotion>} ></Route>
      </Routes>
    </>
  );
}

export default App;
