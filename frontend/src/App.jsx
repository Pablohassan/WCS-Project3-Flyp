import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import WalletConnexion from "@pages/Walletconnexion";
import Wallet from "@pages/Wallet";
import Administration from "@pages/Administration";
import Top from "@pages/Top";
import Project from "@pages/Project";
import BaseLayout from "./layout/BaseLayout";
import AdminLayout from "./layout/AdminLayout";
import "./App.css";
// import SearchBar from "@components/SearchBar";

function App() {
  const [login, setlog] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="App bg-zinc-400">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route
            path=""
            element={
              <WalletConnexion
                login={login}
                onLoginChange={setlog}
                pass={pass}
                onPasschange={setPass}
              />
            }
          />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/project" element={<Project />} />
          <Route path="/top" element={<Top />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="" element={<Administration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
