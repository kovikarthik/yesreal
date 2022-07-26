import React from 'react'
import image from '../assets/directorsmale.png'
import dinesh from '../assets/dineshsir.jpg'
import './About.css'
function Directors() {
    return (
        <div style={{ textAlign: "left", padding: '2rem', paddingTop: '0rem' , backgroundColor: 'whiteSmoke',height:'89vh'}}>

            <br />
            <br/>
            <div style={{ textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'Quicksand', color:"#546e7a"}}>BOARD OF DIRECTORS </h3>
            </div>
            <br/>

            {/* <div className="row" style={{ margin: "0rem 7rem" }}>
                <div className="col card border-0 m-2 shadow" style={{ padding: "4rem" }}>
                    <div style={{ display: "flex" }}>
                        <div> <img src={image} style={{ width: '150px', height: '160px' , borderRadius: '50%', boxShadow: "0px 3px 8px  rgba(0, 0, 0, 0.24)", paddingTop: '10px' }} />  </div>
                        <div style={{ marginLeft: '2rem' }}>
                            <h3> <strong>Sanjeev Bikhchandani</strong></h3>
                            <span> Chairman and Non-Executive Director <br />Chairman-Stakeholders’ Relationship Committee</span><br />
                            <span style={{ fontSize: '0.9rem', color: "grey" }}>
                              Sujeeth started his professional career in 1987 with Nestle India Limited. He later worked with Bausch & Lomb, where he was part of the startup team that launched RayBan sunglasses and the Bausch & Lomb vision care range in India. He subsequently went on to manage the overseas marketing territories of Russia, Ukraine and East Africa in addition to the SAARC region. In 1996, Mr. Kapoor relocated to Thailand as the Country Manager for Bausch & Lomb and Commercial Director for South East Asia and the SAARC region.

                                He has a Bachelor of Arts degree in Economics from the University of Delhi and a Post Graduate Diploma in Management (PGDM) from the Indian Institute of Management (IIM), Ahmedabad.</span></div>
                    </div>
                </div>
            </div> */}

            <div className='row m-2'>

                <div className='col card shadow p-0 m-1 halfdirect border-0'>
                
                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: "2rem" }} ><br/>
                            <img src={image} style={{ height: "130px", width: "120px", borderRadius: '50%', boxShadow: "0px 3px 8px  rgba(0, 0, 0, 0.24)", paddingTop: '10px' ,backgroundColor:"white"}} />
                        </div>
                        <div style={{ marginLeft: '2rem' }}><br/><br/>
                            <strong style={{ fontSize: '1.1rem' }} className='pop'>Sujeeth Nadella</strong> <br />
                            Chairman and Non-Executive Director <br />Chairman-Stakeholders’ Relationship Committee
                        </div>
                    
                    </div>
                    <div style={{ marginLeft: "6rem" ,padding:'1rem' }} >
                     
                         Mr. Sudeesh started his professional career in 1987 with Nestle India Limited. He later worked with Bausch & Lomb, where he was part of the startup team that launched RayBan sunglasses and the Bausch & Lomb vision care range in India. He subsequently went on to manage the overseas marketing territories of Russia, Ukraine and East Africa in addition to the SAARC region. In 1996, Mr. Kapoor relocated to Thailand as the Country Manager for Bausch & Lomb and Commercial Director for South East Asia and the SAARC region.

                        He has a Bachelor of Arts degree in Economics from the University of Delhi and a Post Graduate Diploma in Management (PGDM) from the Indian Institute of Management (IIM), Ahmedabad.
                    </div>
                </div>

               
                <div className='col card shadow p-0 m-1 halfdirect border-0'>

                    <div style={{ display: 'flex' }}>
                        <div style={{ marginLeft: "2rem" }} ><br />
                            <img src={dinesh} style={{ height: "130px", width: "120px", borderRadius: '50%', boxShadow: "0px 3px 8px  rgba(0, 0, 0, 0.24)", paddingTop: '10px', backgroundColor: "white" }} />
                        </div>
                        <div style={{ marginLeft: '2rem' }}><br /><br />
                            <strong style={{ fontSize: '1.1rem' }} className='pop'> Dinesh Motakatla</strong> <br />
                            Chairman and Non-Executive Director <br />Chairman-Stakeholders’ Relationship Committee
                        </div>

                    </div>
                    <div style={{ marginLeft: "6rem", padding: '1rem' }} >

                        Mr. Dinesh started his professional career in 1987 with Nestle India Limited. He later worked with Bausch & Lomb, where he was part of the startup team that launched RayBan sunglasses and the Bausch & Lomb vision care range in India. He subsequently went on to manage the overseas marketing territories of Russia, Ukraine and East Africa in addition to the SAARC region. In 1996, Mr. Kapoor relocated to Thailand as the Country Manager for Bausch & Lomb and Commercial Director for South East Asia and the SAARC region.

                        He has a Bachelor of Arts degree in Economics from the University of Delhi and a Post Graduate Diploma in Management (PGDM) from the Indian Institute of Management (IIM), Ahmedabad.
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Directors