import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.linkedin.com/in/ahmet-can-ceylan-0bb237234/">
      <LinkedinIcon/>
      </a>
      <a href="https://www.instagram.com/ahmtcn_cyln/">
      <InstagramIcon/>
      </a>
      <a href="https://github.com/IACCI">
      <GithubIcon/>
      </a>
      </div>
      <p> &copy; 2022 Tüm Haklar Saklıdır.</p>
    </div>
  )
}

export default Footer;
