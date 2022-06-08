import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "@components/Card";
import CarousselFly from "@components/CarousselFly";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import "../css/Wallet.css";

import imgflyp from "../assets/images/blond.png";

export default function Wallet() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);
  const cards = [
    {
      key: uuidv4(),
      content: (
        <Link to="/flypcard">
          <Card imagen={imgflyp} />
        </Link>
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];

  return (
    <div>
      <Navbar />

      {((isMobile && showSearchBar) || !isMobile) && <SearchBar />}

      <header className="header-wallet" />
      <div className="">
        <div className="carousel-div">
          <CarousselFly
            cards={cards}
            height="200px"
            width="80%"
            margin="0 auto"
            offset={5}
            showArrows={false}
          />
        </div>
        <div className="baremenubas">
          {isMobile && (
            <Footer onToggleSearch={() => setShowSearchBar(!showSearchBar)} />
          )}
          <section className="section2-wallet">
            <div className="menu-bas1">
              <h3>Caroussel</h3>
            </div>
            <div className="menu-bas2">
              <h3>Liste</h3>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
