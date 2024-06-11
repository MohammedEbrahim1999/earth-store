import React from 'react'
import './opinion.css';
import Image from 'next/image';
import pOne from '../../../../public/imgs/earth-store-testimonial-avatar-img.jpeg';
import pTwo from '../../../../public/imgs/PTwo Opinion.jpeg';
import pThree from '../../../../public/imgs/PThree Opinion.jpeg';
const Opinions = () => {
    return (
        <div className='opinions'>
            <div className="hone">
                <h1> What Our Customers Say </h1>
            </div>
            <div className="say">
                <div className="one">
                    <span className="icon-quote-left"></span>
                    <p>Fast shipping and excellent customer service. The product was even better than expected. I will definitely be a returning customer.</p>
                    <Image src={pOne} alt='Pesron One Opinion' className='p1' />
                    <h4> JENNIFER LEWIS </h4>
                </div>
                <div className="two">
                    <span className="icon-quote-left"></span>
                    <p>Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.</p>
                    <Image src={pTwo} alt='Pesron Two Opinion' className='p2' />
                    <h4> ALICIA HEART </h4>
                </div>
                <div className="three">
                    <span className="icon-quote-left"></span>
                    <p>Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.</p>
                    <Image src={pThree} alt='Pesron Three Opinion' className='p3' />
                    <h4> JUAN CARLOS </h4>
                </div>
            </div>
        </div>
    )
}

export default Opinions;
