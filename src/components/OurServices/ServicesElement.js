import styled from "styled-components";

export const ServicesContainer = styled.div`
    height:860px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:#000;

    @media screen and (max-width: 1024px){
        height:1000px;    
    }

    @media screen and (max-width: 480px){
        height:1750px;
    }
`

export const ServicesWrapper = styled.div`
    max-width:1000px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    gap:25px;


    @media screen and (max-width: 1024px){
        flex-wrap:wrap;
        margin:0;
        gap:40px;
        padding:0 2rem;
        width:100%;

    }

    @media screen and (max-width: 480px){
        flex-direction:column;
        align-items:center;
    }

`

export const ServicesCard = styled.div`

    width: calc(100% / 4);
    height:350px;
    background:#fff;
    display:flex;
    align-items:center;
    border-radius:20px;
    padding:2rem;
    box-shadow:0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;
    flex-direction:column;

    &:hover{
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }

    @media screen and (max-width: 1024px){
       width:45%;
       overflow:hidden;
    }

    @media screen and (max-width: 480px){
       width:80%;
    }
    
`

export const ServicesH2 = styled.h2`
    font-size:2.5rem;
    color:#fff;
    margin-bottom:64px;
    
    @media screen and (max-width: 768px){
        font-size:2rem;
    }
`

export const ServicesIcon = styled.img`
        min-height:80px;
        width:150px;
        flex:1;
`


export const ServicesH3 = styled.h2`
    font-size:1rem;
    padding:1rem 0;
    flex:1;
    text-align:center;

`

export const ServicesP = styled.p`
    font-size:1rem;
    text-align:center;
    flex:5;
    
   overflow-y:hidden;
`
