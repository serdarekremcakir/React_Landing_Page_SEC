import React from 'react'
import {
    SidebarContainer, Icon,
    SidebarLink, SidebarMenu, SidebarItem,

} from './SidebarElement'

import Logo from '../LogoElement'

const Sidebar = ({ toggle }) => {


    const closeMenu = () => {
        toggle(false);
        document.body.style.overflow = 'unset';
    }

    return (

        <SidebarContainer>
            <Icon  onClick={closeMenu} />
                <SidebarMenu>
                <Logo onClick={closeMenu} to="herosection" 
                            smooth={true} 
                            duration={1500} 
                            spy={true} 
                            offset={-80}>SEC</Logo>

                    <SidebarItem>
                        <SidebarLink to="about" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={closeMenu}>
                            About
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="discover" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={closeMenu}>
                            Discover
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="services" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={closeMenu}>
                            Services
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="team" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={closeMenu}>
                            Team
                        </SidebarLink>
                    </SidebarItem>
                    <SidebarItem>
                        <SidebarLink to="contact" smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} onClick={closeMenu}> 
                            Contact Us
                        </SidebarLink>
                    </SidebarItem>
                </SidebarMenu>


        </SidebarContainer>



    )
}

export default Sidebar