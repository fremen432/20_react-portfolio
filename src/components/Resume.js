import React from "react";

function Resume() {
    return (
        <div id="#contact-me" class=" section-container flex-around">
            <h2 class="section-title">Resume</h2>

            <div class="box flex-col" >
                <a href="./Assets/Images/resumePDF.pdf"><button class="projLink colorMain" >Download</button></a>
                <img class="resumeWidth" src="./Assets/Images/resume.jpg" alt="" />
                <img class="resumeWidth" src="./Assets/Images/resume2.jpg" alt="" />
            </div>
        </div>
    )
}

export default Resume;