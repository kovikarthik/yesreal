import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './Header/Header.js'
import './Mainpage.css'
import Footer from './Footer/Footer'
function Mainpage() {
    return (
        <div >

            <Header />

            <div style={{ maxHeight: "89.2vh", position: "fixed", width: '100vw' }} className="table-responsive">
                <Outlet></Outlet>
            <Footer/>
            </div>
        </div>
    )
}

export default Mainpage