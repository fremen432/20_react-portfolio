import React from "react";
// import { useState } from "react";
// import ReactDom from "react-dom";

import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {

  return (
    <>
        <Header></Header>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>

      </>
  )
}
 
export default App;
