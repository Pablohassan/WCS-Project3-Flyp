import React from "react";
import { Outlet } from "react-router-dom";

export default function BaseLayout() {
  return (
    <div className="h-screen bg-gray-400">
      <Outlet />
    </div>
  );
}
