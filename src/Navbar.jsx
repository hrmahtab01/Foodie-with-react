import React from 'react'
import './App.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="container">
                    <div className="nav_logo">
                        <img src="/public/photos/FOODIE.png" alt="" />
                    </div>
                    <ul className="listItem">
                        <li className="navitemone">Home</li>
                        <li className="navitem">About</li>
                        <li className="navitem">Testimonials</li>
                        <li className="navitem">Contact</li>
                    </ul>
                    <div className="navbtn">
                        <img src="/public/photos/Vector .png" alt="" />

                        <button>Booking Now</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Navbar
