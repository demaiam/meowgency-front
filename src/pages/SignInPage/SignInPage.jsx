import { useState, useEffect, useContext } from "react";
import { Form, Input, Button, Message, PageContainer } from "./Styles";
import axios from "axios";
import Logo from "../../components/Logo/Logo";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { Context } from "../../context/Context";

export default function SignInPage() {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [button, setButton] = useState({
    content: "Sign In",
    disabled: false
  });

  const [message, setMessage] = useState({
    content: "Sign in to use Meowgency!",
    color: "#000000"
  });

  const { setTokenContext } = useContext(Context);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]:e.target.value }))
  };



  function signIn(e) {
    e.preventDefault();

    setButton({
      content: <ThreeDots height = "15" color = "#FFFFFF"/>,
      disabled: true
    });

    const data = {
      email: user.email,
      password: user.password
    };

    const req = axios.post(`${import.meta.env.VITE_API_URL}/sign-in`, data);

    req.then(res => {
      sessionStorage.setItem("token", JSON.stringify(res.data.token));
      setTokenContext(res.data.token);
      navigate("/");
    });

    req.catch(res => {
      setMessage({
        content: res.response.data.message,
        color: "#ff0000"
      });
      setButton({
        content: "Sign in",
        disabled: false
      });
    }
    );
  }

  return (
    <PageContainer>
      <Logo />
      <Form onSubmit={signIn}>
        <Input
          placeholder="E-mail"
          type="email"
          name="email"
          required
          onChange={handleChange}
        />
        <Input
          placeholder="Password"
          type="password"
          name="password"
          required
          onChange={handleChange}
        />
        <Button type="submit" disabled={button.disabled}>{button.content}</Button>
        <Message color={message.color}>{message.content}</Message>
      </Form>
    </PageContainer>
  )
}