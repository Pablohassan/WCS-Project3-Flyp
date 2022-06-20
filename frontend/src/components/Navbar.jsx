import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { logout } from "@services/api";
import { UserContext } from "@components/UserContextProvider";
import Burger from "./Burger";

export default function Navbar() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const onLogout = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav className="bg-neutral-50 justify-between shadow-lg fixed h-14 top-0 right-0 left-0 z-20">
      <div className="max-w-none mx-auto px-4 h-22 ">
        <div className="flex justify-between ">
          <div className="flex justify-between space-x-7 ">
            <div className="hidden md:flex items-center space-x-10 justify-start">
              <Link
                to="/wallet"
                className="py-4 px-2 text-grey-500 border-b-4 border-grey-500 font-semibold "
              >
                Wallet
              </Link>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ">
            <p className="py-2 px-2 font-medium">{user.pseudo}</p>
          </div>
          <div className=" hidden md:flex items-center">
            <button type="button" onClick={onLogout}>
              Déconnexion
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <Burger />
          </div>
        </div>
      </div>
    </nav>
  );
}
