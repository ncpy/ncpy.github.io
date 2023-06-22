import React from 'react'
import './home.css'

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://linkedin.com/in/necip-yolcu" className="home__social-icon" target='_blank'>
                <i class="uil uil-linkedin"></i>
            </a>
            <a href="https://github.com/necip-yolcu" className="home__social-icon" target='_blank'>
                <i class="uil uil-github"></i>
            </a>
            <a href="https://leetcode.com/necipy/" className="home__social-icon" style={{}} target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" /></svg>
            </a>
            <a href="https://stackoverflow.com/users/10751265/necip" className="home__social-icon" style={{}} target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 512 512"><path fill="currentColor" d="M392 440V320h40v160H64V320h40v120Z"/><path fill="currentColor" d="m149.1 308.77l198.57 40.87l8.4-39.32l-198.57-40.87Zm26.27-93.12L359.22 300L376 263.76l-183.82-84.84Zm50.95-89l156 127.78l25.74-30.52l-156-127.78ZM328 32l-33.39 23.8l120.82 160.37L448 192ZM144 400h204v-40H144Z"/></svg>
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