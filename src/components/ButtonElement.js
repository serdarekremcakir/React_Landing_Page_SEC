import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
    border-radius:50px;
    background: var(--color-primary);

    color: var(--color-white);
    padding:0.6rem 2rem;

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