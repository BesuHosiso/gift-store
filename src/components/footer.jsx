import React from 'react'
import Logo from './logo.jsx';
import '../App.css';

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <div className='footer-left'>
                <Logo />
                <p>The ultimate destination for premium tech gifts. We help you find the perfect electronic companions for your loved ones.</p>
                {/* <div>
                    I will put Links here
                </div> */}
            </div>
            <div className='footer-right'>
                <div className='page-links'>
                  <h5>Page Links</h5>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
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