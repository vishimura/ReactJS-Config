import React from 'react';
import NavMenuItem from './components/navMenuItem'

import Breadcrumb from './components/breadcrumb'

const Logo = require('../../../assets/images/logo.png');
const Avatar = require('../../../assets/images/avatar.png')

const breadcrumbList = [
    {
        iconName: "HomeSolid",
        page: "Home",
        link: "#"
    }
]

const Header = () => {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <Breadcrumb items={breadcrumbList} />
            </div>
            <div className="navbar-menu">
                <NavMenuItem iconName="calendar" />
                <NavMenuItem iconName="ringer" qntBadge={5} />
                <NavMenuItem iconName="Settings" />
                <NavMenuItem iconName="help" />
                <div className="nav-menu-item" onClick={() => alert("teste")}>
                    <img src={Avatar} alt="Roma" className="avatar" />
                </div>
            </div>
        </div>
    )
};

export default Header;
