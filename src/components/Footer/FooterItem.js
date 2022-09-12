import React from 'react'
import { FooterLinkTitle, FooterLink, FooterColumn } from './FooterElement'

const FooterItem = ({ Title, Links }) => {

    return (
        <FooterColumn>
            <FooterLinkTitle>
                {Title}
            </FooterLinkTitle>
            
            {Links.map((Link,index) => {

                return (
                    <FooterLink key={index} href={Link.path} >
                        {Link.name}
                    </FooterLink>
                )
            })}
        </FooterColumn>
    )
}

export default FooterItem   