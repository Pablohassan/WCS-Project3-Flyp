import React, { useState, useEffect, Swiper, SwiperSlide } from "react";
import { useMediaQuery } from "react-responsive";
import { Virtual, Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { getContenu } from "@services/api";
import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import CardList from "@components/CardList";
import FlypCard from "@components/FlypCard";

import iconCarousel from "@assets/images/carousel-icon.png";
import iconList from "@assets/images/list.png";
import "../css/FlypCard.css";

export default function WalletPage({
  project,
  artist,
  lancement,
  descriptif,
  imgflyp,
}) {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);
  const [showCardList, setShowCardList] = useState(true);
  const [cardListButtonName, setCardListButtonName] = useState(false);
  const [newCardList, setNewCardList] = useState([]);
  const [showModal, setShowModal] = React.useState(false);

  useEffect(() => {
    const fetchContenu = async () => {
      const dbArtists = await getContenu();
      setNewCardList(dbArtists);
    };

    fetchContenu();
  }, []);

  function cardListShow() {
    setShowCardList(!showCardList);
  }
  function switchListToCaroussel() {
    setCardListButtonName(!cardListButtonName);
  }

  return (
    <div className="Wallet-main">
      <Navbar />
      {((isMobile && showSearchBar) || !isMobile) && (
        <div
          className="searchBarDesktop with-2/3 margin-0 
        "
        >
          {!isMobile && (
            <button
              className="boutonList h-20"
              type="button"
              onClick={() => {
                switchListToCaroussel();
                cardListShow();
              }}
            >
              {cardListButtonName && (
                <img className="h-7 px-3" src={iconCarousel} alt="" />
              )}
              {!cardListButtonName && (
                <img className="h-7 px-3 " src={iconList} alt="" />
              )}
            </button>
          )}
          <SearchBar />
        </div>
      )}
      {!showCardList && !isMobile && (
        <div className={`mx-auto  ${showSearchBar ? `mt-28` : `mt-56`}`}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
            spaceBetween={50}
            slidesPerView={3}
            virtual
          >
            {newCardList.map((slideContent, index) => (
              <SwiperSlide
                key={slideContent.id}
                virtualIndex={index}
                className=" display-flex justify-center align-center "
              >
                <img
                  src={slideContent.nom_image}
                  alt="projet-blond"
                  className=" mx-auto  "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {isMobile && !showCardList && (
        <div className={`mx-auto  ${showSearchBar ? `mt-28` : `mt-56`}`}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
            spaceBetween={50}
            slidesPerView={1}
            virtual
          >
            {newCardList.map((slideContent, index) => (
              <SwiperSlide
                onClick={() => setShowModal(true)}
                key={slideContent.id}
                virtualIndex={index}
                className=" display-flex justify-center align-center "
              >
                <img
                  src={slideContent.nom_image}
                  alt="projet-blond"
                  className=" mx-auto  "
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {isMobile && !showCardList && showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed top-0 right-2 left-2 inset-16 z-50 outline-none focus:outline-none">
            <div className="relative w-full h-1/3 my-6 mx-auto max-w-3xl top-0">
              <div
                // style={{ backgroundImage: ` url(${img}) ` }}
                className="bg-cover bg-blue-600 bg-opacity-[0.4] bg-center bg-no-repeat mx-auto  border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full max-w-sm outline-none focus:outline-none   h-200 "
              >
                <FlypCard
                  className="flypcard max-w-s  mx-auto "
                  descriptif={descriptif}
                  img={imgflyp}
                  project={project}
                  artist={artist}
                  date={lancement}
                />

                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t backdrop-blur-lg">
                  <h3 className="text-xl  w-full font-semibold shadow-neutral-300">
                    {artist}
                    <p className="text-3xl shadow-neutral-300">{project}</p>
                  </h3>
                  <h3>
                    <br />
                    <p className="shadow-white-2xl">
                      Drop du projet :{lancement}
                    </p>
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-2xl leading-none font-semibold outline-none focus:outline-none backdrop-blur-2xl"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none backdrop-blur-2xl" />
                  </button>
                </div>

                <div className="mt-6 text-l bg-blend-saturation relative p-4 flex-auto drop-shadow-black backdrop-blur-2xl text-black-200 dark:text-black-400">
                  {descriptif}
                  <p className="my-2 text-slate-500 text-lg leading-relaxed backdrop-blur-2xl" />
                </div>

                <div className=" flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b backdrop-blur-2xl">
                  <button
                    className="bg-blue-400 text-white active:bg-blue-500 font-bold uppercase text-sm px-4 py-2 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 backdrop-blur-lg"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close Description
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}

      {showCardList && (
        <div
          className={`mx-auto grid w-2/3 md:w-4/5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 list-none  ${
            showSearchBar ? `mt-0` : `mt-28`
          }`}
        >
          {newCardList.map((cardList) => (
            <li key={cardList.id} className="mb-20 min-w-[200px]">
              <CardList
                img={cardList.nom_image}
                project={cardList.flyp}
                artist={cardList.artist}
                lancement={cardList.start}
                descriptif={cardList.summary}
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
