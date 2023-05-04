import React from "react";

// components

import AdminNavbar from "@/components/navbar/adminNavbar.js";
import Sidebar from "@/components/sidebar/sidebar.js";
import Footer from "@/components/footer/footer.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}
