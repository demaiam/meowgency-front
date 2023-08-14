import styled from "styled-components";

export const LogoContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background-color: #FFFFFF;
  border-bottom: 2px solid #000000;
  img {
    height: 80px;
    cursor: pointer;
  }
`;