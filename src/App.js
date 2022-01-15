import React from "react";
const feather = require('feather-icons')

function App() {
feather.replace()

  function handleAboutme(e) {

  }

  return (
    <>
      {/* Header */}
      <header>
        <h1>
            Clayton Miller
        </h1>
        <nav>
            <ul>
                <li>
                    <a onclick={handleAboutme} href="#about-me">About Me</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact-me">Contact Me</a>
                </li>
                <li>
                    <a href="./Assets/Images/Clayton Miller Resume - (05_24_21).pdf" target="_blank">Resume</a>
                </li>
            </ul>
        </nav>
      </header>

      < AboutMe />
      {/* About Me */}
      <div id="about-me" class="section-container flex-around ">
          <h2 class="section-title">About Me </h2>
          <div class="content-container">
              <img id="cbm-profile" src="./Assets/Images/Facebook profile pic.jpg" alt="Profile picture of Clayton Miller" />
              <p class="content-right-p">
                  Clayton Miller is a budding coder and web developer located in the Austin TX area. 
                  He started his journey in web development with the Full-Stack Web Development bootcamp at the University of Texas.
                  There, he became proficient in the web development fundamentals such as HTML, CSS, JavaScript as well as working on various full-stack projects using the MERN technology stack. 
                  Clayton looks forward to diving deeper into the world of web development, sharpening his coding skills and meeting other awesome developers who are just as excited about coding as he is!
                  Feel free to browse Clayton's projects and reach out to him at any of the contact links below!
              </p>
          </div>
      </div>
      
      {/* Projects */}
      <div id="projects" class="section-container flex-around">
          <h2 class="section-title">Projects</h2>
          
          <article class=" content-container grid box ">

              <a id= "Eazy-Eatz" class= "projectCard " href="http://www.claytonmiller.tech/projects/eazy-eatz/" target="_blank" >
                  <div class="text-box">
                      <h3>Eazy Eatz</h3>
                      <h4>Recipe Finder Application</h4>
                  </div>
              </a>

              <a id= "Full-Stack-Website" class= "projectCard" href="https://glacial-reef-85694.herokuapp.com/" target="_blank" >
                  <div class="text-box">
                      <h3>Armadillo Materials</h3>
                      <h4>Professional Full-Stack Website</h4>
                  </div>
              </a>

              <a id= "passwordGenerator" class= "projectCard" href="http://www.claytonmiller.tech/projects/password-generator/" target="_blank" >
                  <div class= "text-box">
                      <h3>Password Generator</h3>
                      <h4>JavaScript</h4>
                  </div>
              </a>

              <a id= "workDayScheduler" class= "projectCard" href="http://www.claytonmiller.tech/projects/work-day-scheduler/" target="_blank" >
                  <div class= "text-box">
                      <h3>Work Day Scheduler</h3>
                      <h4>Moment.js</h4>
                  </div>
              </a>

              <a id= "eCommerce-backEnd" class= "projectCard" href="https://github.com/fremen432/e-commerce-back-end" target="_blank" >
                  <div class= "text-box">
                      <h3>E-Commerce Back-End</h3>
                      <h4>SQL/Sequalize-ORM</h4>
                  </div>
              </a>

              <a id= "team-profile-generator" class= "projectCard" href="https://github.com/fremen432/team-profile-generator" target="_blank" >
                  <div class= "text-box">
                      <h3>Team Profile Generator</h3>
                      <h4>Command Line Application</h4>
                  </div>
              </a>

          </article>
      </div>
      
      {/* Footer */}
      <footer class="flex-center" >
        <nav id= "contact-nav " >
            <ul class= "flex-center ">
                <li class= "contact-li">
                    <a class= "white-text" href="mailto:cbmiller4897@gmail.com">
                      <i data-feather="mail"></i>
                    </a>
                </li>
                <li class= "contact-li">
                    <a class= "white-text" href="https://github.com/fremen432" target="_blank">
                      <i data-feather="github"></i>
                    </a>
                </li>
                <li class= "contact-li">
                    <a class= "white-text" href="https://www.linkedin.com/in/clayton-miller-20844810a/" target= "_blank">
                      <i data-feather="linkedin"></i>
                    </a>
                </li>
            </ul>
        </nav>
      </footer>
    </>
  )
}
 
export default App;
