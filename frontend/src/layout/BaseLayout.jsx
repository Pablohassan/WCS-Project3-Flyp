import { useContext } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "@components/Navbar";
import { UserContext } from "@components/UserContextProvider";

export default function BaseLayout() {
  const { user } = useContext(UserContext);

  return (
    <div className="mt-20">
      {user && <Navbar />}
      <Outlet />
    </div>
  );
}
