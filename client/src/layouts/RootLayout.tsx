import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navBar";

const RootLayout: React.FC = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
