import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

import Products from "../components/data.js";

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
    </main>
  );
};

export default HomePage;
