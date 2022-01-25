import React from "react";

// const feather = require('feather-icons')

function Footer() {
    // feather.replace()

    return (
        <footer >
            <nav id= "contact-nav " >
                <ul class= "flex-center ">

                    <li id="email-link" class= "contact-li">
                        <a class= "box pointer hoverColorChange" href="mailto:cbmiller4897@gmail.com" >
                            Email
                        {/* <i data-feather="email"></i> */}
                        </a>
                    </li>

                    <li id="linkedin-link" class= "box contact-li">
                        <a class= "box pointer hoverColorChange" href="https://www.linkedin.com/in/clayton-miller-20844810a/">
                            LinkedIn
                        {/* <i data-feather="linkedin"></i> */}
                        </a>
                    </li>

                    <li id="github-link" class= "contact-li">
                        <a class= "box pointer hoverColorChange" href="https://github.com/fremen432">
                            GitHub
                            {/* <i data-feather="github"></i> */}
                        </a>
                    </li>
                    
                    <li id="stackOverflow-link" class= "contact-li">
                        <a class= "box pointer hoverColorChange" href="https://stackoverflow.com/users/16523713/cmiller31">
                            Stack Overflow
                            {/* <i data-feather="github"></i> */}
                        </a>
                    </li>
                    
                </ul>
            </nav>
        </footer>
    )
}


export default Footer;