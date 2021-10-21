import React from 'react'
import cpp from './Images/cpp.png'
import js from './Images/js.png'
import react from './Images/react.png'
import node from './Images/node.png'
import GIF from './Images/bg1.gif'

export default function About() {
    return (
        <div id="about" className="home">
            <div className="d-flex align-items-center">
                <div className="logodiv d-flex justify-content-center align-items-center">
                    <img className="logo logo1" style={{ height: '200px', width: '200px' }} src={GIF} alt="" />
                </div>
                <div id="hi" style={{ marginLeft: '3%' }} className="d-flex justify-content-center flex-column align-items-center">
                    <h1 id="h2" className="mb-4">About Me</h1>
                    <ul>
                        <li className="li">I am Ashwin Patel, 3rd year ECE student.</li>
                        <li className="li">Currently persuing my Bachelors degree in ECE from SVNIT and will be graduated by 2023.</li>
                        <li className="li">Dedicated frontend web developer with creative and analytic skills.</li>
                        <li className="li">Completed senior secondary education from KVS Makarpura, Gujarat.</li>
                    </ul>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-column align-items-center">
                <h1 id="h2">Skills</h1>
                <div className="d-flex">
                    <div className="logodiv2 d-flex justify-content-center align-items-center">
                        <img className="logo lo1 mx-2" src={cpp} alt="" />
                    </div><div className="logodiv2 d-flex justify-content-center align-items-center">
                        <img className="logo lo2 mx-4" src={js} alt="" />
                    </div>
                    <div className="logodiv2 d-flex justify-content-center align-items-center">
                        <img className="logo lo3 mx-4" src={react} alt="" />
                    </div>
                    <div className="logodiv2 d-flex justify-content-center align-items-center">
                        <img className="logo lo4 mx-4" src={node} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
