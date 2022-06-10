import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import "../css/Wallet.css";
import CardList from "@components/CardList";
import Cards from "@components/Cards";
import { simulatedDBArtists } from "@services/api";
import iconCarousel from "../assets/images/carousel-icon.png";
import iconList from "../assets/images/list.png";

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

  // const [CardList, setCardList] = useState([]);

  // useEffect(() => {
  //   const fetchCards = async () => {
  //     const response = await axios("https://api.deezer.com");
  //     setCardList(response.data);
  //     console.log(response.data);
  //   };
  //   fetchCards();
  // }, []);

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
                <img className="h-4 px-2" src={iconCarousel} alt="" />
              )}
              {!cardListButtonName && (
                <img className="h-4 px-2 " src={iconList} alt="" />
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
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none">
          {simulatedDBArtists.map((artist) => (
            <li id={artist.id}>
              <CardList
                img={artist.coverImage}
                project={artist.project}
                artist={artist.name}
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
