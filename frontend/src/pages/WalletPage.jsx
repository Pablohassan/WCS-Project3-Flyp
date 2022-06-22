import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // eslint-disable-line
import { useMediaQuery } from "react-responsive";
import { Virtual, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { FaList as ListViewIcon } from "react-icons/fa";
import { BiCarousel as CarouselViewIcon } from "react-icons/bi";

import { getFlyps } from "@services/api";
import FlypCard from "@components/FlypCard";
import ProjectDetails from "@components/ProjectDetails";
import Modal from "@components/Modal";

import "swiper/css"; // eslint-disable-line
import "swiper/css/virtual"; // eslint-disable-line

export default function WalletPage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [flyps, setFlyps] = useState([]);
  const [view, setView] = React.useState("list");
  const [search, setSearch] = React.useState("");
  const [selectedFlyp, setSelectedFlyp] = React.useState();

  useEffect(() => {
    // document.body.style.overflowY = selectedFlyp ? "hidden" : "auto";
  }, [selectedFlyp]);

  useEffect(() => {
    const fetchContenu = async () => {
      setFlyps(await getFlyps());
    };

    fetchContenu();
  }, []);

  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const switchView = () => {
    setView(view === "list" ? "carousel" : "list");
  };

  return (
    <>
      {selectedFlyp && (
        <Modal onClose={() => setSelectedFlyp(null)}>
          <ProjectDetails
            title={selectedFlyp.flyp}
            description={selectedFlyp.summary}
            artist={selectedFlyp.artist}
            date={selectedFlyp.start}
            image={selectedFlyp.nom_image}
            onClose={() => setSelectedFlyp(null)}
          />
        </Modal>
      )}

      <div className="px-8">
        <div className="flex mb-8">
          <button
            type="button"
            className="mr-2 px-4 ml-2 rounded bg-primary text-white"
            onClick={switchView}
            title={`Vue ${view === "list" ? "caroussel" : "liste"}`}
          >
            {view === "list" ? <CarouselViewIcon /> : <ListViewIcon />}
          </button>

          <input
            className="block"
            type="text"
            placeholder="Rechercher un flyp"
            onChange={onSearch}
          />
        </div>

        {view === "list" && (
          <div className="mx-auto gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {flyps
              .filter(
                (flyp) =>
                  flyp.artist.toLowerCase().includes(search.toLowerCase()) ||
                  flyp.flyp.toLowerCase().includes(search.toLowerCase())
              )
              .map((flyp) => (
                <FlypCard
                  key={flyp.id}
                  image={flyp.nom_image}
                  title={flyp.flyp}
                  artist={flyp.artist}
                  date={flyp.start}
                  onViewDetails={() => setSelectedFlyp(flyp)}
                />
              ))}
          </div>
        )}

        {view === "carousel" && (
          <div className="mx-auto">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y, Virtual]}
              spaceBetween={50}
              slidesPerView={isMobile ? 1 : 3}
              virtual
            >
              {flyps.map((flyp, index) => (
                <SwiperSlide
                  key={flyp.id}
                  virtualIndex={index}
                  className=" display-flex justify-center align-center "
                >
                  <FlypCard
                    image={flyp.nom_image}
                    title={flyp.flyp}
                    artist={flyp.artist}
                    date={flyp.start}
                    onViewDetails={() => setSelectedFlyp(flyp)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>
    </>
  );
}
