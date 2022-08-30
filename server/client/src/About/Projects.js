import React from 'react'
import image from '../assets/project.gif'
import ScrollTop from '../ScrollTop'
import './About.css'
function Projects() {
    return (
        <div id='top' style={{ background: "whiteSmoke" }}><br />
              <ScrollTop/>
            <br />
            <div style={{ textAlign: 'center', color: 'rgba(0,109,184,255)' }}>
                <h3 style={{ fontFamily: 'Quicksand', marginRight: "50px" }}>MILESTONES </h3>
            </div>
            <br />
            <div style={{ display: 'flex' }}>
                <div id="onhover" >
                    <div className="milestone card border-0 shadow" style={{ width: '35vw', margin: "3rem", marginBottom: "0rem", padding: "2rem", textAlign: 'left', }}>
                        <h5 style={{ fontFamily: 'Poppins' }}><strong>Yesreal Technologies Private Limited </strong></h5>
                        Yesreal Technologies is the solution of choice together we can revolutionize how gurus and sishyas form and maintain professional relationships, maximize their opportunities, share information, and hopefully guide them to fulfilling talents and careers. Yrt  leverages the powerful technology to help institutions and companies to meet their scholastic goals on recruitment, branding, and verifications
                    </div>
                </div>


                <div >

                    <div style={{ width: "0.2rem", height: "8vh", background: "rgba(0,109,184,255)", marginLeft: "5.8rem" }}></div>
                    <span className="card border-0 shadow" style={{ color: "white", fontFamily: "Poppins", background: "rgba(0,109,184,255)", padding: "1rem", border: "0.1px solid rgba(0,109,184,255)" }}><strong>December<br/> 2020</strong></span>
                    <div style={{ width: "0.2rem", height: "25vh", background: "rgba(0,109,184,255)", marginLeft: "5.8rem" }}></div>
                </div>
                <div style={{ width: "16vw" }}></div>
                <img src={image} style={{ height: "255px", width: "300px", float: "right" }} />
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: "35vw", margin: "3rem", padding: "2rem", textAlign: 'left', }}>
                </div>
                <div >
                    <div style={{ width: "0.2rem", height: "10vh", background: "rgba(0,109,184,255)", marginLeft: "5.8rem" }}></div>
                    <span className="card shadow" style={{ color: "white", fontFamily: "Poppins", marginLeft: "5rem", background: "rgba(0,109,184,255)", padding: "1rem", border: "0.1px solid rgba(0,109,184,255)" }}><strong>August 2022</strong></span>
                    <div style={{ width: "0.2rem", height: "30vh", background: "rgba(0,109,184,255)", marginLeft: "5.8rem" }}></div>
                </div>
                <div id="onhover">
                    <div className="milestone card border-0 shadow" style={{ width: "38vw", margin: "3rem", padding: "3rem", textAlign: 'left', marginTop: "4rem" }}>
                        <h5 style={{ fontFamily: 'Poppins' }}><strong>Topfaculty.com</strong></h5>
                        Topfaculty.com is the most innovative, comprehensive career management and professional networking, digital branding website, and mobile application for the education industry. Topfaculty.com is one stop destination to find out skilled teachers and allows job seekers to post their CVs and employers to post jobs and digital branding.
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
