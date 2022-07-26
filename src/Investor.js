import React from 'react'
import image from './assets/investors.gif'
import {NavLink} from 'react-router-dom'

function Investor() {
  return (
    <div>
      <div className="row" style={{ backgroundColor: 'black', height: "89vh", color: "white", margin: "0rem",  textAlign: "left" }}>
        <div className="col" style={{ padding: "7rem",paddingRight:'0' }}> <br/><br/><br/>
          <h1 style={{ fontFamily: "Quicksand" }}>Hello !<br/> We are in search of investees.</h1>
          <span>&nbsp;If you can invest please contact us . Make a smart move and <strong>JOIN US .</strong></span>
          <br /><br />
          <NavLink to='/contact'><button className="btn btn-warning">Contact us</button></NavLink>
          
        </div>
        <div className="col" style={{padding:"0rem",margin: "0rem"}}><br/><br/>
          <img src={image} style={{ height: "60vh",width: "50vw" , bottom:0 ,marginTop:"6rem" ,marginRight:"4rem"}}/>
        </div>
      </div>

    </div>
  )
}

export default Investor