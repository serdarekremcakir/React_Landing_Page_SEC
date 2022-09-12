import styled from "styled-components";


export const ContactFormContainer = styled.form`
    width: 100%;
    max-width: 100%;
    & > :nth-child(3n+1){
        width:100%;
    }

`
export const ContactFormInputWrapper = styled.div`
    float: left;
    width: 48%;
    margin-bottom: 2rem; 
    position: relative;
    border-radius: 4px;

    @media screen and (max-width:1024px){
        width:100%;
    }
   

`

export const ContactFormLabel = styled.label`
    color: #999;
    padding: 0.3rem 1.3rem 2rem 1.3rem;
    position: absolute;
    top: 10px;
    left: 0;
    -webkit-transition: all 0.25s ease;
    transition: all 0.25s ease;
    pointer-events: none;
`

export const ContactFormInput = styled.input`
    padding: 1rem;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;

    &:focus{
        outline:none;
    }

    &:focus ~ ${ContactFormLabel} ,
    &:valid ~ ${ContactFormLabel}{
        font-size: 0.75em;
    color: #999;
    top: -5px;
    -webkit-transition: all 0.225s ease;
    transition: all 0.225s ease;
    }
`



export const ContactFormTextArea = styled.textarea`
    padding: 30px;
    border: 0;
    width: 100%;
    font-size: 1rem;
    background-color: #2d2d2d;
    color: white;
    border-radius: 4px;
    min-height:10rem;
    resize:none;

    &:focus{
        outline:none;
    }

    &:focus ~ ${ContactFormLabel},
    &:valid ~ ${ContactFormLabel} {
        font-size: 0.75em;
        color: #999;
        top: -5px;
        -webkit-transition: all 0.225s ease;
        transition: all 0.225s ease;
    }

    
`


export const ContactFormButton = styled.button`
    border-radius:50px;
    background: var(--color-primary);

    color: var(--color-white);
    padding:0.6rem 2rem;
    float:right;

    outline:none;
    border:none;
    cursor:pointer;
    display:flex;
    justify-content: center;
    align-items:center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: var(--color-secondary)
    }
`
