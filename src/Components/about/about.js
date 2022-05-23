import React from "react";
import "./about.css";

import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import facebookSocial from "../images/facebook-social.png";
import instagram from "../images/instagram.png";

import javascript from "../images/javascript.png";
import react from "../images/react.webp";




import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";


export const About = () => {
return (
  <div className="container-about">
    {/* barra lateral */}
    <div className="side-bar"></div>

    <div className="main">
      <div className="main-header-about">
        <Link to="/">
          <button className="btn-exit">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </Link>
      </div>
      <h1 className="about-h1">About</h1>
      <h2>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </h2>

      <div className="social-media-contact">
        <a
          href="https://www.linkedin.com/in/karen-caroline-honorio-banci-198827112/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon-about" src={linkedin} alt="midia-linkedin" />
        </a>
        <a
          href="https://www.facebook.com/banci.kakis"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="icon-about"
            src={facebookSocial}
            alt="midia-facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/kakabanci/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="icon-about" src={instagram} alt="midia-instagram" />
        </a>
      </div>

      <h1 className="about-h1">Tecnologies</h1>
      <div className="tecnologies">
        <img
          className="icon-about"
          src={javascript}
          alt="tecnology-javascript"
        />
        <img className="icon-about" src={react} alt="tecnology-react" />
      </div>

      <h3 className="by-karen">By Karen Honorio Banci</h3>
    </div>
  </div>
);
};
