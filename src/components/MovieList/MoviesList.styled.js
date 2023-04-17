import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
& li {
    padding-top: 2px;
 }
`

export const StyledLink = styled(NavLink)`
    color: black;
    
    &:visited{ color: darkgray;}

    &:hover{
        color: #0d6efd;
    }

`

