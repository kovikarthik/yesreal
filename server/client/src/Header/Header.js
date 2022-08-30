import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/tablogo.jpg'
import '../Mainpage.css'
import './Header.css'
import '../Dropdown.css'
import logoname from '../assets/logo.png'
import ScrollTop from '../ScrollTop'
function Header() {

    let [state,setState]=useState(-1)
    let [showSub,setShowSub]=useState(true)
     
    const mouseLeave =()=>{
        if(!showSub){
            setState(-1)
        }
    }

    const enterSubMenu =(i)=>{
        setShowSub(true)
        setState(i)
    }
        const headercontent = [
        { label: 'Home', routepath: '/yesrealtechnologies/', submenu:
        [
                { label: 'Overview', routepath: '/yesrealtechnologies/about/' },
                { label: 'Vision & Mission', routepath: '/yesrealtechnologies/about/vision' },
                { label: 'Board of Directors', routepath: '/yesrealtechnologies/about/directors' },
                { label: "Milestones", routepath: '/yesrealtechnologies/about/projects' },
                { label: 'Advisory Team', routepath: "/yesrealtechnologies/about/management" }
        ] },
        {
            label: "About", routepath: '/yesrealtechnologies/about/'
            , submenu: [
                { label: "Overview", routepath: "/yesrealtechnologies/business/" },
                { label: "Recruitment", routepath: "/yesrealtechnologies/business/recruitment" },
                { label: "Digital Marketing", routepath: "/yesrealtechnologies/business/digitalmarketing" },
                { label: "Backend Verification", routepath: "/yesrealtechnologies/business/backendverification" },
                { label: "Product development", routepath: "/yesrealtechnologies/business/productdevelopment" },
                { label: "Saas", routepath: "/yesrealtechnologies/business/sass" },
        ]
            },
        
        { label: "Business", routepath: '/yesrealtechnologies/business/' },
        
        { label: "Careers", routepath: '/yesrealtechnologies/careers' },
     
        { label: "Investor Relations", routepath: '/yesrealtechnologies/investor' },

        { label: "Contact", routepath: '/yesrealtechnologies/contact' },
    ]



    return (
        <div  style={{borderBottom:"0.5px solid lightgray",paddingBottom:5,textAlign:"center"}}>
            <div  style={{ padding: '0.3rem',margin:'1rem',width:"98vw" }}><br />
            <span style={{float:'left',position:'fixed',padding:'0',margin:'0',margin:'0',left:'3rem',marginTop:'-1.8rem'}}>
                <img src={logo} style={{height:'4rem',width:'4rem'}}/>
                <img src={logoname} style={{height:'4rem',width:'10rem'}}/>
            </span>
               <span style={{margin:"0",padding:'0'}}>
                    {headercontent.map((h,i) => {
                        return (                  
<span>
                                <NavLink onMouseEnter={() => setState(i-1)}
       to={h.routepath} style={{ padding: '0.7rem', marginTop: '1rem', marginRight: "0.3rem" }} className={({ isActive }) => (isActive) ? 'selected notselected' : 'notselected'}>{h.label}</NavLink>
                                                                

                                {(h.submenu && state==i) && <span onMouseEnter={()=>{enterSubMenu(i)}}
        onMouseLeave={() => setState(-1)}  className='green-box' style={{
                                    position: 'absolute', marginTop: '2.5rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', textAlign: 'left',padding:'1.2rem',zIndex:10,}}>


                                {h.submenu.map((sub) => {
                                    return <NavLink  to={sub.routepath} style={{ padding: '0.7rem', marginTop: '1rem', marginRight: "0.3rem" ,fontSize:'0.9rem' }} className={({ isActive }) => (isActive) ? 'selected notselected' : 'notselected'}>{sub.label}</NavLink>
                                })}
                                    </span>
                                    }
                                                                   
</span>
                            )
                    })
                    }

               </span>
               
            </div>
         
           
        </div>
    )
}

export default Header


// gello this is second



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css';
// import Dropdown from './Dropdown';

// function Header() {
//   const [click, setClick] = useState(false);
//   const [dropdown, setDropdown] = useState(false);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const onMouseEnter = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(true);
//     }
//   };

//   const onMouseLeave = () => {
//     if (window.innerWidth < 960) {
//       setDropdown(false);
//     } else {
//       setDropdown(false);
//     }
//   };

//   return (
//     <>
//       <nav className='navbar'>
//         <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//           EPIC
//           <i class='fab fa-firstdraft' />
//         </Link>
//         <div className='menu-icon' onClick={handleClick}>
//           <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//         </div>
//         <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//           <li className='nav-item'>
//             <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//               Home
//             </Link>
//           </li>
//           <li
//             className='nav-item'
//             onMouseEnter={onMouseEnter}
//             onMouseLeave={onMouseLeave}
//           >
//             <Link
//               to='/services'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Services <i className='fas fa-caret-down' />
//             </Link>
//             {dropdown && <Dropdown />}
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/products'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Products
//             </Link>
//           </li>
//           <li className='nav-item'>
//             <Link
//               to='/contact-us'
//               className='nav-links'
//               onClick={closeMobileMenu}
//             >
//               Contact Us
//             </Link>
//           </li>
//           <li>
//             <Link
//               to='/sign-up'
//               className='nav-links-mobile'
//               onClick={closeMobileMenu}
//             >
//               Sign Up
//             </Link>
//           </li>
//         </ul>
       
//       </nav>
//     </>
//   );
// }

// export default Header;