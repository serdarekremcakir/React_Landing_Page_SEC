import React,{useContext} from 'react'


import {
    FooterContainer, FooterWrapper, FooterColumn,
    FooterLogo, SocialIcons, SocialIconLink, FooterRow, SocialMediaRow, SocialCopyright, FooterSlogan, SocialIconItem,
    ContactUl, ContactLi, ContactLink, ContactSpan, FooterBrand, FooterMap,SocialCopyrightLogo
} from './FooterElement'

import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLocationArrow, FaPhoneAlt, FaMailBulk } from 'react-icons/fa'

import { animateScroll} from 'react-scroll'

import ContactForm from './ContactForm';
import AlertBox from './AlertBox';

import FooterContext from './FooterContext'


const goTop = () => {
    animateScroll.scrollToTop();
}

const Footer = () => {
 
    const {loading} = useContext(FooterContext);

    return (
        
        <FooterContainer id="contact">
            <FooterWrapper>
                <FooterRow>
                    <FooterColumn className='reveal-left'>
                        <FooterBrand>
                            <FooterLogo to="/" onClick={goTop}>
                                SEC
                            </FooterLogo>

                            <FooterSlogan>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque cum quam nam quod iure sequi illum nulla dolor facilis? Magnam!
                            </FooterSlogan>
                        </FooterBrand>


                        <ContactUl>
                            <ContactLi>
                                <FaLocationArrow />
                                <ContactSpan>Kingston, Jamaika</ContactSpan>
                            </ContactLi>

                            <ContactLi>
                                <FaPhoneAlt />
                                <ContactSpan>
                                    <ContactLink href="tel:599-588-23-32" title="Give me a call">
                                        (599) 588-23-32
                                    </ContactLink>
                                </ContactSpan>
                            </ContactLi>

                            <ContactLi>
                                <FaMailBulk />
                                <ContactSpan>
                                    <ContactLink href="mailto:#" title="Send me an email">
                                        sec@sec.com.tr
                                    </ContactLink>
                                </ContactSpan>
                            </ContactLi>

                        </ContactUl>


                        <SocialMediaRow>
                            <SocialIcons>
                                <SocialIconItem>
                                    <SocialIconLink href="/" target="_blank" arial-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                </SocialIconItem>

                                <SocialIconItem>
                                    <SocialIconLink href="/" target="_blank" arial-label="Instagram">
                                        <FaInstagram />
                                    </SocialIconLink>
                                </SocialIconItem>

                                <SocialIconItem>
                                    <SocialIconLink href="/" target="_blank" arial-label="Youtube">
                                        <FaYoutube />
                                    </SocialIconLink>
                                </SocialIconItem>


                                <SocialIconItem>
                                    <SocialIconLink href="/" target="_blank" arial-label="Twitter">
                                        <FaTwitter />
                                    </SocialIconLink>
                                </SocialIconItem>
                            </SocialIcons>
                        </SocialMediaRow>
                    </FooterColumn>

                    <FooterColumn className='reveal-right'>
                        <ContactForm />
                    </FooterColumn>
                </FooterRow>

                <FooterRow className='reveal-bottom'>
                    <FooterMap height="292px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60706.47797031769!2d-76.83567576901177!3d18.018014774806346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8edb3f9784ded2a1%3A0x24f321bfabb7af40!2sKingston%2C%20Jamaika!5e0!3m2!1str!2str!4v1661918044843!5m2!1str!2str" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></FooterMap>
                </FooterRow>

                <SocialCopyright>Copyright © {new Date().getFullYear()}
                  <SocialCopyrightLogo>SEC</SocialCopyrightLogo>All Rights Reserved.</SocialCopyright>


                {loading !== null ? <AlertBox/> : null}
               

            </FooterWrapper>

        </FooterContainer>


    )
}

export default Footer