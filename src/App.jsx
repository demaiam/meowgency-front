import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage/SignInPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import HomePage from "./pages/HomePage/HomePage";
import ModelPage from "./pages/ModelPage/ModelPage";
import { GlobalStyle } from "./GlobalStyle";
import { Context } from "./context/Context";
import { useState } from "react";

export default function App() {
  const [tokenContext, setTokenContext] = useState("");

  return (
    <>
      <GlobalStyle />
      <Context.Provider value={{ tokenContext, setTokenContext }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/model/:id" element={<ModelPage />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  )
}