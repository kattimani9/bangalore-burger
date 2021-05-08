import React from 'react'
import aboutimage from '../images/about.png';

function About() {
    return (
        <div id='about'>
        <div className='about-text'>
        <h1>Upcoming Event</h1>
        <p> Festival Offer is Avaliable in Upcoming Event ,Please don't misss Them.</p>
        <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt='' />


        </div>
            
        </div>
    )
}

export default About
