import React from "react";
import { AiFillFacebook } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer-details">
        <div className="col column1">
          <h1>V-SQUAD</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            soluta iure, inventore sit repudiandae
          </p>
          <p>vsquad@gmail.com</p>
          <p>+91 9343 4343 3434</p>
        </div>
        <div className="col">
          <h2>Information</h2>
          <ul>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
            <li>Home & Living</li>
            <li>Beauty</li>
          </ul>
        </div>
        <div className="col">
          <h2>Explore</h2>
          <ul>
            <li>Blog</li>
            <li>Gift Cards</li>
            <li>Finacing</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="col">
          <h2>Contact Us</h2>
          <ul>
            <li>FAQ</li>
            <li>Track Orders</li>
            <li>Shipping</li>
            <li>Cancellation</li>
            <li>Returns</li>
          </ul>
        </div>
        <div className="col">
          <h2>Support</h2>
          <ul>
            <li>Help Center</li>
            <li>News</li>
            <li>Career</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
      <div className="bottom-footer-details flex">
        <p>&copy; 2024 V-SQUAD, all Rights Reserved</p>
        <p>Privacy Policy | Terms & Conditions</p>
        <div className="icons_field">
          <ul>
            <li><AiFillFacebook /></li>
            <li><FaLinkedin /></li>
            <li><FaInstagramSquare /></li>
            <li><FaYoutube /></li>
            <li><FaTelegram /></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
