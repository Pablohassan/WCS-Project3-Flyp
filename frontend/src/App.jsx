import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProtectedRoute from "@components/ProtectedRoute";
import UserContextProvider from "@components/UserContextProvider";
import LoginPage from "@pages/LoginPage";
import NotFoundPage from "@pages/NotFoundPage";
import WalletPage from "@pages/WalletPage";
import Administration from "@pages/Administration";

import BaseLayout from "./layout/BaseLayout";
import AdminLayout from "./layout/AdminLayout";

import "./App.css";

function App() {
  const [login, setlog] = useState("");
  const [pass, setPass] = useState("");
  return (
    <UserContextProvider>
      <div>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route
              path=""
              element={
                <LoginPage
                  login={login}
                  onLoginChange={setlog}
                  pass={pass}
                  onPasschange={setPass}
                />
              }
            />
            <Route
              path="/wallet"
              element={
                <ProtectedRoute>
                  <WalletPage />
                </ProtectedRoute>
              }
            />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route path="" element={<Administration />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;
