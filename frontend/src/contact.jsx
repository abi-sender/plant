import "./contact.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaPhoneAlt } from "react-icons/fa";
import { IoLogoInstagram, IoBagHandle } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";

function Contact() {
  return (
    <>
      <section>
              <div className="backgroundcontact">
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

              <IoBagHandle className="bag-icons" />
            </div>
          </nav>

          <div className="hero-contact">
            <p>CONTACT US</p>
            <h1>Let's Connect</h1>
          </div>
        </div>

        {/* Contact Details */}
        <div className="contact-container">
          <h2>Send Us a Message</h2>

          <div className="phone">
            <div className="phoneicon">
              <FaPhoneAlt />
            </div>

            <div>
              <h4>Phone</h4>
              <p>1234567895</p>
            </div>
          </div>

          <div className="email">
            <div className="mailicon">
              <IoMdMail />
            </div>

            <div>
              <h4>Email</h4>
              <p>mail@example.com</p>
            </div>
          </div>

          <div className="location">
            <div className="locationicon">
              <MdLocationPin />
            </div>

            <div>
              <h4>Address</h4>
              <p>2972 Westheimer Rd, G.N Mills, Coimbatore - 641029</p>
            </div>
          </div>
        </div>
     
     <div className="follow">
        <h1>Follow us @plantora</h1>
        <div>
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

   <section className="find">
  <div className="ready">
    <h2>Ready to Find Your Perfect Plant?</h2>

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





      </section>
    </>
  );
}

export default Contact;