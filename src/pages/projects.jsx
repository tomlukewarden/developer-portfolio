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
        <ProjectCard />
        <Footer />
    </div>
  );
}

export default Projects;