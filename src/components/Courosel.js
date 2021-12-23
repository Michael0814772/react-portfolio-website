import React from 'react'
import { FaBootstrap, FaCss3, FaHtml5, FaJava, FaJsSquare, FaReact } from 'react-icons/fa'
import { SiMaterialui, SiRedux } from 'react-icons/si'

function Courosel() {
    return (
        <div>

            <div className="courosel-parent position-relative">
                <h1 className='position-absolute top-0 start-0 end-0 text-center'>Techologies I use</h1>

                <div className="gallery">

                    <span style={{'--i' : 1}}>
                        <FaReact color='cyan' />
                    </span>

                    <span style={{'--i' : 5}}>
                        <SiRedux color='764ABC' />
                    </span>

                    <span style={{'--i' : 3}}>
                        <FaBootstrap color='7952B3' />
                    </span>

                    <span style={{'--i' : 4}}>
                        <FaJava color='orange' />
                    </span>

                    <span style={{'--i' : 2}}>
                        <FaHtml5 color='orange' />
                    </span>

                    <span style={{'--i' : 6}}>
                        <FaCss3 color='blue' />
                    </span>

                    <span style={{'--i' : 7}}>
                        <FaJsSquare color='yellow' />
                    </span>

                    <span style={{'--i' : 8}}>
                        <SiMaterialui color='0071E4' />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Courosel
