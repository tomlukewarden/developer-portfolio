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
        <h1 className="project-title">Have a look at my projects!</h1>
        <ProjectCard
          project={{
            image:"src/assets/project-images/botanist/botanist_logo.png",
            name: "The Botanist",
            description: "Browser game where you grow plants and explore a virtual garden. As well as healing NPCs with fun stories!",
            link: "https://example.com",
            github: "https://github.com/your-repo"
          }}
        />
        <Footer />
    </div>
  );
}

export default Projects;