import React from 'react'
import './styles/Contact.css'

import emailjs from 'emailjs-com'

function Contact() {


    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_3p35cl3', 'template_k5gyobr', e.target, 'user_skn3fuwuP52xp7RE00e5l')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();

        alert("Your message has been successfully sent to Carlos Paz.")
    }


    return (
        <div className="contact" id='contactSection'>
            <h1>Contact Me</h1>
            <form onSubmit={sendEmail}>
                <div className="form__element">
                    <label htmlFor="name">Name</label>
                    <input
                        className='inputName'
                        type="text"
                        placeholder='Enter your name here'
                        name="from_name"
                        required
                    />
                </div>
                <div className="form__element">
                    <label htmlFor="email">Email</label>
                    <input
                        className='inputEmail'
                        type="email"
                        placeholder='Enter your email address here'
                        name="email"
                        required

                    />
                </div>
                <div className="form__element">
                    <label htmlFor="message">Message</label>
                    <input
                        className='inputMessage'
                        type="text"
                        placeholder='Enter your message here'
                        name="message"
                        required
                    />
                </div>
                <button type="submit" className='form__submitButton' value="Send Message">Submit</button>
            </form>
        </div>
    )
}

export default Contact
