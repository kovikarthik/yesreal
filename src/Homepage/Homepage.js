import React from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import career from '../assets/career.jpg'
import bussiness from '../assets/business.gif'
import investment from '../assets/investment.gif'
import about from '../assets/about.jpg'
import hometop from '../assets/hometop.png'
import bussinessact from '../assets/bussinessact.gif'
import testimonial from '../assets/testimonial.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../About/About.css'
import { faPersonWalking, faLightbulb, faCheckCircle, faServer } from '@fortawesome/free-solid-svg-icons'
import ScrollTop from '../ScrollTop';


function Homepage() {
  return (
    <>

      {/* <div className='inverstors table-responsive' >
      <div className='slider'>
          <div className='slide slide1'>
              <div className='caption'>
                    <h5>With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future</h5>
                    <h4>For more...</h4>
              </div>
          </div>
          <div className='slide slide2'>
              <div className='caption'>
                    <h5>The Individual Investor should act consistently as an investor and not as a speculator</h5>
                    <h4>For more...</h4>
              </div>
          </div>
          <div className='slide slide3'>
              <div className='caption'>
                    <h5>It's not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for</h5>
                    <h4>For more...</h4>
              </div>
          </div>
          <div className='slide slide4'>
              <div className='caption'>
                    <h5>You get recessions, you have stock market declines. If you don't understand that's going to happen, then you're not ready, you won't do well in the markets.</h5>
                    <h4>For more...</h4>
              </div>
          </div>
      </div>

    </div> */}

      {/* <div className="container">
  <h2>Carousel Example</h2>
  <div id="myCarousel" className="carousel slide" dataRide="carousel">
    <ol className="carousel-indicators">
      <li dataTarget="#myCarousel" dataSlideTo="yesrealtechnologies/0" className="active"></li>
      <li dataTarget="#myCarousel" dataSlideTo="yesrealtechnologies/1"></li>
      <li dataTarget="#myCarousel" dataSlideTo="yesrealtechnologies/2"></li>
    </ol>

    <div className="carousel-inner">

      <div className="item active">
        <img src="https://www.abcconsultants.in/wp-content/uploads/2018/01/home-banner_min-min.jpg" alt="Los Angeles" style={{width:'100%'}}/>
        <div className="carousel-caption">
          <h3>Los Angeles</h3>
          <h5>LA is always so much fun!</h5>
        </div>
      </div>

      <div className="item">
        <img src="https://www.abcconsultants.in/wp-content/uploads/2018/01/home-banner_min-min.jpg" alt="Chicago" style={{width:'100%'}}/>
        <div className="carousel-caption">
          <h3>Chicago</h3>
          <h5>Thank you, Chicago!</h5>
        </div>
      </div>
    
      <div className="item">
        <img src="https://www.abcconsultants.in/wp-content/uploads/2018/01/home-banner_min-min.jpg" alt="New York" style={{width:'100%'}}/>
        <div className="carousel-caption">
          <h3>New York</h3>
          <h5>We love the Big Apple!</h5>
        </div>
      </div>
  
    </div>


    <a className="left carousel-control" href="#myCarousel" dataSlide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" dataSlide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div> */}
      {/* <div>
          <img src={hometop} style={{width:'100%',height:'100%'}}/>
      </div> */}
      <div className="homeaboutus" id="top">
        {/* <div> */}<ScrollTop />

        <div style={{ paddingBottom: "0" }} >
          <Carousel style={{ height: "87vh" }} className="card shadow">
            {/* <Carousel > */}
            {/* <Carousel.Item interval={3000} >
              <img
                style={{ width: "68vw", height: '89vh' }}
                className="d-block w-100"
                src={about}
                alt="Third slide"
              />
              <Carousel.Caption>
                <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="yesrealtechnologies/about" ><h2>ABOUT YRT</h2></NavLink>
                <h5>
                  You get recessions, you have stock market declines. If you don't understand that's going to happen, then you're not ready, you won't do well in the markets.
                </h5>
              </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item interval={3000}>
              <div className='row' style={{ background: "#4d888e", height: "87vh", width: "100vw" }}>
                <div className='col'><br /><br /><br /><br />
                  <img
                    style={{ width: "68vw", height: '58vh' }}

                    className="d-block w-100"
                    src={career}
                    alt="First slide"
                  />
                </div>
                <div className='col shadow' style={{ padding: "12rem 4rem", borderTopLeftRadius: "50%", }}>
                  <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="yesrealtechnologies/careers" ><h2 style={{ fontFamily: "Poppins", color: "white", fontSize: "4rem" }}><strong>Career</strong></h2></NavLink>
                  <h5 style={{ color: "white" }}>With a good perspective on history, we can have a better <br />understanding of the past and present, and thus a clear vision of the future</h5>
                </div>
              </div>

              {/* <Carousel.Caption>
              
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <div className="row">

                <div className='col ' style={{ padding: "12rem 4rem", background: "whiteSmoke", borderTopRightRadius: "60%", }}>
                  <br />
                  <NavLink className="navbarbtn1" style={{ textDecoration: 'none' }} to="/yesrealtechnologies/business/" > <h1 style={{ fontFamily: "Poppins", color: "#1b1c1e", fontSize: "4rem" }}><strong>Bussiness</strong></h1></NavLink><br />
                  <h5 >Ahead of competition in an ever-changing volatile market, the company’s recent focus has been to develop new things</h5></div>

                <div className='col'>
                  <img
                    style={{ width: "68vw", height: '86vh' }}

                    className="d-block w-100"
                    src={bussiness}
                    alt="Second slide"
                  />
                </div>
              </div>


            </Carousel.Item>







            <Carousel.Item interval={3000}>
              <div className='row' style={{ height: "87vh" }}>
                <div className='col-5 ' style={{ padding: "10rem 4rem", paddingRight: "0rem" }}>
                  <NavLink className="navbarbtn1" style={{ textDecoration: 'none', fontWeight: 'bold' }} to="yesrealtechnologies/careers" ><h2 style={{ fontFamily: "Poppins", fontSize: "4rem", color: "rgba(0,109,184,255)" }}><strong>Investor Relationships</strong></h2></NavLink>
                  <h5>The most important quality for an investor<br /> is temperament, not intellect that YRT provides .</h5>
                </div>

                <div className='col' style={{ width: "30vw" }} >
                  <img
                    style={{ height: '80vh', width: "55vw", marginTop: "7vh" }}


                    src={investment}
                    alt="First slide"
                  />
                </div>

              </div>
            </Carousel.Item>

          </Carousel>
        </div>

        <div className='row ' style={{ margin: '8rem 4rem', padding: '0', marginBottom: 0, paddingBottom: "8rem" }}>
          <div className='col-6 shadow' style={{ margin: '0', padding: '0', background: "white", borderTopLeftRadius: "7px", borderBottomLeftRadius: "7px" }}>
            <img src={bussinessact} style={{ width: '30vw', height: '60vh', borderTopLeftRadius: "7px" }} />

          </div>
          <div className='col ' style={{ backgroundColor: 'whiteSmoke', margin: '0', padding: '0', textAlign: 'center', paddingTop: '3rem', borderTopRightRadius: "7px", borderBottomRightRadius: "7px" }}>
            <br></br><br></br>
            <div className='' style={{ fontSize: '2rem', fontFamily: "poppins", color: '#006db8' }}><strong>Bussiness Activities</strong></div>
            <div className='' style={{ margin: '1.5rem', fontSize: '1.2rem' }}>In order to provide clients with specialised solutions, YRT has developed expertise in the following industry segments:</div>
            <br></br>
            <Carousel variant="dark" style={{ overflow: 'hidden' }} >
              <Carousel.Item interval={1000}>
                {/* <Carousel.Caption> */}
                <FontAwesomeIcon style={{ color: 'rgba(0,109,184,255)' }} className='icon' icon={faPersonWalking} />&nbsp;
                &nbsp; <span style={{ fontWeight: 'bold' }}>RECRUITMENT</span>
                {/* </Carousel.Caption> */}
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <FontAwesomeIcon style={{ color: 'rgba(0,109,184,255)' }} className='icon' icon={faLightbulb} />&nbsp;
                &nbsp; <span style={{ fontWeight: 'bold' }}>PRODUCT DEVELOPMENT</span>

                {/* <Carousel.Caption> */}
                {/* </Carousel.Caption> */}
              </Carousel.Item>
            </Carousel><br></br><br></br>
            <NavLink className='btn btn-primary' style={{ boxShadow: 'none', backgroundColor: '#006db8' }} to="yesrealtechnologies/business" >All Bussiness Activities</NavLink>
          </div><br></br><br></br>
        </div>
      </div>
    </>
  )
}

export default Homepage