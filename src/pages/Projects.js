import { useState, useEffect } from "react";

function Projects(props) {
  // create state to hold projects
  const [projects, setProjects] = useState(null);

  //create function to make api call
  const getProjectsData = async () => {
    //make api call and get response
    const response = await fetch(props.URL + "projects");
    // turn response into javascript object
    const data = await response.json();
    // set the projects state to the data
    setProjects(data);
  };

  // make an initial call for the data inside a useEffect, so it only happens once on component load
  useEffect(() => getProjectsData(), []);

  // define a function that will return the JSX needed once we get the data
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1 className="title">{project.name}</h1>
        <img
          src={project.image}
          class="img-fluid rounded mx-auto d-block shadow-lg p-3 mb-5 bg-body rounded"
          alt="projectImage"
        />
        <a href={project.git}>
          <button class="btn btn-outline-dark">GitHub</button>
        </a>
        <a href={project.live}>
          <button class="btn btn-outline-dark">Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1 className="loading">Loading...</h1>;
}

export default Projects;
