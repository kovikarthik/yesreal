import React from 'react'
import image from './assets/investors.gif'
import { NavLink } from 'react-router-dom'
import ScrollTop from './ScrollTop'

function Investor() {
  return (
    <div id='top' style={{ background: "#FFD029" }}>
           <ScrollTop/> <div className="row" style={{ height: "89vh", margin: "0rem", textAlign: "left" }}>
        <div className="col-4" style={{ padding: "0rem", marginLeft: "7rem" }}><br /><br /><br />
          <img src={image} className="card shadow" style={{ height: "60vh", width: "30vw", bottom: 0, marginTop: "1.5rem", marginRight: "4rem", borderRadius: "50%" }} />
        </div>
        <div className="col" style={{ padding: "6rem", paddingRight: '0', paddingLeft: "0" }}> <br /><br /><br /><br /><br />
          <h1 style={{ fontFamily: "Quicksand" }}>Hello !<br /> We are in search of investees.</h1>
          <span>&nbsp;If you can invest please contact us . Make a smart move and <strong>JOIN US .</strong></span>
          <br /><br />
          <NavLink to='/yesrealtechnologies/contact/'><button className="btn btn-dark">Contact us</button></NavLink>

        </div>

      </div>

    </div>
  )
}

export default Investor