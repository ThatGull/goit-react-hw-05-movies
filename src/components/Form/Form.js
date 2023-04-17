import styled from 'styled-components';

export const StyledForm = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;

  & input {
    width: 300px;
    height: 40px;
    margin-right: 20px;
  }

  & input:active {
    outline: none;
  }

  & button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: 0.3s;
  }

  & button:hover {
    background-color: #0d6efd;
    scale: 1.2;
  }
`;
