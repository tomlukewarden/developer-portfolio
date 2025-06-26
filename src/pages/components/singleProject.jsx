import { useParams, Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Bubbles from "./bubbles";
import "../styles/project.css";
import {projects} from "./projectCard";

function SingleProject() {
  const { projectName } = useParams();

  const project = projects.find(
    (p) => p.name.replace(/\s+/g, "-").toLowerCase() === projectName
  );

  if (!project) {
    return (
      <div className="project-page-wrapper">
        <Bubbles />
        <Header />
        <div className="project-card-wrapper">
          <div className="project-card">
            <h2>Project Not Found</h2>
            <Link to="/projects" className="nav-link">← Back to Projects</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="project-page-wrapper">
      <Bubbles />
      <Header />
      <div className="project-card-wrapper" style={{ justifyContent: "center" }}>
        <div className="project-card" style={{ maxWidth: 600 }}>
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              style={{ width: "100%", height:"auto", borderRadius: "12px", marginBottom: "18px" }}
            />
          )}
          <h2 className="card-title">{project.name}</h2>
          <p className="card-text">{project.description}</p>
          <div style={{ margin: "12px 0" }}>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginRight: 12 }}
              >
                Deployed Version
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Link
              </a>
            )}
          </div>
          {project.embedUrl && (
            <div style={{ width: "100%", maxWidth: 800, margin: "20px auto" }}>
              <h4>Play the Game</h4>
              <iframe
                src={project.embedUrl}
                title={project.name}
                width="100%"
                height="300"
                style={{ border: "1px solid #222", borderRadius: "12px" }}
                allowFullScreen
              ></iframe>
            </div>
          )}
          <Link to="/projects" className="nav-link">← Back to Projects</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SingleProject;

