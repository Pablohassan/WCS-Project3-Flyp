import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import "../css/Wallet.css";
import CardList from "@components/CardList";
import Cards from "@components/Cards";

export default function Wallet() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);
  const [showCardList, setShowCardList] = useState(false);
  const [cardListButtonName, setCardListButtonName] = useState(false);

  function switchListToCaroussel() {
    setCardListButtonName(!cardListButtonName);
  }
  function cardListShow() {
    setShowCardList(!showCardList);
  }

  return (
    <div>
      <Navbar />

      {((isMobile && showSearchBar) || !isMobile) && (
        <div className="searchBarDesktop">
          {!isMobile && (
            <button
              type="button"
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold px-4 rounded-l-full h-1,75"
              onClick={() => {
                switchListToCaroussel();
                cardListShow();
              }}
            >
              {cardListButtonName && <p>Caroussel</p>}
              {!cardListButtonName && <p>CardList</p>}
            </button>
          )}
          <SearchBar mobile={isMobile} />{" "}
        </div>
      )}

      {/* <header className="header-wallet" /> */}
      {!showCardList && (
        <div className="carousel-div">
          <div className="App">
            <div className="exemplecss translate-x-16">
              <div className="md:hidden">
                <Cards orientation="vertical" />
              </div>

              <div className="hidden md:block">
                <Cards orientation="horizontal" />
              </div>
            </div>
          </div>
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
