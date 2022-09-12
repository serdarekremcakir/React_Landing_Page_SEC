import React from 'react'

import person1 from '../../assets/Team/person.png'
import person2 from '../../assets/Team/person1.webp'
import person3 from '../../assets/Team/person2.png'
import person4 from '../../assets/Team/person3.png'
import person5 from '../../assets/Team/person4.jpg'
import person6 from '../../assets/Team/person5.webp'
import person7 from '../../assets/Team/person6.png'

import {FaTwitter, FaLinkedin } from 'react-icons/fa'

import { TeamContainer, TeamRow, TeamColumnTop, TeamColumnBottom, TeamContent, TeamContentBody, TeamSocial, TeamSocialList, TeamContentH3, TeamContentH4, ImgTop, ImgBottom, TeamSocialLink, TeamH2, TeamWrapper, TeamContentBottom } from './TeamElement'

const employees = [{
    reveal: 'reveal-left',
    src: person3,
    name: 'Hamdi Tırcı',
    title: 'Frontend Developer'
},
{
    reveal: 'reveal-left',
    src: person4,
    name: 'Ahmet Mehmet',
    title: 'Backend Developer'
},
{
    reveal: 'reveal-bottom',
    src: person5,
    name: 'Seray Meray',
    title: 'Android Developer',
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://www.twitter.com'
},
{
    reveal: 'reveal-right',
    src: person6,
    name: 'Furkan Kazım',
    title: 'IOS Developer'
},
{
    reveal: 'reveal-right',
    src: person7,
    name: 'Deniz Güler',
    title: 'Fullstack Developer',
    linkedin: 'https://www.linkedin.com',
    twitter: 'https://www.twitter.com'

},

]

export const Employee = ({ reveal, src, name, title, linkedin, twitter }) => {
    return (
        <TeamColumnBottom className={reveal}>
            <TeamContentBottom>

                    <ImgBottom src={src} alt={name} />
                <TeamContentBody>
                    <TeamContentH3>
                        {name}
                    </TeamContentH3>
                    <TeamContentH4>
                        {title}
                    </TeamContentH4>
                    <TeamSocial>
                        <TeamSocialList>
                            <TeamSocialLink href={linkedin ? linkedin : '#!'}>
                                <FaLinkedin fontSize={30} />
                            </TeamSocialLink>
                        </TeamSocialList>
                        <TeamSocialList>

                            <TeamSocialLink href={twitter ? twitter : '#!'}>
                                <FaTwitter fontSize={30} />
                            </TeamSocialLink>
                        </TeamSocialList>
                    </TeamSocial>
                </TeamContentBody>
            </TeamContentBottom>

        </TeamColumnBottom>
    )
}



const Team = () => {
    return (

        <TeamContainer id="team">
            <TeamWrapper>

                <TeamH2 className='reveal-top'>Our Team</TeamH2>
                <TeamRow>
                    <TeamColumnTop className='reveal-left'>
                        <TeamContent>
                            <ImgTop src={person1} alt='founder' />
                            <TeamContentBody>
                                <TeamContentH3>
                                    Abdullah Kafa
                                </TeamContentH3>
                                <TeamContentH4>
                                    Founder
                                </TeamContentH4>
                                <TeamSocial>
                                    <TeamSocialList>
                                        <TeamSocialLink href="#!">
                                            <FaLinkedin fontSize={30} />
                                        </TeamSocialLink>
                                    </TeamSocialList>
                                    <TeamSocialList>

                                        <TeamSocialLink href="#!">
                                            <FaTwitter fontSize={30} />
                                        </TeamSocialLink>
                                    </TeamSocialList>
                                </TeamSocial>
                            </TeamContentBody>
                        </TeamContent>

                    </TeamColumnTop>
                    <TeamColumnTop className='reveal-right'>
                        <TeamContent>
                            <ImgTop src={person2} alt='co-founder' />
                            <TeamContentBody>
                                <TeamContentH3>
                                    Ahmet Mehmet
                                </TeamContentH3>
                                <TeamContentH4>
                                    Co Founder
                                </TeamContentH4>
                                <TeamSocial>
                                    <TeamSocialList>
                                        <TeamSocialLink href="#!">
                                            <FaLinkedin fontSize={30} />
                                        </TeamSocialLink>
                                    </TeamSocialList>
                                    <TeamSocialList>

                                        <TeamSocialLink href="#!">
                                            <FaTwitter fontSize={30} />
                                        </TeamSocialLink>
                                    </TeamSocialList>

                                </TeamSocial>
                            </TeamContentBody>
                        </TeamContent>

                    </TeamColumnTop>
                </TeamRow>

                <TeamRow>
                    {
                        employees.map((employee,index) => <Employee {...employee} key={index} />)
                    }
                </TeamRow>
            </TeamWrapper>
        </TeamContainer>
    )
}

export default Team