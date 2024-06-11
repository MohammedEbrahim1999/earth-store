'use client'
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './form.css';
import Lottie from "lottie-react";
import DoneAnimation from '../../../../../public/animation/done.json';
const Form = () => {
    const [state, handleSubmit] = useForm("xyyrqbpv");
    return (
        <div className='form'>
            <div className="left">
                <h1>Get In Touch</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='Full  name' placeholder='Full Name'/>
                    <input type="number" name="Phone Number" id="number" placeholder='Phone Number' />
                    <input
                        id="email"
                        type="email"
                        name="E-Mail"
                        placeholder='Email'
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        id="message"
                        name="Message"
                        placeholder='Message'
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <button type="submit" disabled={state.submitting}>
                    {state.submitting ? "Submiting....." : "Send Now"}
                    </button>
                    {state.succeeded && (<p className="submit-message"> <Lottie className="done-animation" loop= {false} animationData={DoneAnimation} /> Your Message Has Been Sent Successfully 👌.</p>)}
                </form>
            </div>
            <div className="right">
                <h1> Talk To Us</h1>
                <div className="mail">
                    <div className="icon">
                        <span className="icon-envelope-o"></span>
                    </div>
                    <div className="text">
                        <p>Email</p>
                        <h5>Mohammed.ebrahim9921@gmail.com</h5>
                    </div>
                </div>
                {/* Phone */}
                <div className="phone">
                    <div className="icon">
                        <span className="icon-phone"></span>
                    </div>
                    <div className="text">
                        <p>Phone Number </p>
                        <h5>0570324724</h5>
                    </div>
                </div>
                {/* Location */}
                <div className="location">
                    <div className="icon">
                        <span className="icon-location"></span>
                    </div>
                    <div className="text">
                        <p>ADDRESS </p>
                        <h5>TAAWUN, RIYADH, SAUDI ARABIA</h5>
                    </div>
                </div>
                {/* Social */}
                <div className="social">
                    <h2>Follow Us: </h2>
                    <a href="#"> <span className="icon-facebook-f"> </span> </a>
                    <a href="#"> <span className="icon-x"> </span> </a>
                    <a href="#"> <span className="icon-linkedin"> </span> </a>
                    <a href="#"> <span className="icon-play"> </span> </a>
                </div>
            </div>
        </div>
    )
}

export default Form;
