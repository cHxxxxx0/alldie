import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div><img src="https://www.allonline.7eleven.co.th/media/i/Strip-Code-midmonth-(12-16-Feb-23)-195214-0.jpg" alt="" height={149.99}/>
    
    <div><img src="https://www.allonline.7eleven.co.th/1523c9f77853e87958adda06f7de38de9f8caf21/assets/7online/images/logo.png" alt="" />
    <div className="navbar">
  <div className="links">
        <Link to="/"> หน้าแรก </Link>
        <Link to="/all"> รายการสินค้า </Link>
        <Link to="/"> เข้าสู่ระบบ </Link>
        <Link to="/"> สมัครสมาชิก </Link>
        <Link to="/cart">
          <ShoppingCart size={30} />
        </Link>
      </div>
    </div>
    </div>
    </div>
  );
};
//สุทิวัส