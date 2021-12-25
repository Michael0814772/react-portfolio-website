import React from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import projectData from './projectData'

function Project() {
    return (
        <div>
            <Header />

            <div className="container projects-intro">

                <div className="row flex-with-center mt-5">

                    <div className="col-md-6 n-box2 px-3 py-5" data-aos='fade-up'>

                        <div>
                            <h1 className='font-bold'>Projects</h1>
                            <p className='font-bold'>Good ideas are not adopted automatically. They must be driven into practice with courageous patience</p>
                            <button className='primary-button projects-btn'><a href="#projects-list" style={{color: 'white'}}>Get Started</a></button>
                        </div>
                    </div>

                    <div className="col-md-6 position-relative">

                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="blue" d="M37.4,-64.8C48.2,-58.6,56.4,-47.9,65.2,-36.4C74,-24.8,83.5,-12.4,83.1,
                            -0.2C82.6,11.9,72.3,23.9,63.1,34.7C53.8,45.4,45.6,55.1,35.3,62.2C24.9,69.3,12.5,73.7,0.7,72.6C-11.1,
                            71.4,-22.2,64.6,-33.8,58.2C-45.4,51.9,-57.5,46,-62.6,36.4C-67.7,26.8,-65.8,13.4,-67,-0.7C-68.1,-14.7,
                            -72.3,-29.4,-68,-40.5C-63.8,-51.5,-51,-58.9,-38.3,-63.9C-25.5,-68.9,-12.8,-71.5,0.3,-72C13.3,-72.5,26.7,
                            -70.9,37.4,-64.8Z" transform="translate(100 100)" />
                        </svg>

                        <FaLaptopCode 
                        className='position-absolute top-50 start-50 translate-middle' 
                        color='white' 
                        size='180'
                        />

                    </div>
                </div>
            </div>

            <div className="container projects-list" id='projects-list'>

                <h3 className='font-bold'>Take a look at my projects</h3>
                <hr />

                <div className="row">
                    {projectData.map(project => {
                        return <div className="col-md-4">
                            <div className="position-relative project">
                                <img src={project.image} alt={project.title} />
                                <div className="project-content">
                                    <h3>{project.title}</h3>
                                    <hr />
                                    <p>{project.description}</p>
                                    <button className='primary-button'><a href={project.link} target="_blank">DEMO</a></button>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>

            <Footer />
        </div>
    )
}

export default Project
