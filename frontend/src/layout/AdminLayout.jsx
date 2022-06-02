import React from "react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="h-screen bg-pink-200">
      <Outlet />
    </div>
  );
}
