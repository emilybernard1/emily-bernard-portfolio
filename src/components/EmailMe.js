import React from 'react';
import emailjs from '@emailjs/browser';
import { Segment, Header, Grid } from 'semantic-ui-react'
// import { useState } from "react";

const EmailMe = (props) => {

    // const [email, setEmail] = useState('');
    // const [name, setName] = useState('');
    // const [message, setMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_si57q6l', 'template_9wr6odu', e.target, 'G1I3dDJHDrIn0MzeR')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (

        <div className='contactme'>
            <div id="top0">
                <div id="top1">
                    <Segment fluid style={{ padding: '1em 0em' }} vertical color='purple'>
                    </Segment>
                    <Header as='h1' style={{ fontSize: '2em', color: 'violet' }} textAlign='center' >
                        Contact Me
                        <br></br>
                    </Header>
                    <p style={{ fontSize: '1.33em', textAlign: 'center', color: 'aqua' }} >I would love to hear from you! Please leave me a message! </p>
                </div>
            </div>
            <br></br>
            <Grid fluid style={{ padding: '2em', marginLeft: '3em', backgroundColor: 'rgb(33, 32, 32)', display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '20em' }}>
                <div id="top2" style={{ fontSize: '1.33em', color: 'aqua', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }} >
                    <form id='contact-form' onSubmit={sendEmail} >
                        <label class='contact-label' > Your Name: </label>
                        <br></br>
                        <br></br>
                        <input class='text-input' type="text" name="from_name" placeholder="Your name..." style={{ borderRadius: '5px', padding: '.5em'}}></input>
                        <br></br>
                        <br></br>
                        <label class='contact-label' > Your Email Address: </label>
                        <br></br>
                        <br></br>
                        <input class='text-input' type="text" name="reply_to" placeholder="Your email address..." style={{ borderRadius: '5px', padding: '.5em'}}></input>
                        <br></br>
                        <br></br>
                        <label class='contact-label' > Message: </label>
                        <br></br>
                        <br></br>
                        <textarea class='text-input' name="message" placeholder="Your message here..." style={{ borderRadius: '5px', padding: '.5em'}}>
                        </textarea>
                        <br></br>
                        <br></br>
                        <input id='contact-submit' type="submit" value="Submit" margin='3em' style={{ color: 'white', justifyContent: 'center', alignItems: 'center', alignContent: 'center', backgroundColor: 'aqua', color: 'rgb(33, 32, 32)', borderRadius: '5px', padding: '.5em' }}></input>
                        <br></br>
                        <br></br>
                    </form>
                </div>
            </Grid>
        </div>


    )
}

export default EmailMe