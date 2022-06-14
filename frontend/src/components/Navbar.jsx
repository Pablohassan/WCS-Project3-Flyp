import { Link } from "react-router-dom";
import Burger from "./Burger";

export default function Navbar() {
  return (
    <nav className="bg-neutral-50 shadow-lg fixed top-0 right-0 left-0 z-20">
      <div className="max-w-none mx-auto px-4 h-50 ">
        <div className="flex justify-between ">
          <div className="flex space-x-7 ">
            <div>
              <Link to="/" className="flex items-center py-4 px-0">
                <img
                  src=".\src\assets\Logofly.png"
                  alt="Logo"
                  className="h-20 w-20 mr-2"
                />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-10 justify-start">
              <Link
                to="/wallet"
                className="py-4 px-2 text-red-500 border-b-4 border-red-500 font-semibold "
              >
                Wallet
              </Link>
              <Link
                to="/project"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-red-900 transition duration-300"
              >
                Project
              </Link>
              <Link
                to="/top"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-red-900 transition duration-300"
              >
                Top
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-3 ">
            <p className="py-2 px-2 font-medium">Marc Hazime</p>
            <img
              alt=""
              className="rounded-full  h-20 w-20 mr-2"
              src=".\src\assets\ProfilPic.jpg"
            />
            <div>
              <Link to="/">
                <img
                  className="disconnectBtn h-10 w-10 mr-2"
                  src=".\src\assets\disconnect.png"
                  alt=""
                  type="button"
                />
              </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <Burger />
          </div>
        </div>
      </div>
    </nav>
  );
}
