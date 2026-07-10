import { BrowserRouter, Route, Routes } from "react-router-dom"
import Landingpage from "./landingpage"
import ProductPage from "./ProductPage"
import ProductPage1 from "./productpage1"
import Shop from "./shop"
import About from "./about"
import Contact from "./contact"

function App() {
 return (
      // <Landingpage/>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={[<Landingpage/>]}></Route>
    <Route path="/product"element={[<ProductPage/>]}></Route>
    <Route path="/product1"element={[<ProductPage1/>]}></Route>
    <Route path="/shop"element={[<Shop/>]}></Route>
    <Route path="/about"element={[<About/>]}></Route>
    <Route path="/contact"element={[<Contact/>]}></Route>
    </Routes>



    </BrowserRouter>
  
  )
}

export default App
