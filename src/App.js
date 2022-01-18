import React, { useState } from "react";
// import { useState } from "react";
// import ReactDom from "react-dom";

// import Header     from './components/Header';
import AboutMe    from "./components/AboutMe";
import Projects   from "./components/Projects";
import ContactMe  from "./components/ContactMe";
import Resume     from "./components/Resume";
import Footer     from "./components/Footer";

function App() {

  const [showAbout, showAboutMe] = useState(true);
  const [showProj, showProjects] = useState(false);
  const [showContact, showContactMe] = useState(false);
  const [showRes, showResume] = useState(false);

  return (
    <>
      {/* <Header></Header> */}
      <header>
            <h1 id="bigName" className="pointer" onClick={ () => { showAboutMe(true); showProjects(false); showContactMe(false); } } >
                Clayton Miller
            </h1>
            <nav>
                <ul>
                    <li id="aboutMeNav"  >
                        <a className="pointer hoverColorChange" onClick={ () => { showAboutMe(true); showProjects(false); showContactMe(false); showResume(false); } } >About Me</a>
                    </li>
                    <li>
                        <a className="pointer hoverColorChange" onClick={ () => { showAboutMe(false); showProjects(true); showContactMe(false); showResume(false); } } >Projects</a>
                    </li>
                    <li>
                        <a className="pointer hoverColorChange" onClick={ () => { showAboutMe(false); showProjects(false); showContactMe(true); showResume(false); } } >Contact Me</a>
                    </li>
                    <li>
                        <a className="pointer hoverColorChange" onClick={ () => { showAboutMe(false); showProjects(false); showContactMe(false); showResume(true); } } >Resume</a>
                    </li>
                </ul>
            </nav>
        </header>
      { showAbout?    <AboutMe></AboutMe>:      null }
      { showProj?     <Projects></Projects>:    null }
      { showContact?  <ContactMe></ContactMe>:  null }
      { showRes?      <Resume></Resume>:        null }
      <Footer></Footer>

    </>
  )
}
 
export default App;
