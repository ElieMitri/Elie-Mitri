import React from "react";
import Project from "./Project";
import Library from "../assets/Screenshot (5).png";
import Movie from "../assets/Screenshot (35).png";
import Virtual from "../assets/Screenshot (52).png";
import Lab from "../assets/lab.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <div className="row">
          <h1
            className="section__title"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
          >
            Here are some of my <span className="purple">projects</span>
          </h1>
          <ul className="project__list">
              <Project
                image={Lab}
                title="The Edit Lab"
                languages="Html, Css, Javascript, React"
                description="The Edit Lab is a course that teaches people how to edit professionally."
                website="https://theeditlab.vercel.app/"
                // github="https://github.com/ElieMitri/elie-internship"
              />
              <Project
                image={Virtual}
                title="Virtual Internship"
                languages="Html, Css, Javascript, React"
                description="Vitrtual Internship is the perfect place for you to see the prices of nfts and see the authors and owners of these nfts."
                website="https://elie-internship.vercel.app/"
                // github="https://github.com/ElieMitri/elie-internship"
              />
            <Project
              image={Library}
              title="Library"
              languages="Html, Css, Javascript, React"
              description="Library is a perfect place for you to explore new books and recomended for you to buy and read."
              website="https://e-commerce-lilac-gamma.vercel.app/"
              // github="https://github.com/ElieMitri/E-commerce"
            />
            <Project
              image={Movie}
              title="Movie finder"
              languages="Html, Css, Javascript, React"
              description="Movie finder is a website where you can search your favorite movie and now which year it came out."
              website="https://final-seven-ashy.vercel.app/"
              // github="https://github.com/ElieMitri/Final"
            />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
