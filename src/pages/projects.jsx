import Header from "./components/header";
import Footer from "./components/footer";
import Bubbles from "./components/bubbles";
import ProjectCard from "./components/projectCard";
import "./styles/project.css";
function Projects () {
  return (
    <div className="project-page-wrapper">
        <Bubbles />
        <Header/>
        <div className="project-card-wrapper">
        <ProjectCard/>
        </div>
        <Footer />
    </div>
  );
}

export default Projects;