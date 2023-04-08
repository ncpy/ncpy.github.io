import React from 'react'
import { useState } from 'react'
import './services.css'

const Services = () => {
    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <section className="services section" id="my_experiences">
            <h2 className="section__title">Experiences</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className='uil uil-browser services__icon'></i>
                        <h3 className="services__title">
                            Full Stack <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Full Stack Developer</h3>
                            <div className='service__modal-detail'>
                                <span className="timeline__date">
                                    <i className="bx bx-building-house"></i> RAsoft
                                </span>

                                <span className="timeline__date">
                                    <i className="bx bx-calendar"></i> 2022 - Present
                                </span>
                            </div>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I develop the user interface</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Web page development</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-arrow services__icon'></i>
                        <h3 className="services__title">
                            Wordpress <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Wordpress Developer</h3>
                            <div className='service__modal-detail'>
                                <span className="timeline__date">
                                    <i className="bx bx-building-house"></i> Freelancer
                                </span>

                                <span className="timeline__date">
                                    <i className="bx bx-calendar"></i> 2021 - 2022
                                </span>
                            </div>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I develop the user interface</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Web page development</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-mobile-android services__icon'></i>
                        <h3 className="services__title">
                            Android <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(3)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Android Developer</h3>
                            <div className='service__modal-detail'>
                                <span className="timeline__date">
                                    <i className="bx bx-building-house"></i> Freelancer
                                </span>

                                <span className="timeline__date">
                                    <i className="bx bx-calendar"></i> 2020 - 2021
                                </span>
                            </div>
                            <p className="services__modal-description">
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I develop the user interface</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Web page development</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

                <div className="services__content">
                    <div>
                        <i className='uil uil-desktop services__icon'></i>
                        <h3 className="services__title">
                            Python <br /> Developer
                        </h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(4)}>
                        View More
                        <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>

                    <div className={toggleState === 4 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i className='uil uil-times services__modal-close' onClick={() => toggleTab(0)}></i>
                            <h3 className="services__modal-title">Python Developer</h3>

                            <div className='service__modal-detail'>
                                <span className="timeline__date">
                                    <i className="bx bx-building-house"></i> GCS - Test
                                </span>

                                <span className="timeline__date">
                                    <i className="bx bx-calendar"></i> 2018 - 2019
                                </span>
                            </div>

                            <p className="services__modal-description">
                                Service with more than 3 years of experience. Providing quality work to clients and companies.
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I develop the user interface</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Web page development</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I create ux element interactions.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>I position your company brand.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Design and mockups of products for companies.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services