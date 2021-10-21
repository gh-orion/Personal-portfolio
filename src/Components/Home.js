import React from 'react'
import bg1 from './Images/bg1.jpg'
import Resume from './Resume.pdf'

export default function Home() {
    return (
        <div id="home" className="home d-flex">
            <div id="wrap" className="d-flex align-items-center justify-content-center" >
                <div>
                    <h1 id="h1">Hello.</h1>
                    <p style={{fontWeight:'light', fontSize:'1.5rem'}}>I am Ashwin, enthusiastic front-end web developer. Welcome to my portfilio...</p>
                    <button className="btn btn-outline-danger my-2 my-sm-0"><a rel="noreferrer" href={Resume} style={{textDecoration:'none', color:'red'}} target="_blank">Download Resume</a> </button>
                </div>
            </div>
            <div id="home2" className="d-flex align-items-center justify-content-center" >
                <img className="" id="bg1" src={bg1} alt="" />
            </div>
        </div>
    )
}