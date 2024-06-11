import React from 'react'
import './poster.css';
import Image from 'next/image';
import V1 from '../../../../public/imgs/posterV1.jpg';
import V2 from '../../../../public/imgs/posterV2.jpg';
import V3 from '../../../../public/imgs/posterV3.jpg'
const Poster = () => {
  return (
    <div className='poster'>
        <div className="one">
            <Image src={V1} alt='Poster V1' className='v1'/>
            <p> Posters</p>
            <h3> <a href="#"> Poster V1</a></h3>
            <p>$23.99</p>
        </div>
        <div className="two">
            <Image src={V2} alt='Poster V2' className='v2'/>
            <p> Posters</p>
            <h3> <a href="#"> Poster V2</a></h3>
            <p>$17.99</p>
        </div>
        <div className="three">
            <Image src={V3} alt='Poster V1' className='v3'/>
            <p> Posters</p>
            <h3> <a href="#"> Poster V3</a></h3>
            <p>$14.99</p>

        </div>
    </div>
  )
}

export default Poster;
