import React from 'react'
import { Button } from '../ButtonElement'
import { BtnWrap, Column1, Column2, Heading, ImgWrap, InfoContainer, InfoRow, InfoWrapper, Description, TextWrapper, TopHeading, Img } from './InfoElement'

const sectionObject = [{
    id: 'about',
    tophead: 'REACT.Js',
    head: 'A JavaScript library for building user interfaces',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique repellendus facere quisquam laboriosam optio, perspiciatis nisi ipsa alias iure.',
    buttonLabel: 'React',
    imgStart: false,
    img: require('../../assets/react.svg').default,
    alt: 'react',
    bg2: false,
    btnLink: 'services'

},

{
    id: 'discover',
    tophead: 'Vue.js',
    head: 'The Progressive JavaScript Framework',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique repellendus facere quisquam laboriosam optio, perspiciatis nisi ipsa alias iure.',
    buttonLabel: 'Vue.js',
    imgStart: true,
    img: require('../../assets/js.svg').default,
    alt: 'vue.js',
    bg2: true,
    btnLink: 'services'


}]



const InfoSection = () => {

    return (

        <>

            {sectionObject.map((section, index) =>
                <InfoContainer id={section.id} bg2={section.bg2} key={index}>
                    <InfoWrapper>
                        <InfoRow imgStart={section.imgStart}>
                            <Column1 >
                                <TextWrapper>
                                    <TopHeading className='reveal-top'>
                                        {section.tophead}
                                    </TopHeading>
                                    <Heading className='reveal-top'>
                                        {section.head}
                                    </Heading>
                                    <Description className='reveal-bottom'>
                                        {section.description}
                                    </Description>

                                </TextWrapper>
                                <BtnWrap className='reveal-bottom'>
                                    <Button to={section.btnLink}
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                    >
                                        {section.buttonLabel}
                                    </Button>
                                </BtnWrap>
                            </Column1>
                            <Column2 className='reveal-right' >
                                <ImgWrap imgStart={section.imgStart}>
                                    <Img src={section.img} alt={section.alt} />
                                </ImgWrap>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            )}


        </>
    )
}

export default InfoSection  