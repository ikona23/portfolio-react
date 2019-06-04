import React from "react";

const project = props => {
  return (
    <div>
      <p>
        I'm {props.name} projects - <br /> made with {props.tech} a project
        numbere {Math.floor(Math.random() * 20)}
      </p>
      <h3>{props.children}</h3>

    </div>
  );
};

export default project;
