import React, { useState } from 'react';
import "./App.css";
import Project from "./components/Project/Project";

const app = props => {
  const [projectState, setProjectState] = useState({
    projects: [
      { name: 'Regal Burger", tech: "ruby' },
      { name: 'Green", tech: "js' },
    ],
    otherState:'some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(projectState, otherState);

  const switchNameHandler = () => {
    setProjectState({
      projects: [{ name: "rena", tech: 39 }, { name: "nani", tech: 44 }]
    });
  };

  return (
    <div className="App">
      <h3>Projects</h3>
      <button onClick={switchNameHandler}>Switch Name</button>
        <Project
          name={projectState.projects[0].name}
          tech={projectState.projects[0].tech}
        >
          Project One
        </Project>
        <Project
          name={projectState.projects[1].name}
          tech={projectState.projects[1].tech}
        >
          Project Two
        </Project>
    </div>
  );
};

export default app;
