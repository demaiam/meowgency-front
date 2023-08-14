import styled from "styled-components";

export const FooterContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  img:nth-child(1) {
    position: absolute;
    right: 0;
    width: 65px;
  }
  img:nth-child(2) {
    position: absolute;
    width: 150px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    bottom: 10px;
  }
  img:nth-child(3) {
    position: absolute;
    left: 0;
    width: 65px;
  }
`