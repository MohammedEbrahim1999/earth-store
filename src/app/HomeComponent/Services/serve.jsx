import React from 'react'
import './serve.css';
const Serve = () => {
    return (
        <div className="serve">
            <div className="one">
                <div className="pay1">
                    <span className="icon-locked"></span>
                </div>
                <div className='content1'>
                    <h4>SECURE PAYMENT</h4>
                    <p>All our payments our SSL secured</p>
                </div>
            </div>
            <div className="two">
                <div className="pay2">
                    <span className="icon-cube"></span>
                </div>
                <div className='content2'>
                    <h4>DELIVERED WITH CARE</h4>
                    <p>Super fast shipping to your door</p>
                </div>
            </div>
            <div className="three">
                <div className="pay3">
                    <span className="icon-badge"></span>
                </div>
                <div className='content3'>
                    <h4>EXCELLENT SERVICE</h4>
                    <p>Live chat and phone support</p>
                </div>
            </div>
        </div>
    )
}

export default Serve;
