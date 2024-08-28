import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function DefaultLayout({children}) {
  return (
    <div className="bg-slate-100">
      <Header />
        {children}
      <Footer />
    </div>
  );
}
