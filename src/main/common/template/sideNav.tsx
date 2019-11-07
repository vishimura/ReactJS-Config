import React, { useState } from 'react';

import { Icon } from 'office-ui-fabric-react/lib/Icon';

const SideNav = () => {
    const [isMenuOpen, setIsMenuOpen ] = useState(false)
    function handleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <aside className={`side-nav ${!isMenuOpen? "side-nav-closed" : "side-nav-opened"}`}>
            <ul>
                <li onClick={handleMenu}><Icon iconName="GlobalNavButton" /></li>
                <li><a><Icon iconName="HomeSolid" /><p>Home</p></a></li>
                <li><a><Icon iconName="Contact" /><p>Contato</p></a></li>
                <li><a><Icon iconName="FolderOpen" /><p>Documentos</p></a></li>
                <li><a><Icon iconName="ReportDocument" /><p>Relatórios Financeiros</p></a></li>
            </ul>
        </aside>
    )
};

export default SideNav;
