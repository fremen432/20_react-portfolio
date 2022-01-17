import React from "react";
import coverImage from '../Assets/profile-pic.jpg'
function Projects() {
    return (
        <div id="#projects" class="section-container flex-around">

            <h2 class="section-title">Projects</h2>

            <article class=" content-container grid box ">

                <a id= "Eazy-Eatz" class= "projectCard " href="http://www.claytonmiller.tech/projects/eazy-eatz/" target="_blank" >
                    <div class="text-box">
                        <h3>Eazy Eatz</h3>
                        <h4>Recipe Finder Application</h4>
                    </div>
                </a>

                <a id= "Full-Stack-Website" class= "projectCard" href="https://glacial-reef-85694.herokuapp.com/" target="_blank" >
                    <div class="text-box">
                        <h3>Armadillo Materials</h3>
                        <h4>Professional Full-Stack Website</h4>
                    </div>
                </a>

                <a id= "passwordGenerator" class= "projectCard" href="http://www.claytonmiller.tech/projects/password-generator/" target="_blank" >
                    <div class= "text-box">
                        <h3>Password Generator</h3>
                        <h4>JavaScript</h4>
                    </div>
                </a>

                <a id= "workDayScheduler" class= "projectCard" href="http://www.claytonmiller.tech/projects/work-day-scheduler/" target="_blank" >
                    <div class= "text-box">
                        <h3>Work Day Scheduler</h3>
                        <h4>Moment.js</h4>
                    </div>
                </a>

                <a id= "eCommerce-backEnd" class= "projectCard" href="https://github.com/fremen432/e-commerce-back-end" target="_blank" >
                    <div class= "text-box">
                        <h3>E-Commerce Back-End</h3>
                        <h4>SQL/Sequalize-ORM</h4>
                    </div>
                </a>

                <a id= "team-profile-generator" class= "projectCard" href="https://github.com/fremen432/team-profile-generator" target="_blank" >
                    <div class= "text-box">
                        <h3>Team Profile Generator</h3>
                        <h4>Command Line Application</h4>
                    </div>
                </a>
                
            </article>

        </div>
    )
}

export default Projects;