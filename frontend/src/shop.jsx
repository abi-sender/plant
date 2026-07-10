import "./shop.css";
import product from "./assets/product-01.jpg";
import pro from "./assets/product-02.jpg";
import pr from "./assets/product-03.jpg";
import p from "./assets/product-04.jpg";
import du from "./assets/product-05.jpg";

import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram, IoBagHandle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Addcart, Decrementqty, Incrementqty, Removecart, TotalAmount } from "./slice";

function Shop() {
  const dispatch = useDispatch();

const cart = useSelector((state) => state.cart.cart);

const [cartOpen, setCartOpen] = useState(false);

const totalAmount = cart.reduce(
  (total, item) => total + item.price * item.qty,
  0
);
const products = [
    {
      id: 1,
      image: du,
      name: "Desert Bloom",
      category: "Indoor Plants",
      price: 70,
    },
    {
      id: 2,
      image: p,
      name: "Golden Glow",
      category: "Indoor Plants",
      price: 85,
    },
    {
      id: 3,
      image: pr,
      name: "Silver Mist",
      category: "Indoor Plants",
      price: 92,
    },
    {
      id: 4,
      image: pro,
      name: "Starlight Succulent",
      category: "Indoor Plants",
      price: 95,
    },
    {
      id: 5,
      image: pr,
      name: "Tropical Breeze",
      category: "Indoor Plants",
      price: 80,
    },
    {
      id: 6,
      image: product,
      name: "Zen Bamboo Grove",
      category: "Indoor Plants",
      price: 90,
    },
  ];

return (
<>
<section>
{/* Navbar */}
<div className="shop">
<nav>
<div className="logo">
<Link to="/"> PLANTORA</Link>
</div>
<div className="nav-links">
<Link to="/shop">Shop</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</div>
<div className="social-icons">
<a href="https://facebook.com" target="_blank" rel="noreferrer"> <FaFacebookF /> </a>
<a href="https://instagram.com" target="_blank" rel="noreferrer"> <IoLogoInstagram /> </a>
<a href="https://youtube.com" target="_blank" rel="noreferrer"> <FaYoutube /> </a>
<a href="https://twitter.com" target="_blank" rel="noreferrer"> <FaXTwitter /> </a>
<IoBagHandle className="bag-icons" onClick={() => setCartOpen(true)}/> </div>
</nav>
<h1>Shop</h1>
</div>

{/* Product Header */}
<div className="res">
<div>
<p>Showing all {products.length} results</p>
</div>
<div>
<select>
<option>Default sorting</option>
<option>Sort by popularity</option>
<option>Sort by average rating</option>
<option>Sort by latest</option>
<option>Sort by price: low to high</option>
<option>Sort by price: high to low</option>
</select>
</div>
</div>

{/* Product List */}
<div className="imagegrid">
{products.map((item) => (
<div className="card" key={item.id}>
<img src={item.image} alt={item.name} />
<h2>{item.name}</h2>
<small>{item.category}</small>
<p>₹{item.price}.00</p>
<button onClick={() => dispatch(Addcart(item))}>Add Cart</button></div>
))}
</div>

{/* CTA Section */}
<div className="your">
<div>
<h1>Ready to Find Your Perfect Plant?</h1>
<p>
Browse our online store or visit us in person to
<br />
experience the beauty of nature.
</p>
<button>Shop Now</button>
</div>
</div>

{/* Footer */}
<footer className="footer">
<div className="footer-top">
<div className="logo">
<h2> PLANTORA</h2>
</div>
<div className="footer-links">
<Link to="/">Home</Link>
<Link to="/shop">Shop</Link>
<Link to="/about">About</Link>
<Link to="/contact">Contact</Link>
</div>
<div className="social-icons1">
<a href="https://facebook.com"  target="_blank" rel="noreferrer"><FaFacebookF /> </a>
<a href="https://instagram.com" target="_blank" rel="noreferrer"> <IoLogoInstagram /></a>
<a href="https://youtube.com" target="_blank" rel="noreferrer"> <FaYoutube /> </a>
<a href="https://twitter.com" target="_blank" rel="noreferrer"> <FaXTwitter /></a>
</div>
</div>
<hr />
<div className="footer-bottom">
<p>Copyright © 2026 Generic eCommerce</p>
</div>
</footer>
{/* redux cart overlay side */}
{cartOpen && (
<div className="cart-overlay">
<div className="cart-sidebar">
<div className="cart-header">
<h3>Shopping Cart</h3>
<button className="close-btn" onClick={() => setCartOpen(false)}> ✕ </button>
</div>
<div className="cart-body">
{cart.length === 0 ? (
<p>No products in the cart.</p>
) : (
cart.map((item) => (
<div  className="cart-item" key={item.id}>
<img src={item.image} alt="" />
<div className="cart-info">
<p>{item.title}</p>
<small>{item.name}</small>
<p>₹{item.price}</p>  
<button onClick={()=>dispatch(Incrementqty(item.id))}>+</button>
<span>{item.qty}</span>
<button onClick={()=>dispatch(Decrementqty(item.id))}>-</button>
<button onClick={() => dispatch(Removecart(item.id))}>Remove</button>
<p className="subtotal"> SubTotal: ₹{item.price * item.qty}</p>

</div>
</div>
)))}
<h2 className="total">Total Amount: ₹{totalAmount}</h2>
</div>
<div className="cart-footer">
<button className="continue-btn" onClick={() => setCartOpen(false)}>Continue Shopping</button>
</div>
</div>
</div>
)}
</section>
</>
);
}
export default Shop;