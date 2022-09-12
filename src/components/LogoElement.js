import styled from "styled-components"
import {Link} from 'react-scroll'


export const Logo = styled(Link)`
    cursor:pointer;
    font-size: 2.5rem;
    display:flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    height:100%;
    padding:0 1rem;

    &.active {
        border-bottom: 3px solid #fff;

        @media screen and (max-width:768px) {
            border-bottom:none;
        }
        
    }

`

export default Logo