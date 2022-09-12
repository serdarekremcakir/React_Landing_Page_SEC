import React from 'react'
import Icon1 from '../../assets/Services/card1.svg'
import Icon2 from '../../assets/Services/card2.svg'
import Icon3 from '../../assets/Services/card3.svg'
import Icon4 from '../../assets/Services/card4.svg'

import {ServicesContainer, ServicesH2,  ServicesWrapper} from './ServicesElement';

import ServicesCardItem from './ServicesCardItem';

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH2 className='reveal-top'>
                Our Services
            </ServicesH2>
            <ServicesWrapper className='reveal-bottom'>

                <ServicesCardItem
                    icon={Icon1}
                    title={'Code Review'}
                    desc={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, suscipit!'}
                    />

                <ServicesCardItem
                    icon={Icon2}
                    title={'Software'}
                    desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quas facilis sed explicabo accusamus saepe.'}
                    />



                <ServicesCardItem
                    icon={Icon3}
                    title={'Serdar Test'}
                    desc={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, suscipit!'}
                    />

                <ServicesCardItem
                    icon={Icon4}
                    title={'SEC SEC'}
                    desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste quas facilis sed explicabo accusamus saepe. '}
                    />

            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services