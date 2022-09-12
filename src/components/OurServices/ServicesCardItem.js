import React from 'react'


import {ServicesH3, ServicesIcon, ServicesCard, ServicesP} from './ServicesElement';


const ServicesCardItem = ({icon,title,desc,cls}) => {
    return (
        <ServicesCard className={cls}>
            <ServicesIcon  src={icon} />
            <ServicesH3>{title}</ServicesH3>
            <ServicesP>
                {desc}
            </ServicesP>
        </ServicesCard>
    )
}

export default ServicesCardItem