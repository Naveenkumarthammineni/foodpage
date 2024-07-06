import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className='image_1' src={assets.logo} alt=""/>
                <p>"© Tasty Table, where every bite tells a story and every meal is a memorable experience."</p>  
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""/>
                    <img src={assets.twitter_icon} alt=""/>
                    <img src={assets.linkedin_icon} alt=""/>
                </div>
            </div>
            <div className="footer-content-center">
                 <h2>COMPANY</h2>
                 <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privicy policy</li>
                 </ul>
            </div>
            <div className="footer-content-right">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>+91 8978989066</li>
                    <li>Contact@masterchef.com</li>
                  </ul>
            </div>
        </div>
         <hr/>
         <p className="footer-copyright"></p>
    </div>
  )
}

export default Footer