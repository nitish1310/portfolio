import React from "react";
import HeaderButton from "../layouts/HeaderButton";
import { header } from "../../profile";
import Type from "../layouts/Type";
import FbIcon from "../../icon-images/fb-icon.png";
import LinkedInIcon from "../../icon-images/linkedin-icon.png";
import GitHubIcon from "../../icon-images/github-icon.png";
import GmailIcon from "../../icon-images/gmail-icon.png";
import InstagramIcon from "../../icon-images/instagram-icon.png";
// import { Link } from "react-router-dom";

const Header = () => {
  const scrollTo = () => {
    window.scrollTo({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark-mode");
    document.getElementById("not-dark").classList.toggle("inverse-dark");
    document.getElementById("not").classList.toggle("inverse-dark");
    var x = document.getElementsByClassName("img-pro");
    for (let i = 0; i < x.length; i += 1) {
      x.item(i).classList.toggle("inverse-dark");
    }

    if (document.documentElement.classList.contains("dark-mode"))
      localStorage.setItem("mode", "Dark");
    else localStorage.setItem("mode", "Light");
  };

  return (
    <div>
      <div className="Header">
        <h3
          style={{ paddingBottom: 15, textAlign: "left" }}
          className="heading"
        >
          Hi There! <span className="wave">👋🏻</span>
        </h3>
        <h1>{`I'm ${header.name}`}</h1>
        {/* <p className="line-1 anim-typewriter">and this is my portfolio... </p> */}
        <div className="line-1">
          <Type />
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nitishsoman13/"
            >
              <img src={LinkedInIcon} alt="LinkedIn-Icon" height="35" />
            </a>

            <a target="_blank" href="https://github.com/nitish1310">
              <img
                className="social-icon"
                src={GitHubIcon}
                alt="GitHub-Icon"
                height="35"
              />
            </a>

            <a href="mailto:nitish.soman13@gmail.com">
              <img
                className="social-icon"
                src={GmailIcon}
                alt="Gmail-Icon"
                height="35"
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/nitish.soman.1/">
              <img
                className="social-icon"
                src={FbIcon}
                alt="FB-Icon"
                height="35"
              />
            </a>
            <a target="_blank" href="https://www.instagram.com/nitish.soman13/">
              <img
                className="social-icon"
                src={InstagramIcon}
                alt="Instagram-Icon"
                height="35"
              />
            </a>
          </div>
        </div>
        <label className="switch">
          <input id="mode-switch" onClick={toggleDarkMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <HeaderButton />
      </div>
      <img
        id="not-dark"
        onClick={scrollTo}
        alt="Contact Me"
        title="Contact Me"
        className="gtp"
        src="profile.png"
      ></img>
    </div>
  );
};

export default Header;
