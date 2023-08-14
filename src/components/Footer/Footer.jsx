import right from "../../assets/right.png";
import left from "../../assets/left.png";
import middle from "../../assets/logocat.png";
import { FooterContainer } from "./Styles";

export default function Footer() {
  return (
    <FooterContainer>
      <img src={right} />
      <img src={middle} />
      <img src={left} />
    </FooterContainer>
  )
}