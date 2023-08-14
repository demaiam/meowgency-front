import styled from "styled-components";

export const PageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`

export const MediaScroller = styled.div`
  display: grid;
  gap: 10px;
  grid-auto-flow: column;
  grid-auto-columns: 100%;
  margin-top: 50px;
  overflow-x: auto;
  overscroll-behavior-inline: contain;
  padding: 10px;
  background: #000000;
  color: #FFFFFF;
  border-radius: 15px;
  font-size: 20px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`

export const MediaElement = styled.div`
  pointer-events: ${props => props.clickable};
  img {
    inline-size: 100%;
    height: 350px;
  }
`