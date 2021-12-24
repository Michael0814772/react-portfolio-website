import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

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

                            <div className="d-flex justify-content-between px-3">

                                <FaInstagram className='footer-icon' />
                                <FaInstagram className='footer-icon' />
                                <FaLinkedin className='footer-icon' />
                                <FaGithub className='footer-icon' />
                            </div>

                            <hr />

                            <br />

                            <p>MichaelAkinrinmade</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
