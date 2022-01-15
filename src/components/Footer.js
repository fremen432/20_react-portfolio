import React from "react";

function Footer() {
    return (
        <footer class="flex-center" >
        <nav id= "contact-nav " >
            <ul class= "flex-center ">
                <li class= "contact-li">


                <img src="../Assets/projectCard-Images/armadillo-materials.png" alt="" />

                    {/* <a id="email-icon" class= "box icon white-text" href="mailto:cbmiller4897@gmail.com" >

                        <div id="icon" >
                    
                        </div>
                    </a> */}


                </li>
                <li class= "contact-li">
                    <a class= "box icon white-text" href="https://github.com/fremen432">
                      {/* <i data-feather="github"></i> */}
                    </a>
                </li>
                <li class= "box contact-li">
                    <a class= "white-text" href="https://www.linkedin.com/in/clayton-miller-20844810a/">
                      {/* <i data-feather="linkedin"></i> */}
                    </a>
                </li>
            </ul>
        </nav>
      </footer>

    )
}

export default Footer;