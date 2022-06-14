import React, { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { getContenu } from "@services/api";

import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import CardList from "@components/CardList";
import Cards from "@components/Cards";
import iconCarousel from "../assets/images/carousel-icon.png";
import iconList from "../assets/images/list.png";

import "../css/Wallet.css";

export default function Wallet() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);
  const [showCardList, setShowCardList] = useState(false);
  const [cardListButtonName, setCardListButtonName] = useState(false);
  const [newCardList, setNewCardList] = useState([]);

  useEffect(() => {
    const fetchContenu = async () => {
      const dbArtists = await getContenu();
      setNewCardList(dbArtists);
    };

    fetchContenu();
  }, []);

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
              onClick={() => {
                switchListToCaroussel();
                cardListShow();
              }}
            >
              {cardListButtonName && (
                <img className="h-4 px-2 mt-28" src={iconCarousel} alt="" />
              )}
              {!cardListButtonName && (
                <img className="h-4 px-2 mt-28 " src={iconList} alt="" />
              )}
            </button>
          )}
          <SearchBar />
        </div>
      )}
      {!showCardList && (
        <div className="carousel-div">
          <div className="App">
            <div className="md:hidden">
              <Cards orientation="vertical" />
            </div>

            <div className="hidden md:block">
              <Cards orientation="horizontal" />
            </div>
          </div>
        </div>
      )}
      {showCardList && (
        <div
          className={`mx-auto grid w-2/3 md:w-4/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none ${
            showSearchBar ? `mt-0` : `mt-28`
          }`}
        >
          {newCardList.map((artist) => (
            <li id={artist.id}>
              <CardList
                img={artist.coverImage}
                project={artist.flyp}
                artist={artist.artist}
              />
            </li>
          ))}
        </div>
      )}

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
