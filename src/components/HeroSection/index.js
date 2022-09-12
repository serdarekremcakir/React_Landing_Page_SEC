import React from 'react'
import video from '../../assets/vid.mp4';
import { Button } from '../ButtonElement'

import {
    HeroContainer, HeroBackground, VideoBackground,
    HeroContent,
    HeroH1, HeroP,
    HeroBtnWrapper,
} from './HeroElement';

const HeroSection = () => {

    return (
        <HeroContainer id="herosection">
            <HeroBackground>
                <VideoBackground autoPlay loop muted playsInline   src={video} type='video/mp4' />
            </HeroBackground>
            <HeroContent>
                <HeroH1>
                    Lorem ipsum dolor sit amet.
                </HeroH1>
                <HeroP>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, sapiente!
                </HeroP>
                <HeroBtnWrapper>
                    <Button to="contact"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}>
                        SEC
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection