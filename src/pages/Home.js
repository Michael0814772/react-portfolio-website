import React from 'react'
import Courosel from '../components/Courosel'
import Header from '../components/Header'

function Home() {
    return (
        <div>

            <Header />


            <div className="introduction flex-with-center" style={{ backgroundImage: `url('./introbg.svg')` }}>

                <div>
                    <h1>MICHAEL</h1>

                    <div className="intro-content d-flex justify-content-between">
                        <p>Frontend React <br /> Developer / Engineer</p>
                        <button className='primary-button font-bold'>Get Started</button>
                    </div>
                </div>

            </div>

            <Courosel />

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#001220" fill-opacity="1" d="M0,160L17.1,160C34.3,160,69,160,103,176C137.1,192,171,224,206,213.3C240,203,274,149,309,128C342.9,107,377,117,411,133.3C445.7,149,480,171,514,176C548.6,181,583,171,617,154.7C651.4,139,686,117,720,128C754.3,139,789,181,823,202.7C857.1,224,891,224,926,186.7C960,149,994,75,1029,74.7C1062.9,75,1097,149,1131,176C1165.7,203,1200,181,1234,197.3C1268.6,213,1303,267,1337,272C1371.4,277,1406,235,1423,213.3L1440,192L1440,0L1422.9,0C1405.7,0,1371,0,1337,0C1302.9,0,1269,0,1234,0C1200,0,1166,0,1131,0C1097.1,0,1063,0,1029,0C994.3,0,960,0,926,0C891.4,0,857,0,823,0C788.6,0,754,0,720,0C685.7,0,651,0,617,0C582.9,0,549,0,514,0C480,0,446,0,411,0C377.1,0,343,0,309,0C274.3,0,240,0,206,0C171.4,0,137,0,103,0C68.6,0,34,0,17,0L0,0Z"></path>
                </svg>
            </div>

            <div className="container">
                <div className="row justify-content-start">
                    <div className="col-md-4">

                        <div className='n-box2 p-5 font-bold'>
                            <h1>Yes you are right...</h1>
                            <br></br>
                            <p>I am a Javascript Buff...</p>
                        </div>
                    </div>
                </div>

                <div className="row pt-5 justify-content-center">
                    <div className="col-md-4">

                        <div>
                            <img src="./jsbuff.svg" alt="" height='200' className='w-100' />
                        </div>
                    </div>
                </div>

                <div className="row pt-5 justify-content-end">
                    <div className="col-md-4">

                        <div className='n-box2 p-5 font-bold'>
                            <p>Javascript is one of the most top-ranked programming languages because of its
                                ubiquitous use on all platforms and mass adoption. Main use cases: Web Development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dev-stack container my-5 n-box2 py-5">
                <div className="text-center">
                    <h3 className='text-center font-bold'>My Development Stack</h3>
                    <hr />

                    <img src="./developer.svg" alt="developer" height='200' width='200' />

                </div>

                <div className="row text-center">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <div className='font-bold'>
                            <div className="font-bold">Front End</div>
                            <hr />
                            <p>HTML/CSS</p>
                            <p>Javascript</p>
                            <p>React</p>
                            <p>Redux</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className='font-bold'>
                            <div className="font-bold">UI/Styling</div>
                            <hr />
                            <p>Material UI</p>
                            <p>Bootstrap</p>
                            <p>React Bootstrap</p>
                            <p>Tailwind CSS</p>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>

            <div>

                <h3 className='font-bold text-center'>Who is Michael</h3>

                <div className="who-is-michael flex-with-center" style={{ backgroundImage: `url('/whoismichael.svg')` }}>

                    <div>
                        <h3>Hi, Hello, Namste</h3>
                        <hr />
                        <p><pre>{JSON.stringify({
                            name: "Michael Akinrinmade",
                            from: "Nigeria",
                            age: null,
                            gender: "Male"
                        }, null, 2)}</pre></p>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Home
