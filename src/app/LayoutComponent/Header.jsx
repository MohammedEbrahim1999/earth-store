'use client'
import React, { useRef, useState } from 'react'
import "../../../public/style.css";
import "./layout.css";
const Header = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState("icon-menu");
  const handleSwap = ()=>{
    setShow(!show);
    if(icon !== "icon-menu"){
      setIcon( "icon-menu")
    }else{
      setIcon( "icon-x1 icon-remove")
    }
  }
  return (
    <>
      <header className="head">
        <nav>
          <div className="left">
            <h1 className="logo-text"> Earth Store </h1>
          </div>
          <div className="right">
            <ul className="lg">
              <li>
                <a href="http://localhost:3000/"> Home </a>
              </li>
              <li>
                <a href="/About"> About </a>
              </li>
              <li>
                <a href="/Shop" > Shop </a>
              </li>
              <li>
                <a href="/Contact" > Contact </a>
              </li>
              <span className="icon-shopping-bag icon"> <span> 0 </span></span>
            </ul>
            <span className="icon-user icon"></span>
            <button className={icon} onClick={handleSwap}></button>
          </div>
        </nav>
      </header>
      {show && (
        <div className='sm-links'>
          <ul className="sm">
            <li><a href="http://localhost:3000/"> Home </a> </li>
            <li><a href="/About"> About </a></li>
            <li><a href="/Shop"> Shop</a></li>
            <li><a href="/Contact"> Contact </a></li>
          </ul>
        </div>
      )}
    </>

  )
}

export default Header;
