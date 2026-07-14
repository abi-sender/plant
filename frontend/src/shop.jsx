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

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetCart } from "./slice";

function Shop() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);

  const [cartOpen, setCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      image: du,
      title: "Desert Bloom",
      name: "Indoor Plants",
      price: 70,
    },
    {
      id: 2,
      image: p,
      title: "Golden Glow",
      name: "Indoor Plants",
      price: 85,
    },
    {
      id: 3,
      image: pr,
      title: "Silver Mist",
      name: "Indoor Plants",
      price: 92,
    },
    {
      id: 4,
      image: pro,
      title: "Starlight Succulent",
      name: "Indoor Plants",
      price: 95,
    },
    {
      id: 5,
      image: pr,
      title: "Tropical Breeze",
      name: "Indoor Plants",
      price: 80,
    },
    {
      id: 6,
      image: product,
      title: "Zen Bamboo Grove",
      name: "Indoor Plants",
      price: 90,
    },
  ];

  // Load cart
  useEffect(() => {
    getCart();
  }, []);

  const getCart = async () => {
    const res = await fetch("https://plant-1-4iyl.onrender.com/cart");
    const data = await res.json();
    dispatch(SetCart(data));
  };

  // Add Cart
  const handleAddCart = async (item) => {
    await fetch("https://plant-1-4iyl.onrender.com/addcart", {
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

    getCart();
  };

  // Increase Qty
  const increaseQty = async (id) => {
    await fetch(`https://plant-1-4iyl.onrender.com/increase/${id}`, {
      method: "PUT",
    });

    getCart();
  };

  // Decrease Qty
  const decreaseQty = async (id) => {
    await fetch(`https://plant-1-4iyl.onrender.com/decrease/${id}`, {
      method: "PUT",
    });

    getCart();
  };

  // Delete
  const deleteCart = async (id) => {
    await fetch(`https://plant-1-4iyl.onrender.com/delete/${id}`, {
      method: "DELETE",
    });

    getCart();
  };

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <>
      {/* Product List */}
      <div className="imagegrid">
        {products.map((item) => (
          <div className="card" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <small>{item.name}</small>
            <p>₹{item.price}.00</p>

            <button onClick={() => handleAddCart(item)}>
              Add Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart */}
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
                <p>No products in cart</p>
              ) : (
                cart.map((item) => (
                  <div className="cart-item" key={item._id}>
                    <img src={item.image} alt={item.title} />

                    <div className="cart-info">
                      <p>{item.title}</p>

                      <small>{item.name}</small>

                      <p>₹{item.price}</p>

                      <button
                        onClick={() => increaseQty(item._id)}
                      >
                        +
                      </button>

                      <span>{item.qty}</span>

                      <button
                        onClick={() => decreaseQty(item._id)}
                      >
                        -
                      </button>

                      <button
                        onClick={() => deleteCart(item._id)}
                      >
                        Remove
                      </button>

                      <p>
                        Subtotal : ₹{item.price * item.qty}
                      </p>
                    </div>
                  </div>
                ))
              )}

              <h2>Total : ₹{totalAmount}</h2>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Shop;
