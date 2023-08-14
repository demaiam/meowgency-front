import { useState } from "react";
import { PageContainer, Form, Input, Button, Message } from "./Styles";
import { ThreeDots } from "react-loader-spinner";
import Logo from "../../components/Logo/Logo.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUpPage() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [button, setButton] = useState({
    content: "Sign Up",
    disabled: false
  });

  const [message, setMessage] = useState({
    content: "Sign up to use Meowgency!",
    color: "#000000"
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prev => ({ ...prev, [e.target.name]:e.target.value }))
  };

  function signUp(e) {
    e.preventDefault();
    setButton({
      content: <ThreeDots height = "15" color = "#000000"/>,
      disabled: true
    });
    const data = {
      name: user.name,
      email: user.email,
      password: user.password,
      confirmPassword: user.confirmPassword
    };
    const req = axios.post(`${import.meta.env.VITE_API_URL}/sign-up`, data);
    req.then(
      navigate("/sign-in")
    );
    req.catch(res => {
      setMessage({
        content: res.response.data,
        color: "#ff0000"
      });
      setButton({
        content: "Sign up to use Meowgency!",
        disabled: false
      });
    });
  }

  return (
    <PageContainer>
      <Logo />
      <Form onSubmit={signUp}>
        <Input
          placeholder="Name"
          type="text"
          name="name"
          required
          onChange={handleChange}
        />
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
        <Input
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
          required
          onChange={handleChange}
        />
        <Button type="submit" disabled={button.disabled}>{button.content}</Button>
        <Message color={message.color}>{message.content}</Message>
      </Form>
    </PageContainer>
  )
}