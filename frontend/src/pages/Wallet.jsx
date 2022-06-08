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
import CardList from "@components/CardList";
import imgflyp from "../assets/images/blond.png";

export default function Wallet() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);
  const [showCardList, setShowCardList] = useState(false);

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

      {((isMobile && showSearchBar) || !isMobile) && (
        <div className="searchBarDesktop">
          {!isMobile && (
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-l-full h-full"
              onClick={() => setShowCardList(!showCardList)}
            >
              CardList
            </button>
          )}
          <SearchBar mobile={isMobile} />{" "}
        </div>
      )}

      {/* <header className="header-wallet" /> */}
      {!showCardList && (
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
      )}
      {showCardList && <CardList />}

      {isMobile && (
        <Footer
          onclickTrue={() => setShowCardList(true)}
          onclickFalse={() => setShowCardList(false)}
          onToggleSearch={() => setShowSearchBar(!showSearchBar)}
        />
      )}
    </div>
  );
}
