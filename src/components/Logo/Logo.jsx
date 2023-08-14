import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Image } from "./Styles.js";

export default function Logo() {
  const navigate = useNavigate();
  return (
    <Image>
      <img src={logo} onClick={() => navigate("/")}/>
    </Image>
  )
}