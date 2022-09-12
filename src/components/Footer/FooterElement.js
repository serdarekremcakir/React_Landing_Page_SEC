import styled, { keyframes } from "styled-components";
import { Link } from 'react-scroll';
import { VscLoading } from 'react-icons/vsc';
import {Button} from '../ButtonElement'


export const FooterContainer = styled.footer`

    background:linear-gradient(180deg,rgba(196, 229, 255, 1) 0%,  #006faa96 100%);
    overflow:hidden;
`

export const FooterWrapper = styled.div`
    max-width: 1100px;
    width:100%;
    margin:0 auto;
    padding: 3rem 2rem 0 3rem;
    position:relative;

`



export const FooterRow = styled.div`
    width: 100%;
    display:flex;
    flex-direction: row;
    

    @media screen and (max-width:768px){
        flex-direction:column;
    }

`

export const FooterColumn = styled.div`

    padding: 0 2rem;

    display:flex;
    flex-direction: column;
    width:100%;
    justify-content:flex-start;


    @media screen and (max-width:768px){
        padding:0;
    }

`

export const FooterBrand = styled.div`
    max-width:80%;
    border-bottom: solid 2px black;
    padding-bottom:1rem;

    @media screen and (max-width:768px){
        max-width:100%;

    }
`
export const FooterLogo = styled(Link)`
    color: black;

    cursor:pointer;
    text-decoration:none;
    font-size:2.5rem;
    font-weight: bold;
`

export const FooterSlogan = styled.p`
    font-size:1rem;
    text-align:left;
    margin-top:1rem;

`
export const ContactUl = styled.ul`
    list-style:none;
    margin-top:2rem;

`

export const ContactLi = styled.li`
    font-size:1.6rem;
`


export const ContactSpan = styled.span`
    margin-left:2rem;
    font-size:1.2rem;
`


export const ContactLink = styled.a`
    text-decoration:none;
    color:#000;

`

export const SocialMediaRow = styled.div`
    margin: 2rem 0;
`

export const SocialIcons = styled.ul`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:80%;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    position: relative;
    font-size: 22px;
    text-align: center;
     padding: 1rem 0;

     @media screen and (max-width:768px){
        width:100%;
     }
`

export const SocialIconLink = styled.a`
    color: #fff;
    height:100%;
    font-size:2rem;
    display:flex;
    justify-content:center;
    align-items:center;
  
`


export const SocialIconItem = styled.li`
    position: relative; 
     display: inline-block;
     height: 60px;
     width: 60px;
     margin: 10px 3px;
     line-height: 60px;
     border-radius: 50%;
     color: #fff;
     background-color: rgb(27,27,27);   
     cursor: pointer; 
     transition: all .2s ease-in-out;

     

     &:after{
    content: '';
     position: absolute;
     top: 0;
     left: 0;
     width: 60px;
     height: 60px;
     line-height: 60px;
     border-radius: 50%;
     opacity: 0;
     box-shadow: 0 0 0 2px #fff;
     }

     &:hover{
        background-color: #fff; 
     }

     &:hover:after{
             opacity: 1;  
            transform: scale(1.12);
            transition-timing-function: cubic-bezier(0.37,0.74,0.15,1.65);
     }

     &:hover >${SocialIconLink}{
        color: #000;
     }
`





export const FooterMap = styled.iframe`
    margin-top:1rem;
    width:100%;
`


export const FooterLinkTitle = styled.h3`
    font-size:1rem;
    margin-bottom:1rem;
    font-weight:800;
    letter-spacing:0.05rem;
`


export const FooterLink = styled.a`
    color:#fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size:0.9rem;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`


export const SocialCopyright = styled.p`
    color:#000;
    font-size:0.9rem;
    text-align:center;
    position:relative;
    left:50%;
    transform: translateX(-50%);
    margin-top:1.35rem;
`

export const SocialCopyrightLogo = styled.span`
    font-weight:bold;
    font-size:1.2rem;
    text-decoration:underline;
    margin: 0 4px;
`

export const AlertBoxContainer = styled.div`
    width:370px;
    height:200px;
    background-color:white;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    border-radius:40px;
    display:flex;
    align-items:center;
    flex-direction:column;
    padding: 1rem 0;

    @media screen and (max-width:480px){
        width:280px;
    }

   

`

export const AlertBoxTitle = styled.h3`
    color:#000;
    font-size:2rem;
    margin-top:1rem;

`

export const AlertBoxMessage = styled.p`
    color:#000;
    margin-top:.65rem;

`

export const AlertBoxButton = styled(Button)`
    padding: 0.2rem 1rem;
    margin-top:1rem;
`

export const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }

`

export const AlertBoxLoading = styled(VscLoading)`
    animation: ${spin} 2s linear infinite;
`















