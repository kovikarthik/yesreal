import React from 'react'
import vision from '../assets/vision.jpg'
import mission from '../assets/mission.gif'
import dinesh from '../assets/dineshsir.jpg'
import './About.css'
function Vision() {
    return (
        <div style={{ textAlign: "left", padding: '2rem', paddingTop: '0rem' }}>
                
<br/>


           <div style={{textAlign:'center'}}>
             <h3 style={{fontFamily: 'Quicksand'}}>VISION & MISSION </h3>
           </div>
<br/>
<div style={{marginLeft:"4rem"}}>


            <div className='row' >
                <div className='col-1'></div>
                 <div className='col-7' style={{background:"whiteSmoke",padding:'2rem',borderBottomLeftRadius:'10px',borderTopLeftRadius:"10px"}}>
         <strong style={{fontSize:'1.1rem'}}>Our Vision</strong><br />
            To leverage the powerful technology to help institutions and companies to meet their scholastic goals on recruitment, branding, and verifications
            <br /><br />
    </div>
    <div className='col halfback'   >
                            <img src={vision} style={{ height: "240px", width: "250px" ,borderRadius:'50%',boxShadow: "0px 3px 8px  rgba(0, 0, 0, 0.24)"}} />

    </div>
   
</div>
           <br/><br/>
             <div className='row' >
                <div className='col-1'></div>
                 <div className='col-3 halfbacktwo'   >
                            <img src={mission} style={{ height: "240px", width: "250px" ,borderRadius:'50%',boxShadow: "0px 3px 8px  rgba(0, 0, 0, 0.24)"}} />

    </div>
   
                 <div className='col-6' style={{background:"whiteSmoke",padding:'2rem',borderBottomRightRadius:'10px',borderTopRightRadius:"10px"}}>
         <strong style={{fontSize:'1.1rem'}}> Our Mission</strong><br/>
         The solution of choice together we can revolutionize how gurus and sishyas form and maintain professional relationships, maximize their opportunities, share information, and hopefully guide them to fulfilling talents and careers.
<br/><br/>
    </div>
   
</div>




</div>
            
            {/* <strong style={{fontSize:'1.1rem'}}>Our Values</strong>
            <ul>
                <li>Customer Delight</li>
                <li>Entrepreneurship</li>
                <li>Knowledge</li>
                <li>Results</li>
                <li>Trust</li>
            </ul> */}
        </div>
    )
}

export default Vision