import styled from "styled-components";

export const TeamContainer = styled.div`
    width: 100%;
    background:radial-gradient(circle, #006faa96 0%, rgba(196, 229, 255, 0.76) 100%);
    overflow:hidden;
`

export const TeamWrapper = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    padding:2rem 1rem;
    height:860px;
    
    @media screen and (max-width:768px){
        height:auto;
    }
`


export const TeamRow = styled.div`
    display:flex;
    width: 100%;
    padding:1rem 0;

    @media screen and (max-width:768px){
        flex-direction:column;
    }
`

export const TeamColumnTop = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width:768px){
        width:100%;
        padding:2rem 2rem;
    }
`

export const TeamColumnBottom = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    padding:1rem 0.5rem;

    @media screen and (max-width:768px){
        width:100%;
        padding:2rem 2rem;
        
    }
`

export const TeamContentBody = styled.div`
    padding: 0.5rem 0.7rem;

    @media screen and (max-width:480px){
        
    }
`

export const TeamSocial = styled.ul`
    list-style: none;
    display: flex;
    margin-top: 10px;
    @media screen and (max-width:768px){
        justify-content:center;
    }
`

export const TeamSocialList = styled.li`
    margin-right: 15px;
`

export const TeamContentH3 = styled.h3`
    font-size: 1.3rem;
    font-weight: 700;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size:1.5rem;
    }
`

export const TeamContentH4 = styled.h4`
    font-size: 1rem;
    font-weight: 400;
    margin: 5px 0 10px;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size:1.15rem;
    }
`


export const TeamContent = styled.div`
    margin:0 auto;

    @media screen and (max-width:480px){
        height: 400px;
    }

    @media screen and (max-width:768px){
        text-align:center;
        width:100%;
    }
`

export const TeamContentBottom = styled.div`
    margin:0 auto;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    @media screen and (max-width:480px){
        height: 400px;
        width:100%;

    }

    @media screen and (max-width:768px){
        text-align:center;
        width:100%;
    }
`

export const ImgTop = styled.img`
    width: 100%;
    height: 230px;

    @media screen and (max-width:768px){
        width: 60%;
        height: 280px;
    }

    @media screen and (max-width:480px){
        width: 100%;
        height: 280px;
    }
    
`

export const ImgBottom = styled.img`
    width:80%;
    height: 180px;
    

    @media screen and (max-width:768px){
        width: 60%;
        height: 300px;
    }

    @media screen and (max-width:480px){
        width: 100%;
        height: 280px;
    }
`

export const TeamSocialLink = styled.a`
    cursor:pointer;
    color:var(--color-primary);
    transition: ease .5s all;

    &:hover{
        color:var(--color-secondary);
        transition: ease .5s all;
    }
`

export const TeamH2 = styled.h2`
    text-align:center; 
    font-size:2.5rem;

    @media screen and (max-width:768px){
        font-size:2rem
    }

`
