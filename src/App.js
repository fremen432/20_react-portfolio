import React from "react";
// import { useState } from "react";
// import ReactDom from "react-dom";

import Header from './components/Header';
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const feather = require('feather-icons')

function App() {
feather.replace()

//   function handleAboutme(e) {

//   }

  return (
    <>
        <Header></Header>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <ContactMe></ContactMe>
        <Footer></Footer>
        {/* <img class="projectCard" src="../src/Assets/projectCard-Images/eazy-eatz.png" alt="" /> */}

      </>
  )
}
 
export default App;
