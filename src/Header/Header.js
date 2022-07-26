import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import logo from '../assets/tablogo.jpg'
import '../Mainpage.css'
import './Header.css'
import '../Dropdown.css'
import logoname from '../assets/logo.png'
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
        { label: 'Home', routepath: '/', submenu:
        [
            { label: 'Overview', routepath: '/about' },
            { label: "Milestones", routepath: 'about/projects' },
            { label: 'Vision & Mission', routepath: 'about/vision' },
            { label: 'Board of Directors', routepath: 'about/directors' },
            { label: 'Management Team', routepath: "about/management" }
        ] },
        {
            label: "About", routepath: '/about'
            , submenu: [
            { label: "Overview", routepath: "/business" },
            { label: "Recruitment", routepath: "/business/recruitment" },
            { label: "Product development", routepath: "/business/productdevelopment" },
                { label: "Backend Verification", routepath: "/business/backendverification" },
                { label: "Digital Marketing", routepath: "/business/digitalmarketing" },
            { label: "Saas", routepath: "/business/sass" },
        ]
            },
        
        { label: "Business", routepath: 'business' },
        
        { label: "Careers", routepath: 'careers' },
     
        { label: "Investor Relations", routepath: 'investor' },

        { label: "Contact", routepath: 'contact' },
    ]



    return (
        <div  style={{borderBottom:"0.5px solid lightgray",paddingBottom:10}}>
        
            <div className='container' style={{ padding: '0.6rem',margin:'1rem',marginLeft:'3rem' }}><br />
            <span style={{float:'left',padding:'0',margin:'0',marginTop:'-1.5rem'}}>
                <img src={logo} style={{height:'4rem',width:'4rem'}}/>
                <img src={logoname} style={{height:'4rem',width:'10rem'}}/>
            </span>
               <span >
                    {headercontent.map((h,i) => {
                        return (
                            
<span>
                                <NavLink onMouseEnter={() => setState(i-1)}
       to={h.routepath} style={{ padding: '0.7rem', marginTop: '1rem', marginRight: "0.3rem" }} className={({ isActive }) => (isActive) ? 'selected notselected' : 'notselected'}>{h.label}</NavLink>
                                                                

                                {(h.submenu && state==i) && <span onMouseEnter={()=>{enterSubMenu(i)}}
        onMouseLeave={() => setState(-1)}  className='green-box' style={{
                                    position: 'absolute', marginTop: '2.5rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', textAlign: 'left',padding:'1.2rem',zIndex:10,width:"53vw"}}>


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