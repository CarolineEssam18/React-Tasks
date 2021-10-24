import React from 'react'
import './home.css'
import personal from '../assets/WhatsApp Image 2021-07-05 at 4.34.44 AM.jpeg'
export const Home = () => {
    return (
        <div className="maindiv">
          <div>
            <h2>Caroline Essam Morcos</h2>
            <h6>Junior FrontEnd Developer</h6>
          </div>
          <img src={personal}  className="personalimage"/>
        </div>
    )
}

export default Home
