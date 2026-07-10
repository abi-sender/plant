import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./landing.css";

import { FaFacebookF, FaYoutube, FaCreditCard, FaTruck } from "react-icons/fa";
import { IoLogoInstagram, IoBagHandle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";

import product from "./assets/product-01.jpg";
import pro from "./assets/product-02.jpg";
import pr from "./assets/product-03.jpg";
import plant from './assets/product-05.jpg';
import plant1 from './assets/product-04.jpg';
import { useDispatch, useSelector } from "react-redux";
import { Addcart, Decrementqty, Incrementqty, Removecart, TotalAmount } from "./slice";

function Landingpage() {
     const [cartOpen, setCartOpen] = useState(false);

     const handleAddCart = async (item) => {
  // 1. Update Redux
  dispatch(Addcart(item));

  // 2. Save to MongoDB
  await fetch("http://localhost:5000/addcart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      productId: item.id,
      title: item.title,
      name: item.name,
      image: item.image,
      price: item.price,
    }),
  });
  const getCart = async () => {
  try {
    const res = await fetch("http://localhost:5000/cart");
    const data = await res.json();

    setCart(data);
  } catch (err) {
    console.log(err);
  }
};

useEffect(() => {
  getCart();
}, []);
const increaseQty = async (id) => {
  try {
    await fetch(`http://localhost:5000/increase/${id}`, {
      method: "PUT",
    });

    getCart();
  } catch (err) {
    console.log(err);
  }
};
const decreaseQty = async (id) => {
  try {
    await fetch(`http://localhost:5000/decrease/${id}`, {
      method: "PUT",
    });

    getCart();
  } catch (err) {
    console.log(err);
  }
};
const deleteCart = async (id) => {
  try {
    await fetch(`http://localhost:5000/cart/${id}`, {
      method: "DELETE",
    });

    getCart();
  } catch (err) {
    console.log(err);
  }
};
};
// redux
const { cart,totalAmount } = useSelector((state) => state.cart);
const dispatch = useDispatch();
useEffect(()=>
  {
  dispatch(TotalAmount());
},[cart,dispatch]);

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
}, [cart]);

 const products=[
  {
     id: 1,
    image:product,
    title:"Zen Bamboo Grove",
    name:"Indoor plant",
    price:200,
    
 },
 {
   id: 2,
 image:pro,
  title:"Starlight Succulent",
  name:"Indoor Plants",
  price:400,
  
 },
 {
   id: 3,
  image:pr,
  title:"Starlight Succulent",
  name:"Indoor Plants",
  price:600, 
 } 
 ];
 const product1=[
{
  id:1,
  image:plant,
  title:"Desert Bloom",
  name:"Indoor Plant",
  price:700,
},
{
  id:2,
  image:plant1,
  title:"Golden Glow",
  name:"Indoor Plant",
  price:800,
},
{
  id:3,
  image:pr,
  title:"Silver Mist",
  name:"Indoor Plant",
  price:1000,  
}

 ]
  return (
    <>
    <section className="totalsection">
      {/* Hero Section */}
      <section className="hero">
        <nav>
            <div className="logo">
              <Link to="/">PLANTORA</Link>
            </div>

            <div className="nav-links">
              <Link to="/shop">Shop</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <IoLogoInstagram />
              </a>

              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube />
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaXTwitter />
              </a>

                 <IoBagHandle
        className="bag-icons"
        onClick={() => setCartOpen(!cartOpen)}
      />

            </div>
          </nav>

        <div className="content">
          <p className="p">Welcome  plantora</p>

          <h2>
            Discover the Beauty of Nature at Your Fingertips
          </h2>

          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="grid">
        <div>
          <p className="par">
            <FaCreditCard size={50} />
          </p>
          <h4>Secure Payment</h4>
          <p>Elementum feugiat diam</p>
        </div>

        <div>
          <p className="par1">
            <FaTruck size={50} />
          </p>
          <h4>Free Shipping</h4>
          <p>For $50 Order</p>
          
        </div>

        <div>
          <p className="par2">
            <LuBox size={50} />
          </p>
          <h4>Delivered with Care</h4>
          <p>Lacinia pellentesque leo</p>
        </div>

        <div>
          <p className="par3">
            <IoMdHeartEmpty size={50} />
          </p>
          <h4>Excellent Service</h4>
          <p>Blandit gravida viverra</p>
        </div>
      </section>
 <hr className="hr1"></hr>
      {/* Products */}
      <section className="products">
        <h2 className="title">Trending Products</h2>

        <div className="grid1">     
       
        
  {products.map((item) => (
    <div className="card" key={item.id}>
       <Link to="/product">
        <img src={item.image} alt="" />
        <p>{item.title}</p>
        <small>{item.name}</small>
        <p> ₹{item.price}</p>        
     
<button onClick={() => handleAddCart(item)}>
  Add Cart
</button>
</Link>
    </div>
  ))}
</div>
          
      </section>

      {/* Sale Banner */}
      <section className="leaf">
        <div className="content1">
          <h2 >Flash Sale: Up to 50% Off On Select Items!</h2>

          <p>
            Don’t miss out on our flash sale event! For a limited time,
            enjoy up to 50% off on a selection of our best-selling products.
          </p>

          <Link to="/shop">
            <button>Shop Now</button>
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="category-title">Our Categories</h2>

        <div className="plant">
          <div>
            <img
              src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/house-plant.jpg"
              alt="Houseplants"
            />
            <h4>Houseplants</h4>
          </div>

          <div>
            <img
              src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/outdoor-plant.jpg"
              alt="Outdoor Plants"
            />
            <h4>Outdoor Plants</h4>
          </div>

          <div>
            <img
              src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/succulents.jpg"
              alt="Succulents"
            />
            <h4>Succulents</h4>
          </div>

          <div>
            <img
              src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/dessert-bloom.jpg"
              alt="Desert Bloom"
            />
            <h4>Desert Bloom</h4>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="green">
        <div>
          <img
            src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/stats-count.jpg"
            alt="Plants"
          />
        </div>

        <div>
          <h2>Your Premier Destination for All Green.</h2>

          <p>
            At Urban Jungle Co., we believe in the transformative power
            of plants. Whether you're a seasoned gardener or just
            starting your green journey, our curated selection of plants
            will inspire and enrich your living space.
          </p>

          <hr />

          <div className="custo">
            <div>
              <h5>98%</h5>
              <p>Customer Satisfaction</p>
            </div>

            <div>
              <h5>103K</h5>
              <p>Plants Sold</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
     <section className="popular-products">
  <h2>Popular Products</h2>

  <div className="product-grid">
    {product1.map((item) => (
      <div className="product-card" key={item.id}>
        <img src={item.image} alt={item.title} />
        <p>{item.title}</p>
        <small>{item.name}</small>
        <p>₹{item.price}</p>

        <button onClick={() => dispatch(Addcart(item))}>
          Add Cart
        </button>
      </div>
    ))}
  </div>
</section>

{/* testimonial section */}
<section className="testimonial-section">
  <div className="testimonial-header">
    <h2>What Our Customers Say</h2>
    <p>
      Discover the reasons why people loves us and become your
      go-to partner.
    </p>
  </div>

  <div className="testimonial-grid">
    <div className="testimonial-card large">
      <span className="quote">❝</span>

      <p>
        I am absolutely thrilled with the service I received from
        their company! They were attentive, responsive, and genuinely
        cared about meeting my needs. I highly recommend them.
      </p>

      <div className="client">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Client"
        />
        <h4>Your Client</h4>
      </div>
    </div>

    <div className="right-side">
      <div className="testimonial-card">
        <span className="quote">❝</span>

        <p>
          I am absolutely thrilled with the service I received from
          their company! They were attentive, responsive, and genuinely
          cared about meeting my needs. I highly recommend them.
        </p>

        <div className="client">
          <img
            src="https://randomuser.me/api/portraits/men/45.jpg"
            alt="Client"
          />
          <h4>Your Client</h4>
        </div>
      </div>

      <div className="testimonial-card">
        <span className="quote">❝</span>

        <p>
          Their team exceeded our expectations. Their creative
          approach and attention to detail brought our vision to
          life. Highly recommended!
        </p>

        <div className="client">
          <img
            src="https://randomuser.me/api/portraits/women/28.jpg"
            alt="Client"
          />
          <h4>Your Client</h4>
        </div>
      </div>
    </div>
  </div>
</section>

{/* cta section */}

<section className="cta-section">
  <div className="overlay">
    <h2>Ready to Find your Perfect Plant?</h2>

    <p>
      Browse our online store or visit us in person to
      <br />
      experience the beauty of nature.
    </p>

    <button>Shop Now</button>
  </div>
</section>

{/* footer */}

<footer className="footer">
      <div className="footer-top">
        <div className="logo">
          
          <h2>PLANTORA</h2>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="social-icons1">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>

          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <IoLogoInstagram />
          </a>

          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <FaYoutube />
          </a>

          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaXTwitter />
          </a>

          
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
            
              <button
                className="close-btn"
                onClick={() => setCartOpen(false)}
              >
                ✕
              </button>
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
export default Landingpage;