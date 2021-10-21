import React from 'react'
import WA from './Images/proj5.png'
import todo from './Images/proj4.png'
import proj3 from './Images/proj3.png'
import proj2 from './Images/proj2.png'
import proj1 from './Images/proj1.png'
import proj6 from './Images/proj6.png'
import proj7 from './Images/proj7.png'


export default function Projects() {
    return (
        <div id="projects" className="home">
            <div className="d-flex align-items-center justify-content-center pt-3">
                <h1 id="h2" className="pb-2">Projects</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="card mx-2 my-2 c2">
                    <img src={proj7} className="lo card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '1.35rem' }} className="card-text">Personal portfolio.</p>
                    </div>
                </div>
                <div className="card mx-2 my-2 c2">
                    <img src={proj6} className="lo card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '1.35rem' }} className="card-text">News App (React router dom, fetch api, infinite scroll).</p>
                    </div>
                </div>
                <div className="card mx-2 my-2 c2">
                    <img src={WA} className="lo card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '1.35rem' }} className="card-text">Weather app: Gives weather of various places by api fetch.</p>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <h1 id="h2" className="pb-2">Other Fun projects</h1>
            </div>
            <div className="d-flex align-items-center justify-content-center">
                <div className="card mx-2 my-2 c1">
                    <img src={todo} className="logo2 card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '0.98rem' }} className="card-text">Todo List</p>
                    </div>
                </div>
                <div className="card mx-2 my-2 c1">
                    <img src={proj1} className="logo2 card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '0.98rem' }} className="card-text">Text analyzer</p>
                    </div>
                </div>
                <div className="card mx-2 my-2 c1">
                    <img src={proj3} className="logo2 card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '0.98rem' }} className="card-text">Generating random color squares (infinite scroll bar).</p>
                    </div>
                </div>
                <div className="card mx-2 my-2 c1">
                    <img src={proj2} className="logo2 card-img-top" alt="..." />
                    <div className="card-body">
                        <p style={{ fontWeight: 'light', fontSize: '0.98rem' }} className="card-text">Trying various color codes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
