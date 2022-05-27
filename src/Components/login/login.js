import React from "react";
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
          <div className="input-login input-password">
            <input type="text" placeholder="password" />
            <button className="btn-eye">
              <FontAwesomeIcon icon={faEye} className="btn-eyeOpen" />
              <FontAwesomeIcon icon={faEyeSlash} className="btn-eyeClosed" />
            </button>
          </div>
        </form>
        <h1>OR</h1>

        {/* Formulário entrar como  */}
        {/* Google */}

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

        {/* Apple  */}
        <button className="login-with">
          <img src={apple} className="image-login-with" alt="continue-apple" />
          Continue with Apple
        </button>

        <h3 className="by-karen">By Karen Honorio Banci</h3>
      </div>
    </div>
  );
}
