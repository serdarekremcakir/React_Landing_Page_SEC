import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

export const Icon = styled(FaTimes)`
    
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    font-size:1.7rem;
    cursor:pointer;
    color:#fff !important;

`

export const SidebarContainer = styled.aside`
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100vh;
    background: #000429;
    align-items: center;
    display:flex;
    justify-content:center;

`


export const SidebarMenu = styled.ul`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;


    
`

export const SidebarItem = styled.div`
    margin-top:3.5rem;

    &:nth-child(1){
        margin-top:0;
    }

    
`


export const SidebarLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration: none;
    list-style-type: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor:pointer;
    border-bottom:1px solid #fff;

    &:hover{
        color:#01bf71;
        transition: 0.2s ease-in-out;
    }


`

