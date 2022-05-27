import React, {useState} from "react";
import logo from "../images/reddit-logo.png";
import google from "../images/google.png";
import facebook from "../images/facebook.png";
import apple from "../images/apple.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import "./login.css";
import "../buttons.css";
import "../side-bar.css";

export function Login() {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (event) => {
    setPasswordInput(event.target.value);
  }

  const togglePassword = () => {
    console.log('hasuahsuahsuhaushaus')
    if (passwordType==='password'){
      setPasswordType('text')
      return;
    } else {
      setPasswordType('password')
    }
  }



  return (
    <div className="container-login">
      {/* barra lateral */}
      <div className="side-bar"></div>

      <div className="main">
        <div className="main-header-login">
          <Link to="/">
            <button className="btn-exit">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </Link>
        </div>
        <img src={logo} alt="logo" className="logo" />
        <h1>
          By continuing, you agree to our User Agreement and Privacy Policy
        </h1>

        {/* Formulário Login */}
        <form className="main-login">
          <input
            className="input-login"
            type="text"
            placeholder="example@example.com"
          />
          {/* password */}
          <div className="input-login">
            <input
              className="input-password"
              placeholder="password"
              // ele está alterando o tipo do input, quando clica no olho aberto ele troca para tipo texto, quando clica no olho com slash ele troca para o tipo passoword (oculta o texto)
              type={passwordType}
              // é o texto que é digitado na caixa do input
              value={passwordInput}
              // toda vez que modifico o valor do input, ele faz um evento
              onChange={handlePasswordChange}
            />
            <button type="button" className="btn-eye" onClick={togglePassword}>
              {passwordType === "password" ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
          <button className="btn-submit btn-login">LOGIN</button>
        </form>

        <h1>OR</h1>

        {/* Formulário entrar como
        Google */}

        <button className="login-with">
          <img src={google} className="image-login-with" alt="continue-goole" />
          Continue with Google
        </button>

        {/* Facebook */}
        <button className="login-with">
          <img
            src={facebook}
            className="image-login-with"
            alt="continue-facebook"
          />
          Continue with Facebook
        </button>

        <h3 className="by-karen">By Karen Honorio Banci</h3>
      </div>
    </div>
  );
}
