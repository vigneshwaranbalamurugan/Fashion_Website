import React from 'react'
import logo from '../components/assets/fa-logo.png'
import { FiSearch } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
const Header = () => {
  return (
    <nav>
        <div className="top_navbar_items">
            <div className="logo_div">
                <img src={logo} alt="" />
            </div>
            <div className="serach_field">
                <input type="text" placeholder='Search for Products' />
                <FiSearch className='sicon'/>
            </div>
            <div className="user_account_field flex">
                <div className="profile">
                <AiOutlineUser className='picon'/>
                </div>
                <div className="pd">
                    <p>Hello, Sign in</p>
                    <h5>My Account</h5>
                </div>
            </div>
        </div>
        <div className="bootom_navbar_items">
            <ul>
                <li>Categorys</li>
                <li>Home</li>
                <li>Kids</li>
                <li>Men</li>
                <li>Women</li>
                <li>Offers</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Header