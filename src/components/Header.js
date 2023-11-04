import React, { useState } from "react";
import logo from '../SiteMedia/logo-removebg.png'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import MainNav from "./MainNav";
import { AiOutlineLogin } from 'react-icons/ai'
import SignIn from "./SignIn";

function Header() {

    const [menu, setMenu] = useState(false)
    const [signIn,setSignIn]=useState(false)

    return (

        <div className="header">

            <div className="logo">

                <img src={logo} alt="logo" />

            </div>

            <div className="nav-sidebar-modal">

                <div className="search" onClick={() => setSignIn(true)}>

                    <div className="icon">
                        <AiOutlineLogin size="1.5em" />
                    </div>

                    <div className="text">
                        Sign In
                    </div>

                </div>

                <div className="menu-modal" onClick={() => setMenu(true)}>

                    <div className="icon">
                        <GiHamburgerMenu size="1.5em" />
                    </div>

                    <div className="text">
                        Menu
                    </div>

                </div>

            </div>

            {
                menu && <MainNav closeMenu={setMenu} />
            }

{
                signIn && <SignIn />
            }

        </div>
    )
}

export default Header