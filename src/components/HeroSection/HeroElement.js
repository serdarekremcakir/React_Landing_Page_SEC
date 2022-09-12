import styled from 'styled-components'


export const HeroContainer = styled.section`
    display:flex;
    justify-content:center;
    align-items:center;
    height:100vh;
    position: relative;
    z-index:1;

    :before {
        content: '';
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;

        background: linear-gradient(rgba(0,0,0,0.3) 70%,rgba(0, 111, 170, 0.588) 100%);
        z-index:2;

    }
` 


export const HeroBackground = styled.div`
    position:absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width:100%;
    height:100%;
    overflow:hidden;
    

`


export const VideoBackground = styled.video`
    width:100%;
    height:100%;
    object-fit:cover;
    
`


export const HeroContent = styled.div`
    z-index:3;
    max-width:1100px;
    position:absolute;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding:1rem;

`


export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    line-height:3rem;

    @media screen and (max-width:768px){
        font-size: 2.5rem
    }


`

export const HeroP = styled.p`
    margin-top:1.5rem;
    color:#fff;
    font-size:1.5rem;
    text-align: center;
    max-width:600px;

    

`

export const HeroBtnWrapper = styled.div`
    margin-top:32px;
    display:flex;
    flex-direction:column;
    align-items: center;

`


