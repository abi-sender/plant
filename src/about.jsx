import './about.css';
import { LuBox } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useState } from "react";



import { FaFacebookF, FaYoutube, FaCreditCard, FaTruck } from "react-icons/fa";
import { IoLogoInstagram, IoBagHandle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
function About()
{
        const [cartOpen, setCartOpen] = useState(false);

return(
<>
<section>
<div className="backgroundimage">
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
<div>
<h3>ABOUT</h3>
<h1>We are Passionate<br></br>  About Our Work</h1>
</div>
</div>
<br></br><br></br>
<div className='provi'>
<div>
<img src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/stats-count.jpg" height={500}></img>
</div>
<div className='group'>
<h1>We strive to provide our  customers with the highest quality</h1>
<p>Urban Jungle Co. was founded in 1960 by a group of plant enthusiasts who <br></br>
recognized the positive impact that plants can have on our lives. Whether<br></br>
it’s purifying the air, reducing stress, or simply adding a touch of beauty to<br></br>
your environment, plants are more than just decoration—they’re a lifestyle.<br></br>       
</p>
<br></br>
<hr></hr>
<br></br>
<p className='ict'>“We love what we do & create partnerships with our clients to ensure their<br></br>
digital transformation is positioned for long-term success.”</p>
<div className='founder'>
<div>
<img src="https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/testimonial.png"></img>
</div>
<div className='he'>
<h4>Karen Lynn</h4>
<p>CEO & Co-founder @ Company</p>
</div>  
</div>
</div>
</div>

<div className='we'>
<div>
<h1>Our Core Values that Drive <br></br>  Everything We Do</h1>
</div>
<div className='box'>
<div className='flex'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Passionate About Work</h4>
<p>Passion for work is a enthusiasm and excitement for what you do.</p>
</div>
</div>  

<div className='flex1'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Creative team members</h4>
<p>A creative team is to design and execute campaigns & encourage</p>
</div>
</div>

<div className='flex2'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Innovation solutions</h4>
<p>Using either completely concepts finding new ways of using existing</p>
</div>
</div> 

<div className='flex3'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Qualitiful products</h4>
<p>Product quality refers to how well a product satisfies our customer</p>
</div>
</div> 

<div className='flex4'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Customer satisfaction</h4>
<p>Happy customers are delighted because of the customer service</p>
</div>
</div>

<div className='flex5'>
<p className='lu-icon'><LuBox size={50} /></p>
<div>
<h4>Simplicity interface</h4>
<p>Simplicity is used loosely to refer to the need to minimize a process</p>
</div>
</div>
</div>
</div>
{/* Our Mission */}
<div className='mission'>
<div className='block'>
<br></br><br></br>
<div>
    <h1>Our Mission</h1>
    <p>Our mission is to make the world a greener place, one plant at a time. We  strive to provide our customers with the highest quality plants  and plant care products, along with the knowledge and support to help them thrive.</p>
</div>
<br></br><br></br>
<div className='check'>
<div className='fa'>
<p className='faicon'><FaCheckCircle /></p>
<p>Quality and Variety</p>
</div>

<div className='fa'>
<p className='faicon'><FaCheckCircle /></p>
<p>Expert Guidance</p>
</div>

<div className='fa'>
<p className='faicon'><FaCheckCircle /></p>
<p>Sustainable Practices</p>
</div>

<div className='fa'>
<p className='faicon'><FaCheckCircle /></p>
<p>Experienced Team</p>
</div>
</div>
</div>
<div className='img'>
    <img src='https://websitedemos.net/generic-ecommerce-02/wp-content/uploads/sites/1526/2025/03/our-mission.jpg' height={480}></img>
</div>
</div>
<section className="ctas-section">
  <div className="overlay1">
    <h2>Ready to Find your Perfect Plant?</h2>

    <p>
      Browse our online store or visit us in person to
      <br />
      experience the beauty of nature.
    </p>

    <button>Shop Now</button>
  </div>
</section>

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
export default About;