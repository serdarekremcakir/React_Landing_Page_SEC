import styled, { keyframes } from "styled-components";

export const scroll = keyframes`
    0%{
        transform: translateX(0)
    }

    100%{
        transform:translateX(calc(-300px*7))

        
    }

`

export const scrollMobile = keyframes`
    0%{
        transform: translateX(0)
    }

    100%{
        transform:translateX(calc(-225px*7))

        
    }

`


export const PartnersContainer = styled.div`
    background-color:#000;
    color:#fff;
    padding: 3.1rem 0;
    height:410px;
`


export const PartnersSlider = styled.div`
    margin:auto;
    overflow: hidden;
    position: relative;
    max-width: 1100px;
    width:auto;


    &::before,
	&::after {
		content: " ";
		position:absolute;
		z-index:24;
		width:250px;
		height:100%;
		top:0;
        
        @media screen and (max-width:768px){
            width:150px;
        }
        	
	}
	&::before {
        left:0;
		background: linear-gradient(to right, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%);

	}
	&::after {
        right:0;
		background: linear-gradient(to left, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 70%);
	}

`


export const PartnersSlideTrack = styled.div`
    animation: ${scroll} 10s linear infinite;
    display:flex;

    width:calc(300px*14);
    padding:2rem 0;
    background:#fff;


    border: 3px solid black;
    animation-play-state: ${(props) => props.hover ? 'paused' : 'running'};
    


    @media screen and (max-width:768px){
        
        width:calc(225px*14);;
        animation: ${scrollMobile} 10s linear infinite;

    }

`

export const PartnersH2 = styled.h2`
    color:#fff;
    text-align: center;
    font-size:2.5rem;

    @media screen and (max-width: 768px){
        font-size:2rem;
    }

`

export const PartnersP = styled.p`
    text-align: center;
    margin:2rem 0;
    font-size: 1rem;    
`

export const PartnersSlide = styled.div`
    height:100px;
    width:300px;

    @media screen and (max-width:768px){
        height:75px;
        width:255px
    }

    
`

export const Img = styled.img`
    


    &:hover{
        transform: scale(1.25);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width:768px){
        height:75px;
        width:150px;
    }


`


