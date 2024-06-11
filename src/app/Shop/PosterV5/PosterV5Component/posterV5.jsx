'use client';
import React, { useState } from 'react'
import './PosterV5.css';
import { useForm, ValidationError } from '@formspree/react';
import DoneAnimation from '../../../../../public/animation/done.json';
import Lottie from "lottie-react";
const buttonCat = [
    { category: "des" },
    { category: "rev" }
]
const PosterV5Details = () => {
    const [increment, setIncrement] = useState(1);
    const handleIncrement = () => {
        setIncrement(increment + 1)
    }
    const handleDecrement = () => {
        setIncrement(increment - 1)
        if (increment === 1) {
            setIncrement(1)
        }
    }
    const [active, setActive] = useState('active');
    const [view, setView] = useState("des-content block")
    const toggleClass = (buttonCategory) => {
        setActive(buttonCategory);
    };
    const toggleView = (buttonCategory) => {
        setView(buttonCategory)
    };

    const [state, handleSubmit] = useForm("xvoeezkj");

    return (
        <div className="up">
            <div className="son">
                <div className="serch">
                    <img src="/imgs/Poster5-min.jpg" alt="PosterV1" width={570} />
                    <button className="icon-search1"></button>
                </div>
                <div className="content">
                    <p className='first'> Home / Posters / Poster V5</p>
                    <p className='second'> Posters </p>
                    <h3> Poster V5 </h3>
                    <p className='third'>$17.99 </p>
                    <p className='fourth'> Inspirational posters are a great way to be inspired and encouraged to take on new challenges and adventures. Hang up a poster at home or in the office to be reminded how much beauty awaits in the world, luring you out of your comfort zone and into a world where possibility resides.</p>
                    <div className="count">
                        <button onClick={() => { handleDecrement() }}> - </button>
                        <span className="number"> {increment} </span>
                        <button onClick={() => { handleIncrement() }}> + </button>
                        <button id="cart"> Add To Cart</button>
                        <hr />
                    </div>
                    <hr />
                    <p> Category: <span className='ers'> Posters </span> </p>
                </div>
            </div>
            <br />
            <br />
            <br />
            <hr />
            <div className="dat">
                <div className="des">
                    <button onClick={() => { setActive("active"); toggleView("des-content block") }} className={active === "active" ? "active" : " "}>Description</button>
                </div>
                <div className="review">
                    <button onClick={() => { toggleClass("rev"); toggleView("rev") }} className={active === "rev" ? "active" : " "}>Reviews (0) </button>
                </div>
            </div>
            <div className={view === "des-content block" ? "des-content block" : "des-content"}>
                <div className="one">
                    <h2> Framed Without Borders: </h2>
                    <ul>
                        <li> Printed on High-Quality vinyl.</li>
                        <li> 1-inch thick wooden back frame.</li>
                        <li> No additional hanging hardware is required.</li>
                        <li> Care: Dust with a soft, dry cloth. </li>
                    </ul>
                </div>
                <div className="two">
                    <h2> Framed With Borders & Acrylic Glass</h2>
                    <ul>
                        <li> Printed on High-Quality matte photo paper.</li>
                        <li> Acrylic borders are used.</li>
                        <li> Highly durable acrylic glass is used on the top to protect it from damage.</li>
                        <li> Hooks are attached to the back of each frame for hanging</li>
                    </ul>
                </div>
            </div>
            <div className={view === "rev" ? "rev-content block" : "rev-content"}>
                <div className="big">
                    <p> There are no reviews yet. </p>
                </div>
                <div className="box">
                    <h1> Be the first to review “Poster V1” </h1>
                    <p>Your email address will not be published. Required fields are marked *</p>
                    <p className='rate'> Your rating*
                        <span className="icon-star-o"></span>
                        <span className="icon-star-o"></span>
                        <span className="icon-star-o"></span>
                        <span className="icon-star-o"></span>
                        <span className="icon-star-o"></span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div className="area">
                            <label htmlFor="review">Your review * </label>
                            <textarea
                                id="review"
                                name="Review Poster V5 : "
                                placeholder='Please Enter Your Review'
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                        </div>
                        <div className="username">
                            <label htmlFor="username"> Name *</label>
                            <input type="text" name="Name: " id="username" placeholder='Enter Your UserName' />
                        </div>
                        <div className="mail">
                            <label htmlFor="email">
                                Email Address *
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="E-Mail :"
                                placeholder='Enter Your E-Mail'
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div className="check">
                            <input type="checkbox" name="Check" id="check" />
                            <label htmlFor="check">  Save my name, email, and website in this browser for the next time I comment.</label>
                        </div>
                        <button type="submit" disabled={state.submitting}>
                            {state.submitting ? "Submiting....." : "Submit"}
                        </button>
                        {state.succeeded && (<p className="submit-message"> <Lottie className="done-animation" loop={false} animationData={DoneAnimation} /> Your Message Has Been Sent Successfully 👌.</p>)}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default PosterV5Details


