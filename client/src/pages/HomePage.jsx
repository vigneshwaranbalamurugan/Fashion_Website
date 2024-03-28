import React, { useEffect, useState } from "react";
import img1 from "../components/assets/jacket1.png";
import img2 from "../components/assets/man1.png";
import img3 from "../components/assets/girl1.png";
import { FiArrowRight } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { BsArrowRightCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

import i1 from "../components/assets/jacket2.png";
import i2 from "../components/assets/shoe.png";
import i3 from "../components/assets/perfume.png";
import i4 from "../components/assets/watch.png";
import i5 from "../components/assets/handbag.png";
import i6 from "../components/assets/shoe2.png";

import shoe1 from "../components/assets/shoe3.png";
import shoe2 from "../components/assets/shoe4.png";
import shoe3 from "../components/assets/shoe5.png";
import shoe4 from "../components/assets/shoe6.png";

import perfume1 from "../components/assets/perfume (1).png";
import perfume2 from "../components/assets/perfume (2).png";
import perfume3 from "../components/assets/perfume (3).png";
import perfume4 from "../components/assets/perfume (4).png";
import perfume5 from "../components/assets/perfume (5).png";

import { Products, Hoodies, Brands, GirlsDress } from "../components/data.js";

import hoodieMen from "../components/assets/hoodieman.png";

import Banner3 from "../components/assets/banner3.png";
import girlImg from "../components/assets/girlimg.png"
import offerImg from '../components/assets/offerImg.png'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarOutline } from "react-icons/md";

import { MdFavoriteBorder } from "react-icons/md";

const HomePage = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const Cimages = [i1, i2, i3, i4, i5, i6];

  const Offers = [
    {
      id: 1,
      name: "BRAND NEW JACKET COLLECTIONS ARIVED",
      image: img1,
      bg: "#000",
    },
    {
      name: "INTRODUCTION OUR NEW WINTER COLLECTIONS",
      image: img2,
      bg: "#666D74",
    },
    {
      name: "BEST COLLECTION OF YEARS",
      image: img3,
      bg: "linear-gradient(to top left,#FEAA9D,#fa7763)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % Offers.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [Offers.length]);

  const handlePrevClick = () => {
    setCurrentOfferIndex(
      (prevIndex) => (prevIndex - 1 + Offers.length) % Offers.length
    );
  };

  const handleNextClick = () => {
    setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % Offers.length);
  };

  return (
    <main>
      <section
        className="swipper_field flex"
        style={{ background: Offers[currentOfferIndex].bg }}
      >
        <div className="details-about">
          <h1>{Offers[currentOfferIndex].name}</h1>
          <p>Up to 10% off</p>
          <button className="shop_now">
            Shop Now <FiArrowRight className="right-arrow-icons" />
          </button>
        </div>
        <div className="image_container">
          <img src={Offers[currentOfferIndex].image} alt="" />
        </div>
        <div className="next-prev-buttons">
          <BsArrowLeftCircle className="prev-icon" onClick={handlePrevClick} />
          <BsArrowRightCircle className="next-icon" onClick={handleNextClick} />
        </div>
      </section>

      <section className="categorys sections">
        <h2>Top Categorys</h2>
        <div className="categorys_items">
          {Cimages.map((img, index) => (
            <div className="cate_img_field">
              <img key={index} src={img} alt="image" />
            </div>
          ))}
        </div>
      </section>

      <section className="shoes sections">
        <h2>Brand New Shoes</h2>
        <div className="categorys_items">
          <div className="left_section">
            <div className="bg_div">
              <img src={i2} alt="" />
            </div>
          </div>
          <div className="right_sections">
            <div className="shoes_field">
              <div>
                <img src={shoe1} alt="" />
              </div>
              <div>
                <img src={shoe2} alt="" />
              </div>
            </div>
            <div className="shoes_field">
              <div>
                <img src={shoe3} alt="" />
              </div>
              <div>
                <img src={shoe4} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="offer-banner">
        <h1>60%</h1>
        <div>
          <h2>Offer On Below Products</h2>
          <p>Don't Miss it</p>
        </div>
      </section>

      <section className="offer_section">
        <h2>Top Collections</h2>
        <div className="categorys_items">
          {Products.map((product, index) => (
            <div className="product_card" key={index}>
              <img src={product.image} alt="" />
              <div className="product_details">
                <h3>Nike Zenvy Rib</h3>
                <p>{product.detail}</p>
                <p className="cost">{product.cost}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="Hoodie-offer">
        <img src={hoodieMen} alt="" className="men" />
        <div>
          <h1>New Hoodies Collection</h1>
          <button className="shop_now">
            Shop Now <FiArrowRight className="right-arrow-icons" />
          </button>
        </div>
      </section>

      <section className="hoodies_section">
        <div className="categorys_items">
          {Hoodies.map((hoodie, index) => (
            <div className="product_card" key={index}>
              <img src={hoodie.image} alt="" />
              <div className="product_details">
                <h3>Hoodies & Sweatshits</h3>
                <p>{hoodie.detail}</p>
                <div className="cost-rating flex">
                  <span>
                    <p>{hoodie.cost}</p>
                    <p style={{ textDecoration: "line-through" }}>$40</p>
                  </span>
                  <div className="rating-stars">
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStar />
                    <MdOutlineStarOutline />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shoes sections perfume_section">
        <h2>Brand New Perfumes</h2>
        <div className="categorys_items">
          <div className="left_section">
            <div className="bg_div">
              <img src={perfume3} alt="" />
            </div>
          </div>
          <div className="right_sections">
            <div className="shoes_field perfumes">
              <div>
                <img src={perfume1} alt="" />
              </div>
              <div>
                <img src={perfume2} alt="" />
              </div>
            </div>
            <div className="shoes_field perfumes">
              <div>
                <img src={perfume4} alt="" />
              </div>
              <div>
                <img src={perfume5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="special_offers">
        <img src={offerImg} alt="" />
        <img src={girlImg} alt="" />
      </section>


      <section className="girls_fashion">
        <h1>New Arrivals</h1>
        <div className="products-div">
          {GirlsDress.map((dress, index) => (

            <div className="product-card">
              <img src={dress.image} alt="" />
              <MdFavoriteBorder className='favorite-icon' />
              <h1>Khushal k</h1>
              <p>{dress.detail}</p>
              <div className="cost-rating">
                <span>
                  <p>{dress.cost}</p>
                  <p style={{ textDecoration: "line-through" }}>$40</p>
                </span>
                <div className="rating-stars">
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStar />
                  <MdOutlineStarOutline />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shop_bybrand_section">
        <h1>Shop By Brand</h1>
        <div className="logo_field">
          {Brands.map((logo) => (
            <div className="logo_item">
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </section>


    </main>
  );
};

export default HomePage;
