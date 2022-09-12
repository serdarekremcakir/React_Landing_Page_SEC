import React, { useRef, useContext } from 'react'
import emailjs from '@emailjs/browser';
import FooterContext from './FooterContext'

import { ContactFormContainer, ContactFormInputWrapper, ContactFormInput, ContactFormLabel, ContactFormTextArea, ContactFormButton } from './ContactFormElement'





const ContactForm = () => {


    const {setIsSuccess,setLoading} = useContext(FooterContext);

    const form = useRef();

    const sendEmail = (e) => {


        e.preventDefault();

        setLoading(true);

        emailjs.sendForm('service_id', 'template_id', form.current, 'public_key')
            .then((result) => {
                setIsSuccess(true);
                setLoading(false);
            }, (error) => {
                setIsSuccess(false);
                setLoading(false);
            });

        for (let index = 0; index < 4; index++) {
            form.current[index].value = "";

        }
    }




    return (

        <>

            <ContactFormContainer ref={form} onSubmit={sendEmail}>
                <ContactFormInputWrapper>
                    <ContactFormInput type="text" required name="name" />

                    <ContactFormLabel>Name</ContactFormLabel>
                </ContactFormInputWrapper>

                <ContactFormInputWrapper>
                    <ContactFormInput type="text" required name="email" />
                    <ContactFormLabel>Email</ContactFormLabel>
                </ContactFormInputWrapper>

                <ContactFormInputWrapper style={{ float: 'right' }}>
                    <ContactFormInput type="text" required name="phoneNumber" />
                    <ContactFormLabel>Phone Number</ContactFormLabel>
                </ContactFormInputWrapper>

                <ContactFormInputWrapper>
                    <ContactFormTextArea type="text" required name="message" />
                    <ContactFormLabel>Message</ContactFormLabel>
                </ContactFormInputWrapper>

                <ContactFormButton type="submit" >Submit </ContactFormButton>
            </ContactFormContainer>
        </>


    )
}

export default ContactForm