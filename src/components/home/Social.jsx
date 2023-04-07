import React from 'react'
import './home.css'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://linkedin.com/in/necip-yolcu" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/ncpy" className="home__social-icon" target='_blank'>
                <i class="uil uil-github"></i>
            </a>

            {/* <div className="home__social-links">
                <a href="https://linkedin.com/in/necip-yolcu" className="home__social-link">
                    <i class="uil uil-linkedin"></i>
                    <span>View My Profile</span>
                </a>

                <a href="https://linkedin.com/in/necip-yolcu" className="home__social-link">
                    <i class="uil uil-github"></i>
                    <span>View My Profile</span>
                </a>

            </div> */}
        </div>
    )
}

export default Social