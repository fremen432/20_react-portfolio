import React from "react";

function ContactMe() {
    return (
        <div id="#contact-me" class=" section-container">
        <h2 class="section-title">Projects</h2>
        <div class="content-container" >
            <div class="">
                <h1>CONTACT ME! </h1>
                <h3>Fill out the form below to learn more!</h3>
            </div>
            <div class="">
                <form action="">
                <ul>
                    
                    <li>
                    <p class="left">
                        <label for="first_name">first name</label>
                        <input type="text" name="first_name" placeholder="John" />
                    </p>
                    <p class="pull-right">
                        <label for="last_name">last name</label>
                        <input type="text" name="last_name" placeholder="Smith" />      
                    </p>
                    </li>
                    
                    <li>
                    <p>
                        <label for="email">email <span class="req">*</span></label>
                        <input type="email" name="email" placeholder="john.smith@gmail.com" />
                    </p>
                    </li>        
                    <li><div class="divider"></div></li>
                    <li>
                    <label for="comments">comments</label>
                    <textarea cols="46" rows="3" name="comments"></textarea>
                    </li>
                    
                    <li>
                    <input class="btn btn-submit" type="submit" value="Submit" />
                    <small>or press <strong>enter</strong></small>
                    </li>
                    
                </ul>
                </form>  
            </div>
        </div>
        </div>
    )
}

export default ContactMe;