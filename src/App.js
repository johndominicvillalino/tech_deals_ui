
import Product from "./component/Product";
import { Routes,Route } from "react-router-dom";
import Nav from "./component/Nav";
import Cart from "./component/Cart";
import Promotions from "./component/Promotions";
import { useEffect, useState } from "react";
import AddProduct from "./ui/Modal";
import AddPromotion from "./component/AddPromotion";
import axios from "axios";
import { baseUrl } from "./helpers/constants";


function App() {

  

  const [cartItems,setCartItems] = useState([])
  const [currentPage, setCurrentPage] = useState('Tech Deals')
  const [open, setOpen] = useState(false)
  const [products,setProducts] = useState([])


  useEffect(() => {
    axios.get(`${baseUrl}/products`)
    .then(e => {
        const data = e.data.map(e => e.qty = 0)
        setProducts(e.data)
    })
    .catch(err => console.log(err)
    )
  },[])


  return (
    <>
      <Nav currentPage={currentPage}  open={open} setOpen={setOpen} ></Nav>
      <AddProduct open={open} setProducts={setProducts} setOpen={setOpen}></AddProduct>
      <Routes>
        <Route path='/' element={<Product products={products} setProduct={setProducts} setCurrentPage={setCurrentPage} setCartItems={setCartItems}></Product>}></Route>
        <Route path='/cart' element={<Cart setCurrentPage={setCurrentPage} cartItems={cartItems}></Cart>}></Route>
        <Route path='/promotions' element={<Promotions   setCurrentPage={setCurrentPage}></Promotions>}></Route>
        <Route path='promotions/create' element={<AddPromotion products={products} ></AddPromotion>} ></Route>
      </Routes>
    </>
  );
}

export default App;
