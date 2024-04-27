
import React from "react";
import Links from "./Links";

function About(props) {
  // Check if the bio prop is passed and not empty
  const bioExists = props.bio && props.bio.trim() !== "";

  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditionally render the bio inside a <p> tag */}
      {bioExists && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* Pass down githubLink and linkedinLink to the Links component */}
      <Links githubLink={props.githubLink} linkedinLink={props.linkedinLink} />
    </div>
  );
}

export default About;