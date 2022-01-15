import React from "react";

function Footer() {
    return (
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

    )
}

export default Footer;