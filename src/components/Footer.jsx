import React from "react";
import { contactLinks } from "../data";

function Footer() {
    return (
        <footer >
            <nav id= "contact-nav " >
                <ul class= "flex-center ">
                    {
                        contactLinks.map( el => 
                            <li id={el.platform} class= "contact-li"> 
                            <a 
                            class= "pointer hoverColorChange" 
                            href={el.href} > 
                                {el.platform}
                            </a>
                        </li>
                        )
                    }
                </ul>
            </nav>
        </footer>
    )
}


export default Footer;