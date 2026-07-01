import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import product from "./assets/product-01.jpg";
import pr from "./assets/product-03.jpg";


function ProductPage() {
  const [activeTab, setActiveTab] = useState("description");
 const[quantity,setQuantity]=useState(1);
  const [addcart,setAddcart]=useState(0);
  

  return (
    <section>
      <div className="product-container">
        <div className="product-image">
          <img src={product} alt="Plant" />
        </div>

        <div className="product-details">
          <p className="breadcrumb">
            <Link to="/">Home</Link> /
            <Link to="/"> Indoor Plants </Link> /
            Zen Bamboo Grove
          </p>

          <p className="category">Indoor Plants</p>

          <h1>Zen Bamboo Grove</h1>

          <h2>
            $90.00 <span>& Free Shipping</span>
          </h2>

          <p className="description">
            Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
            molestie purus tristique sed tempor consequat risus tellus amet
            augue egestas mauris scelerisque donec ultrices.
          </p>

          <p className="description">
            Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac
            egestas elementum ut in ornare sit malesuada.
          </p>

          <div className="cart-section">
<input  type="number"  value={quantity}
  min="1"
  onChange={(e) => setQuantity(Number(e.target.value))}
/>            <button onClick={()=>setAddcart(addcart + quantity)}>Add to cart</button>
          </div>

          <hr />

          <p className="category-text">
            Category: <span>Indoor Plants</span>
          </p>

          <div className="checkout-box">
            <h3>Guaranteed Safe Checkout</h3>

            <div className="cards">
              <img
                src="https://tse1.mm.bing.net/th/id/OIP.5n0JmezFeOK4F7yptVeZawHaEK?cb=thfc1falcon&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Visa"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                alt="MasterCard"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg"
                alt="Amex"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={activeTab === "description" ? "active" : ""}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          <button
            className={activeTab === "reviews" ? "active" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews (0)
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "description" && (
            <div>
              <p>
                Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
                molestie purus tristique sed tempor consequat risus tellus amet
                augue egestas mauris scelerisque donec ultrices.
              </p>

              <p>
                Tincidunt mauris, pharetra aliquam in magnis ornare sit mi
                velit, quis semper ut a malesuada pharetra volutpat euismod
                vulputate pellentesque et risus in malesuada pellentesque
                dictumst amet vitae vitae ut phasellus quam et enim feugiat eget
                mauris aenean eu volutpat.
              </p>

              <p>
                Sollicitudin facilisis massa pellentesque in ultrices enim nunc
                ac egestas elementum ut in ornare sit malesuada.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="review-section">
              <p className="yet">There are no reviews yet.</p>

              <div className="review-box">
                <h2>Be the first to review "Zen Bamboo Grove"</h2>

                <p>
                  Your email address will not be published. Required fields are
                  marked *
                </p>
                <div className="label">
                <label className="rating">Your rating *</label>
                <div className="stars">☆☆☆☆☆</div>
                </div>

                <label className="review">Your review *</label>
                <textarea rows="6"></textarea>

                <div className="input-row">
                  <div>
                    <label className="review">Name *</label>
                    <input type="text" />
                  </div>

                  <div>
                    <label className="review">Email *</label>
                    <input type="email" />
                  </div>
                </div>

                <div className="checkbox">
                  <input type="checkbox" />
                  <span>
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </span>
                </div>

                <button className="submit-btn">Submit</button>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="relatedproducts">
     <h1>Related products</h1>
     <br></br><br></br>
     <div className="related">
      <div>
        <img src={pr}></img>
        <h4>Tropical Breeze</h4>
        <small>Indoor Plants</small>
        <p>$80.00</p>
      </div>
       <div>
        <img src={product}></img>
        <h4>Zen Bamboo Grove</h4>
        <small>Indoor Plants</small>
        <p>$90.00</p>
      </div> <div>
        <img src={pr}></img>
        <h4>Silver Mist</h4>
        <small>Indoor Plants</small>
        <p>$92.00</p>
      </div>
     </div>
      </div>

      
    </section>
  );
}

export default ProductPage;