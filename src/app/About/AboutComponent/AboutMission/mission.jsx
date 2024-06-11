import React from 'react'
import './mission.css';
import Image from 'next/image';
import MissionImg from '../../../../../public/imgs/Our-Mission.jpg'
const Mission = () => {
  return (
    <div className='mission'>
      <div className="mission-left">
        <Image src={MissionImg} alt='Our Mission ' className='mission-img' />
      </div>
      <div className="mission-right">
        <h1> Our Mission</h1>
        <p> Hello, my name is Tyler Moore and with the help of many people I made this template. I made it so it is super easy to update and so that it flows perfectly with my tutorials. Lots of love and hundreds of hours went into making it. I hope you love it as much as I do</p>
        <p>I wish you the best of luck with your business, enjoy the adventure.</p>
      </div>
    </div>
  )
}

export default Mission;
