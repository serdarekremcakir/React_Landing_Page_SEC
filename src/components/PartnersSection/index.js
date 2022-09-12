import React, {useState} from 'react'

import logo1 from '../../assets/Partners/logo1.png'
import logo2 from '../../assets/Partners/logo2.png'
import logo3 from '../../assets/Partners/logo3.png'
import logo4 from '../../assets/Partners/logo4.png'
import logo5 from '../../assets/Partners/logo5.png'
import logo6 from '../../assets/Partners/logo6.png'
import logo7 from '../../assets/Partners/logo7.png'



import {PartnersContainer,PartnersSlider,PartnersSlideTrack,PartnersH2,PartnersP,PartnersSlide,Img} from './PartnersElement';


const slideItems = [logo1, logo2, logo3, logo4, logo5, logo6, logo7,
            logo1, logo2, logo3, logo4, logo5, logo6, logo7];




export const SliderItem = ({ icon,onHover }) => {
    
    return (
        <PartnersSlide  >
            <Img src={icon} alt="" height={100} width={200} onMouseEnter={onHover} onMouseLeave={onHover}/>
        </PartnersSlide>
    )
}

export const Slider = () => {
    

    const [hover, setHover] = useState(false)

    const onHover = () => {
    setHover(!hover)
    }
    
    return (

        <PartnersContainer>
            <PartnersH2 className='reveal-top'> Our Partners </PartnersH2>
            <PartnersP className='reveal-bottom'>We Work With the Best Partners</PartnersP>
            <PartnersSlider className='reveal-bottom'>
                <PartnersSlideTrack hover={hover}>
                    {
                        slideItems.map((icon,index) => 
                        <SliderItem icon={icon} key={index} onHover={onHover} />)
                    }
                </PartnersSlideTrack>
            </PartnersSlider>

        </PartnersContainer>

    )
}

export default Slider