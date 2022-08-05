import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import ScrollTop from '../ScrollTop';

export default function Footer() {
  const openwebpage = url => {
    window.open(url, '_blank')
  };
  return (
    <>
      <div className='footercontent ' style={{ width: '100%', margin: '0', padding: '1rem', backgroundColor: 'rgba(0,109,184,255)', color: 'white', bottom: '0', boxShadow: 'rgba(99, 99, 99, 0.2) 8px 0px 8px 0px' }}>
        <div className='row scrcenter' >
          <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/business/" >Business</NavLink>
          <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/careers/" >Careers</NavLink>
          <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/about/" >About</NavLink>
          <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/investor/" >Investor Relations</NavLink>
          {/* <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/security/" >Security & Privacy</NavLink> */}
          <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ color: 'white', fontSize: "1.5rem" }} to="/yesrealtechnologies/contact/" >Contact</NavLink>
        </div>
        <div className='row scrcenter' >
          <div className="col-2 " style={{ paddingLeft: '0.5rem' }}>
            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/" >Overview</NavLink><br></br>
            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/recruitment/" >Recruitment</NavLink><br></br>
            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/digitalmarketing/" >Digitalmarketing</NavLink><br></br>

            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/backendverification/" >Backend verification</NavLink><br></br>
            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/productdevelopment/" >Product development</NavLink><br></br>
            <NavLink smooth={true} duration={1000} className="col-2 navbarbtn1" style={{ fontWeight: 'normal', textDecoration: 'none' }} to="/yesrealtechnologies/business/sass/" >Saas</NavLink><br></br>
          </div>
          <div className="col-2 " >

          </div>
          <div className="col-2 " ></div>
          <div className="col-2 " ></div>
          {/* <div className="col-2 " ></div> */}
          <div className="col-2 " style={{ textAlign: "left" }} >
            3094-13th Cross, 6th A Main 2nd Stage Near ESI Quater Indira Nagar Bengaluru Bangalore Karanataka - 560038 India<br></br><br></br><strong>Follow us on </strong><br />
            <i class='bx bxl-linkedin-square bx-tada bx-rotate-90' style={{ margin: '0', marginRight: '2px', paddingRight: '2px', fontSize: '2rem' }} onClick={() => { openwebpage('https://www.linkedin.com/in/yesreal-technologies-private-limited-91100b233') }} ></i>
            {/* <i class='bx bxl-facebook-circle bx-tada bx-rotate-90' style={{ margin: '0', marginRight: '2px', paddingRight: '2px', fontSize: '2rem' }}></i>
            <i class='bx bxl-twitter bx-tada bx-rotate-90' style={{ margin: '0', padding: '0', fontSize: '2rem' }}></i> */}
          </div>
        </div>
        <div className='row scrcenter' style={{}} >@Copyright 2022 Yesreal Technologies Private Limited</div><br></br>
      </div>
    </>
  )
}
