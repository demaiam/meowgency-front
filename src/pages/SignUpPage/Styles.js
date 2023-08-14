import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const Input = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  padding: 15px;
  border: 2px solid #000000;
  border-radius: 5px;
  width: 100%;
  height: 1em;
  margin-bottom: 10px;
  color: #000000;
`;

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #FFFFFF;
  background: #000000;
  border: none;
  border-radius: 10px;
  width: 80%;
  height: 3em;
  margin-bottom: 10px;
  margin-top: 10px;
`;

export const Message = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color};
  font-size: 15px;
`;