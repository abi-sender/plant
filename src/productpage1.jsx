import { useState } from "react";
import { Link } from "react-router-dom";
import "./ProductPage1.css";
import pro from "./assets/product-02.jpg";
import pr from "./assets/product-03.jpg";
import product from "./assets/product-01.jpg";

function ProductPage1() {
   const [activeTab, setActiveTab] = useState("description");
     const addToCart = () => {
    alert("Starlight Succulent has been added to your cart!");
  };

  return (
    <section>
    <div className="product1-container">
      <div className="product1-image">
        <img src={pro} alt="Plant" />
      </div>

      <div className="product1-details">
        <p className="breadcrumb1">
        <Link to='/'> Home </Link>/ <Link to='/'> Indoor Plants</Link> / Starlight Succulent

        </p>

        <p className="category1">Indoor Plants</p>

        <h1>Starlight Succulent</h1>

        <h2>$95.00 & Free Shipping</h2>

        <p className="description1">
          Faucibus lacus tincidunt molestie accumsan nibh non odio aenean
          molestie purus tristique sed tempor consequat risus tellus amet
          augue egestas mauris scelerisque donec ultrices.
        </p>

        <p className="description1">
          Sollicitudin facilisis massa pellentesque in ultrices enim nunc ac
          egestas elementum ut in ornare sit malesuada.
        </p>

        <div className="cart-section1">
          <input type="number" defaultValue="1" min="1" />
        <button onClick={addToCart}>Add to cart</button>
        </div>

        <hr />

        <p className="category-text1">
          Category: <span>Indoor Plants</span>
        </p>

        <div className="checkout-box1">
          <h3>Guaranteed Safe Checkout</h3>

          <div className="cards1">
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
    <div className="tabs-container1">
            <div className="tabs-header1">
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
    
            <div className="tab-content1">
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
                <div className="review-section1">
                  <p className="yet1">There are no reviews yet.</p>
    
                  <div className="review-box1">
                  <h2>Be the first to review "Starlight Succulent"</h2>    
                    <p>
                      Your email address will not be published. Required fields are
                      marked *
                    </p>
                    <div className="label1">
                    <label className="rating1">Your rating *</label>
                    <div className="stars1">☆☆☆☆☆</div>
                    </div>
    
                    <label className="review1">Your review *</label>
                    <textarea rows="6"></textarea>
    
                    <div className="input-row1">
                      <div>
                        <label className="review1">Name *</label>
                        <input type="text" />
                      </div>
    
                      <div>
                        <label className="review1">Email *</label>
                        <input type="email" />
                      </div>
                    </div>
    
                    <div className="checkbox1">
                      <input type="checkbox" />
                      <span>
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </span>
                    </div>
    
                    <button className="submit-btn1">Submit</button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="relatedproducts1">
         <h1>Related products</h1>
         <br></br><br></br>
         <div className="related1">
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

export default ProductPage1;