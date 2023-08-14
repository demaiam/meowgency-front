import { LogoContainer } from "./Styles.js"
import cat from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { BiSolidUser, BiSolidUserPlus } from "react-icons/bi";

export default function Header() {
  const navigate = useNavigate();

  return (
    <LogoContainer>
      <BiSolidUser size="50" onClick={() => navigate("/sign-in")}/>
      <img src={cat} onClick={() => navigate("/")}/>
      <BiSolidUserPlus size="60" onClick={() => navigate("/sign-up")}/>
    </LogoContainer>
  )
}