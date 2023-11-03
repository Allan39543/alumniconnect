import React from "react";
import logo from '../SiteMedia/logo-removebg.png'
import {BsSearch} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'

function Header(){

    return(

        <div className="header">

            <div className="logo">
                
                <img src={logo} alt="logo"/>

            </div>

            <div className="nav-sidebar-modal">

                <div className="search">

                    <div className="icon">
<BsSearch size="1.5em" />
                    </div>

                    <div className="text">
Search
</div>

                </div>

                <div className="menu-modal">

                <div className="icon">
<GiHamburgerMenu size="1.5em" />
                    </div>

                    <div className="text">
Menu
</div>

</div>

            </div>

        </div>
    )
}

export default Header