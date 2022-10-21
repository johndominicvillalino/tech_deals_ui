
import Product from "./component/Product";
import { Routes,Route } from "react-router-dom";
import Nav from "./component/Nav";
import Cart from "./component/Cart";
import Promotions from "./component/Promotions";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Product></Product>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/promotions' element={<Promotions></Promotions>}></Route>
      </Routes>
    </>
  );
}

export default App;
