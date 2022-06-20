import React, { useEffect, useState } from "react";

export default function flypCard({ imgflyp, descriptif, lancement, artist }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (e.path[0].tagName !== "BUTTON") {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="container-wallet">
      <section className={`cardfocus${isOpen ? "open " : "closed w-full"}`}>
        <div className="flycard w-[100%] h-[250px]  cursor-pointer group perspective">
          <div />
          <div className="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full delay-1000 duration-1000">
            <div className="absolute backface-hidden rounded-xl border-1 w-full h-200">
              <img
                src={imgflyp}
                alt="projet-blond"
                className=" rounded-xl w-full "
              />
            </div>
            <div className="absolute my-rotate-y-180 rounded-xl backface-hidden translate-x-' w-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-2xl translate-y-4 font-semibold">
                  {artist}
                </h1>
                <p className="my-2 translate-y-6 text-sm">{lancement}</p>
                <p className="translate-y-4 text-sm max-h-[200px] ">
                  {descriptif}
                </p>

                <button
                  onClick={() => setIsOpen((prev) => !prev)}
                  type="button"
                  className="bg-teal-500 text-sm translate-y-16 px-4 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125"
                >
                  test
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className={`dropdown${isOpen ? "open" : "closed"}`}>
        <div className="bgfrank">
          <div className="container-desc ">
            <header className="frankhead ">
              <div className="boutondiv">
                <Link to="/wallet">
                  <button
                    type="button"
                    className="btn bg-transparent hover:bg-red-300  font-semibold hover:text-white py-2 px-4 border border-red-100 hover:border-transparent rounded-xl"
                  >
                    Return
                  </button>
                </Link>
              </div>
              <h3 className="desc-flyp">LOREM IPSUM</h3>
              <h1 className="titre-desc-flyp">LOREM</h1>
            </header>
            <div>vues : 13265</div>
            <hr />
            <div>
              <h3> Lorem ipsum </h3>
              <h2>Lorem</h2>
              <h4>
                ipsum dolor sit amet consectetur adipisicing elit. Incidunt
                consequuntur neque nihil, eius optio, architecto, eaque odit a
                iste
              </h4>

              <h3>5 TITRES</h3>
              <h4>Lorem ipsum </h4>

              <h4>Dolor sit</h4>
              <h4>Consectetur adipisicing elit</h4>
              <h4> Dolor nihil dolore corporis</h4>
              <h4>Tempora officiis placeat</h4>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
