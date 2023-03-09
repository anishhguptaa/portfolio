import "./FormStyles.css"

import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <form action="https://formsubmit.co/anishgupta23@hotmail.com" method="POST">
            <label>Your Name</label>
            <input type="text" name="Name" required/>
            <label>Your Email Address</label>
            <input type="email" name="email" required/>
            <label>Subject</label>
            <input type="text" name="_subject" required/>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message Here.." name="Message" required/>
            <input type="hidden" name="_captcha" value="false"/>

            <button className="btn">Send it!</button>
        </form>
    </div>
  )
}

export default Form