import React,{useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib';
import { Nav, NavbarContainer, MobileMenu,NavMenu,NavItem
,NavLinks } from './NavbarElements'
import Sidebar from '../Sidebar'
import Logo from '../LogoElement'

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const [navbarColor, setNavbarColor] = useState(false);

    const changeColor = () => {
        if(window.scrollY >= 80){
            setNavbarColor(true);
        }else{
            setNavbarColor(false);
        }
    }

    useEffect(() => {
      window.addEventListener('scroll', changeColor)
    }, [])
    

    const openMenu =  () => {
        setToggleMenu(true);
        if (typeof window != 'undefined' && window.document) {
            document.body.style.overflow = 'hidden';
        }
    }

    return (
        <>
        <IconContext.Provider value={{color: navbarColor ?  'black' : 'white'   }}>

            <Nav navbarColor={toggleMenu ? 0 : navbarColor}>
                <NavbarContainer>
                    <Logo to="herosection" 
                            smooth={true} 
                            duration={1500} 
                            spy={true} 
                            offset={-80}
                            >
                        SEC
                    </Logo>
                    <MobileMenu onClick={openMenu}>
                        <FaBars />
                    </MobileMenu>

                    {toggleMenu && (<Sidebar toggle={setToggleMenu} to />)}

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            spy={true} 
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth={true} 
                            spy={true} 
                            offset={-80}>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth={true} 
                            spy={true} 
                            offset={-80}>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="team"
                            smooth={true} 
                            spy={true} 
                            offset={-80}>Team</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            spy={true} 
                            offset={-80}>Contact Us</NavLinks>
                        </NavItem>
                       
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>

        </>
    )
}

export default Navbar