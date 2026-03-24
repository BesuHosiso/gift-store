import React from 'react'
import Logo from './logo.jsx';
import '../App.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <div className='footer-left'>
                <Logo />
                <p>The ultimate destination for premium tech gifts. We help you find the perfect electronic companions for your loved ones.</p>
                <div className='social-section'>
                  <h5>Follow us</h5>
                  <ul className='social-links'>
                    <li>
                      <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Visit us on Instagram">
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.2.1 4.7 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.7-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.2-.1-4.7-1.7-4.9-4.9-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-3.2 1.7-4.7 4.9-4.9 1.3-.1 1.7-.1 4.9-.1Zm0 1.8c-3.1 0-3.4 0-4.6.1-2.3.1-3.3 1.2-3.4 3.4-.1 1.2-.1 1.5-.1 4.6s0 3.4.1 4.6c.1 2.3 1.2 3.3 3.4 3.4 1.2.1 1.5.1 4.6.1s3.4 0 4.6-.1c2.3-.1 3.3-1.2 3.4-3.4.1-1.2.1-1.5.1-4.6s0-3.4-.1-4.6c-.1-2.3-1.2-3.3-3.4-3.4-1.2-.1-1.5-.1-4.6-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.1-2.2a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Visit us on Facebook"> 
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M13.5 21.5v-8h2.7l.4-3.1h-3.1V8.3c0-.9.2-1.6 1.5-1.6h1.6V3.9c-.8-.1-1.6-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.4v3.1H10v8h3.5Z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.x.com" target="_blank" rel="noreferrer" aria-label="Visit us on X"> 
                        <svg viewBox="0 0 24 24" role="img" aria-hidden="true">
                          <path d="M18.8 3h2.9l-6.4 7.3 7.5 10.7h-5.9l-4.6-6.5-5.7 6.5H3.7l6.8-7.8L3.3 3h6l4.1 5.8L18.8 3Zm-1 16.3h1.6L8.4 4.6H6.7l11.1 14.7Z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
            </div>
            <div className='footer-right'>
                <div className='page-links'>
                  <h5>Page Links</h5>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                  </ul>
                </div>
                <div className='page-links'>
                    <h5>Support</h5>
                    <ul>
                    <li><a href="/">Track Order</a></li>
                    <li><a href="/products">Shipping Policy</a></li>
                    <li><a href="/about">Returns & Funds</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                  </ul>
                </div>
            </div>
        </div>
        <hr></hr>
        <div className='footer-bottom'>
            <p>© 2026 Gift Store. All rights reserved.</p>
            <div className='terms-privacy'>
                <a href="/">Terms of Service</a>
                <a href="/products">Privacy Policy</a>
            </div>
        </div>
    </footer>
  )
}

export default Footer;