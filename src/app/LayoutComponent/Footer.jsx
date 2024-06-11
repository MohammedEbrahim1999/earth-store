import React from "react";
import "./Footer.css";
const FooterElement = () => {
    return (
        <footer>
            <div className="left">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Shop">Shop</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="center">
                <h1> <a href="#"> Earth Store </a></h1>
            </div>
            <div className="right">
                <p>Copyright © 2024 Mohammed Ebrahim </p>
            </div>
        </footer>
    );
};

export default FooterElement;
