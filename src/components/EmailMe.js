import React from 'react';
import emailjs from '@emailjs/browser';
// import "../index.css"
import { Segment, Header } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom'
import { useState } from "react";

const EmailMe = (props) => {

    // const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_si57q6l', 'emilybernardportfolio', e.target, 'k6aLEovzlG8qq7Ru6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <>
            <div id="top0">
                <div id="top1">
                    <Segment fluid style={{ padding: '1em 0em' }} vertical color='purple'>
                    </Segment>
                    <Header as='h1' style={{ fontSize: '2em', color: 'violet' }}>
                        Contact Me
                    </Header>

                    <p style={{ fontSize: '1.33em' }}>I would love to hear from you! Please let me a message! </p>
                </div>
            </div>
            <br></br>
            <div id="top2" style={{ fontSize: '1.33em' }}>
                <form id='contact-form' onSubmit={sendEmail}>
                    <label class='contact-label'> Your Name: </label>
                    <input class='text-input' type="text" name="name" placeholder="your name..." ></input>
                    <br></br>
                    <br></br>
                    <label class='contact-label'> Email: </label>
                    <input class='text-input' type="text" name="Email" placeholder="your email..." ></input>
                    <br></br>
                    <br></br>
                    <label class='contact-label'> Message: </label>
                    <textarea class='text-input' name="message" placeholder="message...">

                    </textarea>
                    <br></br>
                    <br></br>
                    <input id='contact-submit' type="submit" value="Submit"></input>
                    <br></br>
                    <br></br>
                </form>

            </div>
        </>


    )
}

export default EmailMe