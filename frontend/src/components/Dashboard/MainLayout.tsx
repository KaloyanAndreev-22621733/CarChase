import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Content area */}
      <div className="flex flex-1 pt-20"> {/* Отступ сверху на высоту Header'а (h-20) */}
        <Sidebar />
        <main className="flex-1 p-6 bg-gray-100">
            <Outlet />
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;