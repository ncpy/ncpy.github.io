import React, { useState } from 'react'
//import './qualification.css'
import './experience.css'

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <section className="qualification__section" id="portfolio">
            <h2 className="section__title">Experience</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container grid">
                <div className="experience">
                    <div className="timeline">
                        <div className="timeline__item">
                            <div className="circle__dot"></div>
                            <span className="timeline__date">
                                <i className="bx bx-calendar"></i> 2022 - Present
                            </span>
                            <h3 className="timeline__title">Full Stack Developer</h3>
                            <p className="timeline__text">asdfjkhsdfsfasdfsd</p>
                        </div>

                        <div className="timeline__item">
                            <div className="circle__dot"></div>
                            <span className="timeline__date">
                                <i className="bx bx-calendar"></i> 2021 - 2022
                            </span>
                            <h3 className="timeline__title">Wordpress Developer</h3>
                            <p className="timeline__text">ömnvcfdrytweıopfdşımlsjktrf</p>
                        </div>
                    </div>
                </div>

                <div className="experience">
                    <div className="timeline">
                        <div className="timeline__item">
                            <div className="circle__dot"></div>
                            <span className="timeline__date">
                                <i className="bx bx-calendar"></i> 2020 - 2021
                            </span>
                            <h3 className="timeline__title">Android Developer</h3>
                            <p className="timeline__text">kljhgujktrffghjkdsf</p>
                        </div>

                        <div className="timeline__item">
                            <div className="circle__dot"></div>
                            <span className="timeline__date">
                                <i className="bx bx-calendar"></i> 2018 - 2019
                            </span>
                            <h3 className="timeline__title">Python Developer</h3>
                            <p className="timeline__text">sdfsdfsdfsdfsd</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className={toggleState === 1
                        ? "qualification__button qualification__active buton--flex"
                        : "qualification__button buton--flex"
                    } onClick={() => toggleTab(1)}>
                        <i className='uil uil-graduation-cap qualification__icon'></i> Education
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__button qualification__active buton--flex"
                        : "qualification__button buton--flex"
                    } onClick={() => toggleTab(2)}>
                        <i className='uil uil-briefcase-alt qualification__icon'></i> Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">RAsoft</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Wordpress Developer</h3>
                                <span className="qualification__subtitle">Self-Employment</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Android Developer</h3>
                                <span className="qualification__subtitle">Self-Employment</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Python Developer</h3>
                                <span className="qualification__subtitle">GCS - Test</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2018 - 2019
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2
                        ? "qualification__content qualification__content-active"
                        : "qualification__content"
                    }>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer2</h3>
                                <span className="qualification__subtitle">RAsoft</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2022 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Wordpress Developer2</h3>
                                <span className="qualification__subtitle">Self-Employment</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2021 - 2022
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Android Developer2</h3>
                                <span className="qualification__subtitle">Self-Employment</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2020 - 2021
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Python Developer2</h3>
                                <span className="qualification__subtitle">GCS - Test</span>
                                <div className="qualification__calendar">
                                    <i className='uil uil-calendar-alt'></i> 2018 - 2019
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </section>
    )
}

export default Qualification