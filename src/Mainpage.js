import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header/Header.js'
import './Mainpage.css'
import Footer from './Footer/Footer'
// import ScrollTop from './ScrollTop.js'
function Mainpage() {
    return (
        <div >

            <Header />

            <div id='maintop' style={{ maxHeight: "89.2vh", position: "fixed", width: '100vw' }} className="table-responsive">
                {/* <ScrollTop/> */}
                <Outlet></Outlet>
            <Footer/>
            </div>
        </div>
    )
}

export default Mainpage