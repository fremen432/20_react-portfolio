import React from "react";
import { projects, featuredProject } from '../data'

export default function Projects() {

    return (
        <div id="projects" className="section flex-around box">

            <h2 className="section-title">Projects</h2>

            <div className="projectCards_container box ">

            { projects.map( project => 
                <>
                    <div className="projectCard-wrapper" >
                        <div id={'projectCard_' + project.projId} className='projectCard'>
                            <img 
                            className="projectCard-image " 
                            src={project.image} 
                            alt={'Image for Clayton Miller project ' + project.projName} 
                            />
                            <div className="projectCard-content">
                                <p className='projectCard-name colorMain flex-center projTitle' >{project.projName}</p>
                                <div className="projectLinks">
                                    <a className="projectCard-link colorMain flex-center " href={project.liveLink} target="_blank">Live Page</a>
                                    <a className="projectCard-link colorMain flex-center " href={project.projLink} target="_blank">Repository</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
            </div>

        </div>
    )
}