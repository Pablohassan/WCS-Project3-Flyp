import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Navbar from "@components/Navbar";
import SearchBar from "@components/SearchBar";
import Footer from "@components/Footer";
import "../css/Wallet.css";

export default function Wallet() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [showSearchBar, setShowSearchBar] = useState(!isMobile);

  return (
    <div>
      <Navbar />

      {((isMobile && showSearchBar) || !isMobile) && <SearchBar />}

      {isMobile && (
        <Footer onToggleSearch={() => setShowSearchBar(!showSearchBar)} />
      )}
    </div>
  );
}
