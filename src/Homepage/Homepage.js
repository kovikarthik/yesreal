import React from 'react'
import { NavLink } from 'react-router-dom'
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import career from '../assets/career.jpg'
import bussiness from '../assets/bussiness.jpg'
import investment from '../assets/investment.png'
import about from '../assets/about.jpg'
import hometop from '../assets/hometop.png'
import bussinessact from '../assets/bussinessact.jpg' 
import testimonial from '../assets/testimonial.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../About/About.css'
import { faPersonWalking, faLightbulb, faCheckCircle, faServer } from '@fortawesome/free-solid-svg-icons'


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
      <li dataTarget="#myCarousel" dataSlideTo="0" className="active"></li>
      <li dataTarget="#myCarousel" dataSlideTo="1"></li>
      <li dataTarget="#myCarousel" dataSlideTo="2"></li>
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
      <div className="aboutus">
        {/* <div> */}
        <div style={{ padding: "6rem", paddingTop: "3.5rem", paddingLeft: "17vw", paddingBottom: "0" }} >
          <Carousel style={{ width: "68vw" ,height:'60vh'}} className="card shadow">
            {/* <Carousel > */}
            <Carousel.Item interval={3000} >
              <img
                style={{ width: "68vw", height: '60vh' }} 
                className="d-block w-100"
                src={about}
                alt="Third slide"
              />
              <Carousel.Caption>
                <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/about" ><h2>ABOUT YRT</h2></NavLink>
                <h5>
                  You get recessions, you have stock market declines. If you don't understand that's going to happen, then you're not ready, you won't do well in the markets.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                style={{ width: "68vw", height: '60vh' }}

                className="d-block w-100"
                src={career}
                alt="First slide"
              />
              <Carousel.Caption>
                <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/careers" ><h2>CAREER</h2></NavLink>
                <h5>With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                style={{ width: "68vw", height: '60vh' }}

                className="d-block w-100"
                src={bussiness}
                alt="Second slide"
              />
              <Carousel.Caption>

                <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/business" > <h2>BUSSINESS</h2></NavLink>

                <h5>Ahead of competition in an ever-changing volatile market, the company’s recent focus has been to develop new things</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                style={{ width: "68vw", height: '60vh' }} 

                src={investment}
                alt="Third slide"
              />
              <Carousel.Caption>

                <NavLink className="navbarbtn1" style={{ color: 'white', textDecoration: 'none', fontWeight: 'bold' }} to="/investor" > <h2 >INVESTOR RELATIONSHIP</h2></NavLink>

                <h5>
                  The most important quality for an investor is temperament, not intellect that YRT provides
                </h5>
              </Carousel.Caption>
            </Carousel.Item>

          </Carousel>
        </div>
      
            <div className='row'  style={{margin:'4rem',padding:'0'}}>
      <div className='col-6' style={{margin:'0',padding:'0'}}>
        <img src={bussinessact} style={{width:'100%',height:'100%'}}/>
      
      </div>
        <div className='col' style={{ backgroundColor: 'whitesmoke', margin: '0', padding: '0', textAlign: 'center', paddingTop: '3rem' }}><br></br><br></br>
          <div className='' style={{ fontSize: '2rem' }}>Bussiness Activities</div>
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
              &nbsp; <span style={{ fontWeight: 'bold' }}>ADVISORS</span>

              {/* <Carousel.Caption> */}
              {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <FontAwesomeIcon style={{ color: 'rgba(0,109,184,255)' }} className='icon' icon={faCheckCircle} />&nbsp;
              &nbsp; <span style={{ fontWeight: 'bold' }}>BACKEND VERIFICATION</span>

              {/* <Carousel.Caption> */}
              {/* </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <FontAwesomeIcon style={{ color: 'rgba(0,109,184,255)' }} className='icon' icon={faServer} />&nbsp;
              &nbsp; <span style={{ fontWeight: 'bold' }}>SAAS</span>

              {/* <Carousel.Caption> */}
              {/* </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel><br></br><br></br>
          <NavLink className='btn btn-info' style={{ boxShadow: 'none' }} to="/business" >All Bussiness Activities</NavLink>
        </div>
      </div>
      {/* <div style={{backgroundImage:`url(${testimonial})`,backgroundRepeat: 'no-repeat',backgroundSize:'100% 100%',alignItems:'center',justifyContent:'center'}}> */}
      <div style={{ backgroundColor: '#000', color: 'white', backgroundSize: '100% 100%', alignItems: 'center', justifyContent: 'center' }}>
        {/* <img src={testimonial} style={{width:'100%'}}></img> */}
        <br></br><br></br><span style={{ paddingTop: '2rem', fontWeight: 'bold', fontSize: '2rem' }}>Client Testimonials</span><br></br><br></br>
        <Carousel variant="dark" style={{ overflow: 'hidden' }} >
          <Carousel.Item interval={5000}>
            {/* <Carousel.Caption></Carousel.Caption> */}
            &nbsp; <span style={{ fontWeight: 'bold' }}>"YRT has one of the most astonishing team of seasoned professionals who have the distinct ability to surpass client expectations, each time.
              <br></br>Their expertise, industry relationships and long term vision has propelled them as one of the best in the business."

              <br></br> -Mike | Vice President | South Asia Discovery Networks Asia Pacific</span>
          </Carousel.Item>
          <Carousel.Item interval={5000} >
            {/* <FontAwesomeIcon style={{color:'rgba(0,109,184,255)'}} className='icon' icon={faLightbulb} />&nbsp; */}
            &nbsp; <span style={{ fontWeight: 'bold' }}>"YRT has one of the most astonishing team of seasoned professionals who have the distinct ability to surpass client expectations, each time.
              <br></br>Their expertise, industry relationships and long term vision has propelled them as one of the best in the business."

              <br></br> -Charlee  | Vice President | South Asia Discovery Networks Asia Pacific</span>

          </Carousel.Item>
          <Carousel.Item interval={5000}>
            {/* <FontAwesomeIcon style={{color:'rgba(0,109,184,255)'}} className='icon' icon={faCheckCircle} />&nbsp; */}
            &nbsp; <span style={{ fontWeight: 'bold' }}>"YRT has one of the most astonishing team of seasoned professionals who have the distinct ability to surpass client expectations, each time.
              <br></br>Their expertise, industry relationships and long term vision has propelled them as one of the best in the business."

              <br></br> -Lueise  | Vice President | South Asia Discovery Networks Asia Pacific</span>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            {/* <FontAwesomeIcon style={{color:'rgba(0,109,184,255)'}} className='icon' icon={faServer} />&nbsp; */}
            &nbsp; <span style={{ fontWeight: 'bold' }}>"YRT has one of the most astonishing team of seasoned professionals who have the distinct ability to surpass client expectations, each time.
              <br></br>Their expertise, industry relationships and long term vision has propelled them as one of the best in the business."

              <br></br> -Frances | Vice President | South Asia Discovery Networks Asia Pacific</span>
          </Carousel.Item>
        </Carousel><br></br><br></br>
        </div>
      </div>
    </>
  )
}

export default Homepage