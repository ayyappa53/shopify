import React from "react"
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>SHOPIFY</p>
      </div>
        <ul className="footer-links">
          <li>Shopify</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li><a className="link" href="https://wa.me/7396933969" style={{textDecoration:"none"}}>Contact</a></li>
        </ul>
        <div className="footer-social-icon">
          <div className="footer-icons-containers">
            <img src={instagram_icon} alt="" />
            <img src={pintester_icon} alt="" />
            <img src={whatsapp_icon} alt="" />
          </div>
          <div className="footer-icons-containers">
            <img src={pintester_icon} alt="" />
          </div>
          <div className="footer-icons-containers">
            <a href="https://wa.me/7396933969"><img src={whatsapp_icon} alt="" /></a>
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
    </div>
  )
}
export default Footer