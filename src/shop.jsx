import './shop.css';
import product from "./assets/product-01.jpg";
import pro from "./assets/product-02.jpg";
import pr from "./assets/product-03.jpg";
import p from "./assets/product-04.jpg";
import du from "./assets/product-05.jpg";
import { Link } from "react-router-dom";

import { FaFacebookF, FaYoutube, FaCreditCard, FaTruck } from "react-icons/fa";
import { IoLogoInstagram, IoBagHandle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";
function Shop()
{
    return(
<>
<section>
<div className="shop">
 <nav>
            <div className="logo">
              <Link to="/">URBAN JUNGLE CO.</Link>
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

              <IoBagHandle className="bag-icons" />
            </div>
          </nav>
<h1>Shop</h1>
</div>
<div className='res'>
    <div>
    <p>Showing all 6 results</p>
    </div>
    <diV>
    <select>
    <option>Default sorting</option>
    <option>Sort by popularity</option>
    <option>Sort by average rating</option>
    <option>Sort by latest</option>
    <option>Sort by price: low to high</option>
    <option>Sort by price: high to low </option>
    </select>
    </diV>
</div>
<div className='imagegrid'>
    <div>
    <img src={du}></img>
    <h2>Desert Bloom</h2>
    <small>Indoor Plants</small>
    <p>$70.00</p>
    <button>Add card</button>
    </div>

    <div>
    <img src={p}></img>
    <h2>Golden Glow</h2>
    <small>Indoor Plants</small>
    <p>$85.00</p>
    <button>Add card</button>
    </div>

    <div>
    <img src={pr}></img>
    <h2>Silver Mist</h2>
    <small>Indoor Plants</small>
    <p>$92.00</p>
    <button>Add card</button>
    </div>
    
    <div>
    <img src={pro}></img>
    <h2>Starlight Succulent</h2>
    <small>Indoor Plants</small>
    <p>$95.00</p>
    <button>Add card</button>
    </div>
    
    <div>
    <img src={pr}></img>
    <h2>Tropical Breeze</h2>
    <small>Indoor Plants</small>
    <p>$80.00</p>
    <button>Add card</button>
    </div>

    <div>
    <img src={product}></img>
    <h2>Zen Bamboo Grove</h2>
    <small>Indoor Plants</small>
    <p>$90.00</p>
    <button>Add card</button>
    </div>
</div>
<br></br><br></br>

<div className='your'>
<div>
<h1>Ready to Find your Perfect Plant?</h1>
<p>Browse our online store or visit us in person to<br></br>
experience the beauty of nature.</p>
<button>Shop Now</button>
</div>
</div>
<footer className="footer">
      <div className="footer-top">
        <div className="logo">
          
          <h2>URBAN JUNGLE CO.</h2>
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



</section>
</>
);
}
export default Shop;