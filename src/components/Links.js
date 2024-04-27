import React from "react";

function Links(props) {
  return (
    <div>
      <h3>Links</h3>
      {/* Display GitHub link */}
      <a href={props.github}>{props.github}</a>
      <br />
      {/* Display LinkedIn link */}
      <a href={props.linkedin}>{props.linkedin}</a>
    </div>
  );
}

export default Links;
