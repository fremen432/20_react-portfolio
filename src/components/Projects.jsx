import React from "react";
import { projects, featuredProject } from '../data'

export default function Projects() {
    return (
        <div id="projects" className="section flex-around box">

            <h2 className="section-title">Projects</h2>

            <div className="content-container grid box ">
            { projects.map( project => 
                    <img className="box image " src={project.image} alt="" />


                // <div id={project.projName} className='projectCard'>
                    // <img className="" src={project.image} alt="" />
                    // <p className='colorMain flex-center projTitle' >{project.projName}</p>
                    // <div className="projectLinks">
                        // <a className="colorMain flex-center projLink" href={project.liveLink} target="_blank">Live Page</a>
                        // <a className="colorMain flex-center projLink" href={project.projLink} target="_blank">Repository</a>
                    // </div>
                // </div>
            )}
            </div>

        </div>
    )
}