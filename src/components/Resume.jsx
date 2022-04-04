import React from "react";

import resume1 from '../assets/Images/resume.jpg'
import resume2 from '../assets/Images/resume2.jpg'
import resumePDF from '../assets/Images/resumePDF.pdf'
import reactResume from '../assets/Images/screenshot7-blue.png'

function Resume() {
    return (
        <div id="resume" class="section ">
            <h2 class="section-title">Check out my resume!</h2>

            <img className="resume-image" src={reactResume} alt="Clayton Miller's resume" />

            {/* <div class="box flex-col" >
                <a href={resumePDF}><button class="projLink colorMain" >Download</button></a>
            </div> */}
        </div>
    )
}

export default Resume;