import React from "react";
import coverImage from '../Assets/profile-pic.jpg'
function AboutMe() {
    return (
        <div id="#about-me" class="section-container flex-around ">
        <h2 class="section-title">About Me </h2>

        <article class="content-container box">
            <img id="cbm-profile" src="./Assets/Images/Facebook profile pic.jpg" alt="Profile picture of Clayton Miller" />
            <p class="content-right-p">
                Clayton Miller is a budding coder and web developer located in the Austin TX area. 
                He started his journey in web development with the Full-Stack Web Development bootcamp at the University of Texas.
                There, he became proficient in the web development fundamentals such as HTML, CSS, JavaScript as well as working on various full-stack projects using the MERN technology stack. 
                Clayton looks forward to diving deeper into the world of web development, sharpening his coding skills and meeting other awesome developers who are just as excited about coding as he is!
                Feel free to browse Clayton's projects and reach out to him at any of the contact links below!
            </p>
        </article>
        </div>

    )
}

export default AboutMe;