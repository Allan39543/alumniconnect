import React,{useState} from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import logo from '../SiteMedia/logo-removebg.png'

function MainNav({closeMenu}) {

    

    return (
        <nav className='main-nav'>

            <div className='close-modal' onClick={()=>closeMenu(false)} >

                <div className='close-text'>
                    Close
                </div>

                <div className='close-icon'>
                    <AiOutlineCloseCircle size="1.5em" />
                </div>

            </div>


            <div className='menu'>

                <div className="logo">

                    <img src={logo} alt="logo" />

                </div>

                <ComponentLinks to="/" onClick={()=>closeMenu(false)}>
                    <div className='links'>
                        Home
                    </div>

                </ComponentLinks >

                <ComponentLinks to="/about">
                    <div className='links'>
                        About Us
                    </div>
                </ComponentLinks >

            </div>
        </nav>
    )
}

export default MainNav

function ComponentLinks({ to, children, ...props }) {

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (


        <Link to={to} {...props} className={isActive ? 'main-active' : ""}>
            {children}
        </Link>

    )

}