
import styled from "styled-components";

export const InfoContainer = styled.div`
    color: white;
    
    background:${({ bg2 }) => bg2 ? `linear-gradient(180deg,rgba(196, 229, 255, 0.76) 0%,  #006faa96 100%)` : `linear-gradient(180deg,#006faa96 0%, rgba(196, 229, 255, 0.76) 100%)`};

    
`

export const InfoWrapper = styled.div`
    max-width:1100px;
    margin: 0 auto;
    width:100%;
    height:860px;

    
    
    @media screen and (max-width: 768px){
        padding-top:70px;
        height:875px

    }
    
    
    @media screen and (max-width: 480px){
    }


`

export const InfoRow = styled.div`
    display:flex;

    flex-direction: ${({ imgStart }) => imgStart ? 'row-reverse' : 'row'};
    height:100%;
    justify-content:space-between;
    align-items:center;
    flex-wrap:wrap;
    padding: 0 24px;

    @media screen and (max-width:768px) {
        flex-direction: ${({ imgStart }) => imgStart ? 'column-reverse' : 'column'};
        height:auto;
    }
    
`

export const Column1 = styled.div`
    width:55%;
    padding-left: 12px;
    padding-right: 12px;

    @media screen and (max-width:768px) {
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        max-width:480px;
    }
    
    
`

export const Column2 = styled.div`
    width:45%;

    padding-left: 12px;
    padding-right: 12px;

    @media screen and (max-width:768px) {
        width: 100%;
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`

export const TextWrapper = styled.div`
    padding-bottom:30px;

    @media screen and (max-width:768px) {
        padding-bottom:10px;
    }
`

export const TopHeading = styled.p`
    color: var(--color-secondary);

    line-height: 16px;
    font-weight:800;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: 16px;
    text-decoration:underline;

`

export const Heading = styled.h1`
    font-size:3rem;
    line-height: 1.2;
    font-weight:600;
    margin-bottom:24px;
    color:yellow;
    color:var(--color-heading);
    max-width:520px;

    @media screen and (max-width:768px){
         font-size:2.5rem;
     }

    @media screen and (max-width:480px){
         font-size:2rem;
     }
`

export const Description = styled.p`
    max-width:440px;
    font-size:18px;
    line-height: 24px;
    margin-bottom:35px;
    color:var(--color-content); 

    
`

export const BtnWrap = styled.div`
    display:flex;
    justify-content:flex-start;
`

export const ImgWrap = styled.div`
    height:100%;
    max-height:350px;
    margin:20px 20px 0 0;
    display:flex;

    @media screen and (max-width:768px){
        width:100%;
        margin-top: ${props => props.imgStart ? 0 : '65px'};
        margin-bottom: ${props => props.imgStart ? '65px' : 0};
    }
`

export const Img = styled.img`
    width:100%;
    
    
`