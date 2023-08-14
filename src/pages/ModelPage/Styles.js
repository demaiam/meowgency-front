import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  font-family: 'Roboto', sans-serif;
`;

export const MediaScroller = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
`;
export const MediaElement = styled.div`
  img {
    inline-size: 100%;
  }
`;

export const BotContainer = styled.div`
  box-shadow: 0px -4px 32px -3px rgba(0,0,0,0.75);
  position: fixed;
  bottom: 0;
  left: 0;
  height: 250px;
  width: 92%;
  background-color: white;
  border-radius: 35px 35px 0px 0px;
  padding: 15px;
  h1 {
    font-size: 30px;
  }
  img {
    position: absolute;
    width: 50px;
    right: 40px;
    top: 22px;
    transform: rotate(-15deg);
  }
`;

export const Description = styled.div`
  display: flex;
  width: 100%;
`;

export const DescriptionLeft = styled.div`
  margin-top: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  h2 {
    font-size: 15px;
  }
  span {
    color: gray;
  } 
`;

export const DescriptionTop = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
`;

export const DescriptionBot = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
`;

export const DescriptionRight = styled.div`
  display: flex;
  align-items: center;
  margin-left: 60px;
  width: 50%;
`;

export const Star = styled.div`
`