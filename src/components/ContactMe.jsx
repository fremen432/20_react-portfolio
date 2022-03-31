import React from "react";

import "../assets/css/contact-form.css"
import "../assets/js/contact-form"

function ContactMe() {
    return (
        <div id="contactMe" class=" section flex-around">
        <h2 class="section-title">Contact Me</h2>

            <div class="content-container box" >

                <div class="container">
                    <form action="https://formspree.io/f/xknyozbk" method="POST" id="my-form">

                    <div class="form-group">
                        <label for="firstName"> First Name</label>
                        <input type="text" id="firstName" name="firstName" required/>
                    </div>

                    <div class="form-group">
                        <label for="latsName">Last Name</label>
                        <input type="text" id="lastName" name="lastName" required/>
                    </div>

                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>

                    <div class="form-group">
                        <label for="massage">Message</label>
                        <textarea name="massage" id="massage" cols="30" rows="10" required></textarea>
                    </div>

                    <button type="submit">Submit</button>
                    </form>
                </div>
                <div id="status"></div>
                
            </div>
        </div>
        
    )
}

export default ContactMe;