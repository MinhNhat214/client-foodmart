import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <Nav/>
      <main style={{"padding": "0px 2%"}}>{children}</main>
      <div style={{"paddingTop": "5%"}}>

      <Footer/>
      </div>
    </>
  );
}
