import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import shape_1 from "../assets/semi circle.svg";
import shape_2 from "../assets/triangle.svg";
import shape_3 from "../assets/squiggly.svg";
import shape_4 from "../assets/circle.svg";
import logo from "../assets/logo.png";
import nextJS from "../assets/png-transparent-next-js-hd-logo-removebg-preview.png";
import typescript from "../assets/png-transparent-typescript-hd-logo-thumbnail.png";
import redux from "../assets/png-transparent-redux-react-logo-javascript-dq-purple-violet-text-thumbnail-removebg-preview.png";
import firebase from "../assets/image-removebg-preview.png";
import { HiOutlineEnvelope, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineDarkMode } from "react-icons/md";
import { BiSun } from "react-icons/bi";
import { AiOutlineLoading } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Landing = () => {
  const [loading, setLoading] = useState(true);
  const form = useRef();
  function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_64w4ozp",
        "template_tseyqlg",
        form.current,
        "cmtRSAvKWGNgzz7I-"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly on eliegmitri7@gmail.com"
        );
      });
  }

  const scaleFactor = 1 / 15;

  let isModalOpen = false;
  function toggleModal() {
    if (isModalOpen) {
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
  }

  function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; ++i) {
      const isOdd = i % 2 !== 0;
      const boolInt = isOdd ? -1 : 1;
      shapes[i].style.transform = `translate(${x * boolInt}px, ${
        y * boolInt
      }px )`;
    }
  }

  const [darkMode, setDarkMode] = useState(true);
  let contrastToggle = false;

  function toggleDarkMode() {
    contrastToggle = !contrastToggle;
    if (!darkMode) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
    if (contrastToggle && darkMode) {
      document.body.classList += "dark-theme";
    } else {
      document.body.classList.remove("dark-theme");
    }
  }

  return (
    <section
      id="landing-page"
      onMouseMove={(event) => {
        moveBackground(event);
      }}
    >
      <nav>
        <figure>
          <img id="personal__logo" src={logo} alt="" />
        </figure>
        <ul className="nav__link--list">
          <li className="nav__link">
            <a
              href="#"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              onClick={toggleModal}
            >
              About
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#projects"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
            >
              Projects
            </a>
          </li>
          <li className="nav__link">
            <a
              href="#"
              className="nav__link--anchor link__hover-effect link__hover-effect--black"
              onClick={toggleModal}
            >
              Contact
            </a>
          </li>
          <li className="nav__link click" onClick={toggleDarkMode}>
            {darkMode ? (
              <a
                href="#"
                className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >
                <MdOutlineDarkMode className="dark__mode--button mode" />
              </a>
            ) : (
              <a
                href="#"
                className="nav__link--anchor link__hover-effect link__hover-effect--black"
              >
                <BiSun className="dark__mode--button mode" />
              </a>
            )}
          </li>
        </ul>
      </nav>
      <header className="header">
        <div className="header__content">
          <h1
            className="title"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            Hey
          </h1>
          <h1
            className="title purple"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            I'm Elie.
          </h1>
          <p
            className="header__para"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            I'm a <b className="purple">Frontend Software Engineer</b> with a
            strong passion for building web applications with great user
            experiences.
            <br />
            Here's a bit more{" "}
            <b className="purple click" onClick={toggleModal}>
              about me
            </b>
            .
          </p>
        </div>
      </header>
      <a href="#">
        <button className="mail__btn click" onClick={toggleModal}>
          <HiOutlineEnvelope />
        </button>
      </a>
      <a href="#projects" className="scroll">
        <div className="scroll__icon click"></div>
      </a>
      <div className="modal">
        <div className="modal__half modal__about">
          <h3 className="modal__title modal__title--about" data-aos="fade-up">
            Here's a bit about me.
          </h3>
          <h4 className="modal__sub-title modal__sub-title--about">
            Frontend Software Engineer.
          </h4>
          <p className="modal__para">
            I'm a<b className="purple"> frontend software engineer</b> with
            experience developing websites.
            <br />I currently solve extremely difficult engineering problems
            every day with <b className="purple">React</b>,{" "}
            <b className="purple">JavaScript</b>.
          </p>
          <div className="modal__languages">
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                alt=""
              />
              <span className="language__name">HTML</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                alt=""
              />
              <span className="language__name">CSS</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                alt=""
              />
              <span className="language__name">JavaScript</span>
            </figure>
            <figure className="modal__language">
              <img
                className="modal__language--img"
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt=""
              />
              <span className="language__name">React</span>
            </figure>
            <figure className="modal__language">
              <img className="modal__language--img" src={nextJS} alt="" />
              <span className="language__name">NextJs</span>
            </figure>
            <figure className="modal__language">
              <img className="modal__language--img" src={typescript} alt="" />
              <span className="language__name">Typescript</span>
            </figure>
            <figure className="modal__language">
              <img className="modal__language--img" src={redux} alt="" />
              <span className="language__name">Redux</span>
            </figure>
            <figure className="modal__language">
              <img className="modal__language--img" src={firebase} alt="" />
              <span className="language__name">firebase</span>
            </figure>
          </div>
        </div>
        <div className="modal__half modal__contact">
          <HiOutlineXMark className="modal__exit click" onClick={toggleModal} />
          <h3 className="modal__title modal__title--contact">
            Let's have a chat!
          </h3>
          <h3 className="modal__sub-title modal__sub-title--contact">
            I'm currently open to new opportunities.
          </h3>
          <form
            ref={form}
            id="contact__form"
            onSubmit={(event) => contact(event)}
          >
            <div className="form__item">
              <label className="form__item--label">Name</label>
              <input
                className="input"
                name="user_name"
                type="text"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Email</label>
              <input
                className="input"
                name="user_email"
                type="email"
                required
              ></input>
            </div>
            <div className="form__item">
              <label className="form__item--label">Message</label>
              <textarea
                className="input"
                name="message"
                type="text"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className="form__submit">
              Send it my way
            </button>
          </form>
          <div className="modal__overlay modal__overlay--loading">
            <AiOutlineLoading className="loader" />
          </div>
          <div className="modal__overlay modal__overlay--success">
            Thanks for the message! Looking forward to speaking to you soon.
          </div>
        </div>
      </div>
      <img src={shape_1} className="shape shape--0" />
      <img src={shape_4} className="shape shape--1" />
      <img src={shape_3} className="shape shape--2" />
      <img src={shape_4} className="shape shape--3" />
      <img src={shape_2} className="shape shape--4" />
      <img src={shape_4} className="shape shape--5" />
      <img src={shape_3} className="shape shape--6" />
      <img src={shape_4} className="shape shape--7" />
      <img src={shape_1} className="shape shape--8" />
    </section>
  );
};

export default Landing;
