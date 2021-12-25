import React from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <div className='footer'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320">
                    <path
                        fill="#001220"
                        fill-opacity="1"
                        d="M0,160L40,176C80,192,160,224,240,229.3C320,235,400,213,480,186.7C560,160,640,128,720,117.3C800,107,880,117,960,149.3C1040,181,1120,235,1200,245.3C1280,256,1360,224,1400,208L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z">
                    </path>
                </svg>

                <div className="row justify-content-center footer-content">
                    <div className="col-md-6">
                        <div className="div">
                            <p>Designed and Developed By</p>
                            <hr />

                            <div className="d-flex justify-content-between px-3 footer-icons">

                                <a href="https://www.linkedin.com/in/michael-developer/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='footer-icon' /></a>
                                <a href="https://stackoverflow.com/users/11439822/michael-akin" target="_blank" rel="noopener noreferrer"><FaStackOverflow className='footer-icon' /></a>
                                <a href="https://www.linkedin.com/in/michael-developer/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='footer-icon' /></a>
                                <a href="https://github.com/Michael0814772" target="_blank" rel="noopener noreferrer"><FaGithub className='footer-icon' /></a>
                            </div>

                            <hr />

                            <br />

                            <p>M<span className='letter'>i</span>c<span className='letter'>H</span>a<span className='letter'>E</span>l A<span className='letter'>k</span>i<span className='letter'>N</span>r<span className='letter'>I</span>n<span className='letter'>M</span>a<span className='letter'>D</span>e</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
