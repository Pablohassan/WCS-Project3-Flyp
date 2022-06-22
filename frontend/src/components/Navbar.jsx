import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaPowerOff as LogoutIcon } from "react-icons/fa";

import { logout } from "@services/api";
import { UserContext } from "@components/UserContextProvider";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  const onLogout = async () => {
    await logout();
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="px-4 flex items-center bg-white shadow-lg fixed h-14 top-0 right-0 left-0 z-20">
      <Link to="/wallet" className="py-4 px-2 text-grey-500 font-semibold">
        Wallet
      </Link>

      <p className="py-2 px-2 grow text-center font-medium">
        {user && user.pseudo}
      </p>

      <button type="button" title="Déconnexion" onClick={onLogout}>
        <LogoutIcon className="text-error" />
      </button>
    </nav>
  );
}
