import React from 'react'
import "./style.css"
import bgvideo from '../SiteMedia/bg2.mp4'
import Header from './Header'

function Landing() {

    return (

        <div className='landing-container'>

            <Header />

            <video  autoPlay muted loop>
                <source src={bgvideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            
            <div className="overlay"></div>
        </div>
    )
}

export default Landing