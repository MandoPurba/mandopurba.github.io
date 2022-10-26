import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';
import { skill } from "../../config";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
            {skill.frontend.map((pro) => (
              <article className="experience__details">
                <BsFillPatchCheckFill className="experience__details-icon" />
                <h4>{pro}</h4>
              </article>
            ))}
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
            {skill.backend.map((pro) => (
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>{pro}</h4>
            </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience