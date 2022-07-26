import React from 'react'
import './Footer.css'
import {NavLink} from'react-router-dom'

export default function Footer() {
    const openwebpage =  url=>{
        window.open(url,'_blank')
      };
  return (
   <>
   <div className='footercontent ' style={{width:'100%',margin:'0',padding:'1rem',backgroundColor:'white',color:'rgba(0,109,184,255)',bottom:'0',boxShadow: 'rgba(99, 99, 99, 0.2) 8px 0px 8px 0px'}}>
      <div className='row scrcenter' >
              <NavLink className="col-2 navbarbtn1"  to="/business" >Business</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="/careers" >Careers</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="/media" >Media</NavLink>
              <NavLink className="col-2 navbarbtn1"  to="/investor" >Investor Relations</NavLink>
              <NavLink className="col-2 navbarbtn1" to="/security" >Security & Privacy</NavLink>
              <NavLink className="col-2 navbarbtn1" to="/contact" >Contact</NavLink>
      </div>
      <div className='row scrcenter' >
              <div className="col-2 " style={{paddingLeft:'0.5rem'}}>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="/business" >Overview</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="/business/recruitment" >Recruitment</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="/business/advisors" >Advisors</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="/business/backendverification" >Backend Verification</NavLink><br></br>
                    <NavLink className="col-2 navbarbtn1" style={{fontWeight: 'normal',textDecoration:'none'}}  to="/business/sass" >Saas</NavLink><br></br>
              </div>
              <div className="col-2 " >
                
              </div>
              <div className="col-2 " ></div>
              <div className="col-2 " ></div>
              <div className="col-2 " ></div>
              <div className="col-2 " >
                3094-13th Cross, 6th A Main 2nd Stage Near ESI Quater Indira Nagar Bengaluru Bangalore Karanataka - 560038 India<br></br><br></br>
                <img src='http://www.infoedge.in/images/icon-linkedin-footer.gif' onClick={()=>{openwebpage('https://www.linkedin.com/in/yesreal-technologies-private-limited-91100b233')}} />
                <img src='http://www.infoedge.in/images/icon-facebook-footer.gif'/>
                <img src='http://www.infoedge.in/images/icon-twitter-footer.gif'/>
              </div>
      </div>
      <div className='row scrcenter' style={{}} >@Copyright 2022 Yesreal Technologies Private Limited</div>
    </div>
   </>
  )
}
