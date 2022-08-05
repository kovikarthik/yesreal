import React from 'react'
import './About/About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMapLocationDot, faPhone, faEnvelope,  } from '@fortawesome/free-solid-svg-icons'
import ScrollTop from './ScrollTop';
function Contact() {
  const openwebpage = url => {
    window.open(url, '_blank')
  };
  return (
    <>
      <div id='top' style={{ textAlign: 'center', padding: "1rem", color: "white" }} className="contactus">
        <ScrollTop/><h3 style={{ fontFamily: 'Quicksand' }}>CONTACT US</h3>
      </div>
      <div  style={{ textAlign: "left", padding: '2rem', paddingTop: '0rem', paddingBottom: '0', margin: '0' ,color:'#006db8'}}>
        <br />
        <div className='row' >
          <div className='col' style={{ margin: '4rem', padding: '0' ,marginTop: '3rem' }}>
            <div className='row' style={{ marginLeft: "2rem", display: 'flex', alignItems: 'right', justifyContent: 'right' }}>
              <h4 style={{ fontFamily: "Hind Vadodara" }}><strong>OFFICE</strong></h4><hr/>

              <div className='col-3'> <FontAwesomeIcon style={{ fontSize: '20vh' }} icon={faMapLocationDot} /></div>

              <div className='col'>
                <br></br>

                3094-13th Cross, <br></br>6th A Main 2nd Stage Near ESI Quater <br></br>Indira Nagar Bengaluru <br></br>Bangalore Karanataka <br />  560038 India.<br></br>
              </div>
            </div>
              <br/><br/>
            <div style={{ margin: '2rem', marginTop: '0rem' }}>
                <FontAwesomeIcon icon={faPhone} /> &nbsp; &nbsp; &nbsp; +91 1234567890
                <br></br> <FontAwesomeIcon icon={faEnvelope} /> &nbsp; &nbsp; &nbsp; yrt@yesrealtech.com<br></br><br></br><br/>
              <div >
                <h4 style={{ fontFamily: "Hind Vadodara" }}><strong>SOCIAL MEDIA</strong></h4>  <hr/>
                <i class='bx bxl-linkedin-square bx-tada bx-rotate-90' style={{margin:'0',padding: '0',fontSize:'2rem'}} onClick={() => { openwebpage('https://www.linkedin.com/in/yesreal-technologies-private-limited-91100b233') }} ></i> 
                {/* &nbsp; &nbsp; &nbsp;<i class='bx bxl-facebook-circle bx-tada bx-rotate-90' style={{ margin: '0', padding: '0', fontSize: '2rem' }}></i> 
                <i class='bx bxl-twitter bx-tada bx-rotate-90' style={{ margin: '0', padding: '0', fontSize: '2rem' }}></i> */}
              </div><br></br>
            </div>

          </div>
          <div className='card shadow col-4 border-0 contactus' style={{ height: "55vh", marginRight: "2rem", marginTop: "3.8rem" }}>
            <br />
            <form style={{ margin: '1rem', marginTop: '0rem', color: "grey" }}>
              <span > Name </span> <br></br>
              <input style={{ fontSize: 12, marginBottom: '0.5rem' }} placeholder='Enter your Name' className='form-control shadow-none col-sm' type="text" />
              <span > Mail ID </span> <br></br>
              <input style={{ fontSize: 12, marginBottom: '0.5rem' }} placeholder='Enter your Email ID' className='form-control shadow-none col-sm' type="mail" />
              <span > Mobile </span> <br></br>
              <input style={{ fontSize: 12, marginBottom: '0.5rem' }} placeholder='Enter your Mobile No' className='form-control shadow-none col-sm' type="number" />
              <span > Description </span> <br></br>
              <textarea style={{ fontSize: 12, height: 100 }} placeholder='start typing description .......' className='form-control shadow-none col-sm'></textarea>
              <button className='btn btn-primary' style={{ float: 'left', fontSize: 14, fontWeight: 500, marginTop: 10, marginBottom: 15, fontFamily: 'Hind Vadodara' ,background:"#006db8"}}> Contact
              </button>
            </form>
          </div>

        </div>



      </div>
    </>
  )
}

export default Contact