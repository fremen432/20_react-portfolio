import React, { useState } from "react";
import "../Assets/CSS/styles.css";

function Header() {
    const [style, setStyle] = useState('hide')

    const changeStyle = () => { setStyle('hide2') }

    function works() {
        alert('This works')
    }

    return (
        <header>
            <h1 className={style} >
                Clayton Miller
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={setStyle} >About Me</a>
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
    )
}

export default Header;