import { useState } from "react";
import { Link } from "react-router-dom";

export default function Burger() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const hideBurger = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="flex items-center justify-between ">
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <button
            type="button"
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={hideBurger}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600" />
          </button>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <button
              type="button"
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col justify-center items-center justify-between min-h-[250px] w-full ">
              <li className=" flex justify-center border-b border-gray-400 my-8 uppercase hover:bg-gray-600/50 w-full my-0 h-20 active:bg-gray-600/50">
                <Link
                  className="w-full items-center flex justify-center"
                  to="/wallet"
                  onClick={hideBurger}
                >
                  Wallet
                </Link>
              </li>
              <li className="flex justify-center border-b border-gray-400 my-8 uppercase hover:bg-gray-600/50 w-full my-0 h-20 active:bg-gray-600/50">
                <Link
                  className=" w-full flex items-center justify-center "
                  to="/project"
                  onClick={hideBurger}
                >
                  Projet
                </Link>
              </li>
              <li className="flex justify-center  border-b border-gray-400 my-8 uppercase hover:bg-gray-600/50 w-full my-0 h-20 active:bg-gray-600/50">
                <Link
                  className="w-full flex items-center justify-center"
                  to="/top"
                  onClick={hideBurger}
                >
                  Top
                </Link>
              </li>
              <li>
                <img
                  className="rounded-full  h-20 w-20 mr-2 mt-5"
                  src=".\src\assets\ProfilPic.jpg"
                  alt="ProfilPic"
                />
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <Link to="/wallet">Wallet</Link>
          </li>
          <li>
            <Link to="/project">Project</Link>
          </li>
          <li>
            <Link to="/top">Top</Link>
          </li>
        </ul>
      </nav>
      <style>{`
        .hideMenuNav {
          display: none;
        }
        .showMenuNav {
          display: block;
          position: absolute;
          width: 100%;
          height: 100vh;
          top: 0;
          left: 0;
          background: white;
          z-index: 10;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
