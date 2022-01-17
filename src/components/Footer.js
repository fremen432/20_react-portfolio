import React from "react";

const feather = require('feather-icons')

function Footer() {
    feather.replace()

    return (
        <footer class="flex-center" >
        <nav id= "contact-nav " >
            <ul class= "flex-center ">

                <li id="email-link" class= "contact-li">
                    <a class= "box icon white-text" href="mailto:cbmiller4897@gmail.com" >
                        Email
                      {/* <i data-feather="email"></i> */}
                    </a>
                </li>

                <li id="linkedin-link" class= "box contact-li">
                    <a class= "white-text" href="https://www.linkedin.com/in/clayton-miller-20844810a/">
                        LinkedIn
                      {/* <i data-feather="linkedin"></i> */}
                    </a>
                </li>

                <li id="github-link" class= "contact-li">
                    <a class= "box icon white-text" href="https://github.com/fremen432">
                        GitHub
                        {/* <i data-feather="github"></i> */}
                    </a>
                </li>
                
            </ul>
        </nav>
      </footer>
    )
}


export default Footer;