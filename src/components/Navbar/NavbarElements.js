import styled from 'styled-components'
import {Link} from 'react-scroll';
import Logo from '../LogoElement'

export const NavMenu = styled.ul`

    display:flex;
    align-items:center;
    list-style-type: none;
    text-align:centeR;


    @media screen and (max-width:768px) {
        display:none;
    }

`
export const MobileMenu = styled.div`
    display:none;
    @media screen and (max-width: 768px ){
        display:block;
        
        font-size:1.8rem;
        cursor: pointer;
    }
`


export const Nav = styled.nav`
    background: ${({navbarColor})=> navbarColor ? '#fff' : 'transparent'};
    height: 80px;
    display:flex;
    justify-content: center;
    position: sticky;
    top:0;
    z-index:200;
    margin-top:-80px;
    transition: 0.5s all ease;



    ${Logo},
    ${NavMenu}
    {
        color: ${({navbarColor})=> navbarColor ?  'black' : 'white'};
    }
`


export const NavbarContainer = styled.div`

    display:flex;
    justify-content: space-between;
    align-items:center;
    width: 100%;
    max-width: 1200px;
    padding: 0rem 1.5rem;
`


export const NavItem = styled.li`
    height:80px;
`

export const NavLinks = styled(Link)`
    display: flex;
    align-items:center;
    text-decoration:none;
    padding: 0 1rem;
    height: 100%;
    font-weight:600;
    cursor: pointer;
    &.active {
        border-bottom: 3px solid var(--color-secondary);
        font-weight:700;
        
    }

`