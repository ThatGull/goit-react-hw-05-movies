import styled from "styled-components";

export const ActorContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    align-items: center;
    

    & .li {
        width:calc( ( 100% - 20px ) / 6 );
        position: relative;
        height: 380px;
    }

    & img {
    height:250px;
     display: block;
      margin: 0 auto;
    }

    & .credentials{
        position: absolute;
        left: 20px;
        top: 260px;
        width: 100%;
    }

    & .credentials-item:not(:last-child) {
        padding-bottom: 10px;
    }

`