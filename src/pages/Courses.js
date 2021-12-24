import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function Courses() {
    return (
        <div>
            <Header />

            <div className='blog-intro' style={{ backgroundImage: `url('./courses.svg')` }}>

                <div className='blog-intro-content'>
                    <h1>MICHAEL'S BLOG</h1>

                    <div>
                        <p>Coming Soon...</p>

                        <button className='primary-button'><Link to="/">RETURN HOME</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Courses
