import React from "react";

import resume1 from '../assets/Images/resume.jpg'
import resume2 from '../assets/Images/resume2.jpg'
import resumePDF from '../assets/Images/resumePDF.pdf'

function Resume() {
    return (
        <div id="resume" class=" section flex-around">
            <h2 class="section-title">Resume</h2>

            <div class="box flex-col" >
                <a href={resumePDF}><button class="projLink colorMain" >Download</button></a>
                <img class="resumeWidth" src={resume1} alt="" />
                <img class="resumeWidth" src={resume2} alt="" />
            </div>
        </div>
    )
}

export default Resume;