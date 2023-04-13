import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title"><a href="#about" className="footer__link">Necip</a></h1>

                <ul className="footer__list">
                    
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    
                    <li>
                        <a href="#my_experiences" className="footer__link">Experiences</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer__link">Projects</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://linkedin.com/in/necip-yolcu" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/ncpy" className="footer__social-link" target='_blank'>
                        <i class="bx bxl-github"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; All Rights Reserved
                </span>
            </div>
        </footer>
    )
}

export default Footer