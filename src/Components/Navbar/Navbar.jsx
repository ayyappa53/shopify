import React, { useContext, useState } from "react";
import "./Navbar.css";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMobile, setIsmobile] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    const toggleMobileMenu = () => {
        setIsmobile(!isMobile);
    };

    const closeMobileMenu = () => {
        setIsmobile(false);
    };

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>SHOPIFY</p>
            </div>
            <ul  className={isMobile ? "nav-link-mobile" : "nav-menu"} onClick={closeMobileMenu}>
                <li onClick={() => { setMenu("shop") }}> <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <button className='mobile-menu-icon' onClick={toggleMobileMenu}>
                {isMobile ? <FaTimes /> : <FaBars />}
            </button>
        </div>
    )
}

export default Navbar;
