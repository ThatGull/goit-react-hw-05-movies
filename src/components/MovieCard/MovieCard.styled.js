import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const StyledButton = styled.button`
    margin: 15px 50px;
    padding: 5px 10px;
    border: none;
    border-radius: 3px;
    transition: 0.3s;
 

 &:hover {
    background-color: #0d6efd; 
    
 }
`

export const StyledContainer = styled.div`
display: flex;
gap: 20px;
padding: 0 20px;

& img {
 max-width: 200px;
}
& h1 {
    margin: 0;
}

& h2 {
    font-size: 20px;
}



`

export const StyledAdditional = styled.div`
padding: 0 20px;
& h2 {
    font-size: 20px;
}

& .additional:not(:last-child) {
    padding-bottom: 10px ;
}

& .additional {

}
`

export const StyledLink = styled(NavLink)`
  color: black;

  &:hover {
    border-bottom: 3px solid #0d6efd; 
  }

&.active {
  color: #0d6efd;
}`

