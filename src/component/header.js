import React from "react";
import "../style/header.scss";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedinIn,
  FaDotCircle,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

//HEADER COMPONENT
const Header = (props) => {
  const { home, about } = props;
  return (
    <div id={home} className="home">
      <div className="home_name">
        <p className="home_name_para">Hello! i am </p>
        <h1>Nnamani Solomon </h1>
        <h2> Frontend Developer </h2>
        <ul className="listContainer">
          <li>Web Developer </li>
          <li>
            <FaDotCircle className="periodIcons" />{" "}
          </li>
          <li>React Expert </li>
          <li>
            <FaDotCircle className="periodIcons" />{" "}
          </li>
          <li>Software Engineer </li>
        </ul>

        <div className="buttonsContainer">
          <button
            onClick={() => {
              alert("Not Avaliable Yet");
            }}
          >
            Get Resume
          </button>
          <a href={about}> About Me</a>
        </div>

        <div className="gridFollow">
          <span className="gridFollow_span none">
            {" "}
            <hr />{" "}
          </span>
          <p className="gridFollow_para"> FOLLOW ME </p>
          <span className="gridFollow_span">
            {" "}
            <hr />{" "}
          </span>
        </div>

        <div className="socials">
          <a href="https://github.com/Solom0m">
            {" "}
            <FaGithub />{" "}
          </a>
          <a href="https://x.com/therealnnamani?t=7GmwKXQ6yeHkb-S5OHQopg&s=09">
            {" "}
            <BsTwitterX />{" "}
          </a>
          <a href="hrttps://wa.me/message/NG5EUZ54WXZDH1">
            {" "}
            <FaWhatsapp />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/solo-mon-5b9b19262?utm_source=share&utm_
            source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            {" "}
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
