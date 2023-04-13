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
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Developed portfolio website</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Created dashboard to simplify management of products (fetching, adding, editing) in any e-commerce websites</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Developed an application for better communication between customers and designers</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Users can create/edit products by uploading images in bulk and update their e-commerce websites</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Enabling employees to choose their own meals</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'><b>Software:</b> <u>for Frontend:</u> JavaScript, React.js, Next.js, <br/><u>for Backend:</u> Node.js, MongoDB, PostgreSQL, Prisma, Multer, Jest</p>
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
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>
                                        Developed wordpress websites (1 for magazine, 3 for e-commerce) <br/>
                                        <a className='nav__link__website' href='https://bemolgiyim.com' target="_blank"><i class='bx bx-link'></i>bemolgiyim</a> <br/>
                                        <a className='nav__link__website' href='https://lalehome.com' target="_blank"><i class='bx bx-link'></i>lalehome</a><br/>
                                        <a className='nav__link__website' href='https://medipekfashion.com' target="_blank"><i class='bx bx-link'></i>medipekfashion</a>
                                    </p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Managed an e-commerce website for online shopping</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'><b>Software:</b> Wordpress, Html, Css, Php, Photoshop</p>
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
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Developed mobile application for Camera Streaming using Java</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>IP Camera and Android Camera streaming and image processing on it</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Choosing android camera or external any IP camera for the input frame</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Having an OpenCV processing for detecting motion or face</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Counting the number of people as input and output</p>
                                </li>
                                
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'><b>Software:</b> <u>for Desktop App:</u> Python, Wxpython <br/><u>for Android App:</u> Java, Android Studio</p>
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
                            </p>

                            <ul className="services__modal-my_experiences grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Developed desktop application using Python</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Detail visualized tracking data of car movement (with GPS antenna and module mounted on car) for both real-time and offline analysis</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'>Mapped of current or entire location data using OpenStreetMap</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className='services__modal-info'><b>Software:</b> Python, wxpython, Data Visualization, OOP</p>
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