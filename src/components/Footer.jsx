import React from "react";
import Logo from "../assets/logo.png";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <a href="#" className="footer__anchor">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
            <span className="footer__logo--popper">
              Top
              <AiOutlineArrowUp className="footer__arrow" />
            </span>
          </a>
          <div className="footer__social--list">
            <a
              href="https://github.com/ElieMitri"
              target="_blank"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              GitHub
            </a>
            <a className="disabled footer__social--link link__hover-effect link__hover-effect--white">
              LinkedIn
            </a>
            <a
              href="#"
              className="footer__social--link link__hover-effect link__hover-effect--white"
            >
              Contact
            </a>
            <a className=" disabled footer__social--link link__hover-effect link__hover-effect--white">
              Resume
            </a>
          </div>
          <div className="footer__copyright">Copyright &copy; 2024 Elie Mitri</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
