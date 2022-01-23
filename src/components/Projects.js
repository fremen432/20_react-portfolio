import React from "react";
function Projects() {
    return (
        <div id="#projects" class="section-container flex-around">

            <h2 class="section-title">Projects</h2>

            <article class=" content-container grid box ">

                <div id="e-commerce"  class= "projectCard">
                    <p class="colorMain  flex-center projTitle" >E-commerce Website</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="https://afternoon-bayou-98700.herokuapp.com/about" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/burkholder-eyelashes" target="_blank">Repository</a>
                    </div>
                </div>

                <div id= "Eazy-Eatz" class= "projectCard ">
                    <p class="colorMain  flex-center projTitle" >Recipe Finder Application</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="http://www.claytonmiller.tech/projects/eazy-eatz/" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/Eazy-Eatz" target="_blank">Repository</a>
                    </div>
                </div>

                <div id= "Full-Stack-Website" class= "projectCard">
                    <p class="colorMain flex-center projTitle" >Professional Full-Stack Website</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="https://glacial-reef-85694.herokuapp.com/" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/MickeyPhillips/Project_2" target="_blank">Repository</a>
                    </div>
                </div>

                <div id="passwordGenerator"  class= "projectCard">
                    <p class="colorMain  flex-center projTitle" >Password Generator</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="http://www.claytonmiller.tech/projects/password-generator/" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/Random-Password-Generator" target="_blank">Repository</a>
                    </div>
                </div>

                <div id="workDayScheduler"  class= "projectCard">
                    <p class="colorMain  flex-center projTitle" >Work Day Scheduler</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="http://www.claytonmiller.tech/projects/work-day-scheduler/" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/Work-Day-Scheduler" target="_blank">Repository</a>
                    </div>
                </div>

                <div id="eCommerce-backEnd"  class= "projectCard">
                    <p class="colorMain  flex-center projTitle" >E-Commerce Back-End</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/e-commerce-back-end" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/e-commerce-back-end" target="_blank">Repository</a>
                    </div>
                </div>

                <div id="team-profile-generator"  class= "projectCard">
                    <p class="colorMain  flex-center projTitle" >Command Line Application</p>
                    <div class="projectLinks" >
                        <a className="colorMain flex-center projLink" href="https://www.youtube.com/watch?v=MmCSwY2uNWg" target="_blank">Live Page</a>
                        <a className="colorMain flex-center projLink" href="https://github.com/fremen432/team-profile-generator" target="_blank">Repository</a>
                    </div>
                </div>

            </article>

        </div>
    )
}

export default Projects;