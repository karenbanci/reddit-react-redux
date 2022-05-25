import React from "react";
import "./about.css";

import { Link } from "react-router-dom";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import portfolio from "../images/portfolio.png";

import javascript from "../images/javascript.png";
import react from "../images/react.webp";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";


export class About  extends React.Component {

  render(){
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
        <h1 className="about-h1">About Karen Honorio Banci</h1>
        <h2>
          I am from Brazil. I've lived in Mountain View, CA since February, 2022.
          <br />
          <br />
          My extensive experience as a Front-end Developer using JavaScript, HTML,
          CSS, React.JS, and Node.Js. In addition, I know ORM, DOM, TDD,
          Bootstrap, relational database (PostgreSQL and SQlite), active records,
          validations, REGEX, and Ruby on Rails. My background working in
          development teams gave me the ability to adjust to the dynamics and
          changing processes of these environments while meeting the project
          deadline. <br />
          <br /> In my experience with Bootcamp, I developed a marketplace-based
          application, with the same technology used by Airbnb, with this project
          I was able to improve my skills with GitHub, teamwork, and kanban. In my
          previous experience before Bootcamp, I worked in the chemical industry
          acting as the responsible Chemist for my sector, where I could develop
          my skills as a product developer, customer service, and develop a guide
          to solving my customers' problems.
          <br />
          <br />I am an organized, responsible person, I am a fast learner and I
          am resilient. I'm improving my English and my hard skills in Front-end
          Development.
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
            href="https://github.com/karenbanci"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img className="icon-about" src={github} alt="midia-facebook" />
          </a>
          <a
            href="https://karenbanci.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <img className="icon-about" src={portfolio} alt="midia-instagram" />
          </a>
        </div>

        <h1 className="about-h1">Technologies</h1>
        <div className="tecnologies">
          <img
            className="icon-about"
            src={javascript}
            alt="tecnology-javascript"
            />
          <img className="icon-about" src={react} alt="tecnology-react" />
        </div>
      </div>
    </div>
    );
  };
};
