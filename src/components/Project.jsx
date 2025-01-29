import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { BsLink45Deg } from "react-icons/bs";

const Project = ({ image, title, languages, description, website, github }) => {
  return (
    <li
      className="project"
      data-aos="fade-up"
      data-aos-offset="200"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="true"
    >
      <div className="project__wrapper">
        <img src={image} className="project__img" alt="" />
        <div className="project__wrapper--bg"></div>
        <div className="project__description">
          <h3 className="project__description--title">{title}</h3>
          <h4 className="project__description--sub-title">{languages}</h4>
          <p className="project__description--para">{description}</p>
          <div className="project__description--links">
            <a
              href={website}
              target="_blank"
              className="project__description--link"
            >
              <BsLink45Deg className="website__link" />
            </a>
            {/* <a target="_blank" href={github}>
              <VscGithubInverted className="fa-brands fa-github github__link" />
            </a> */}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Project;
