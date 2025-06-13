import "../styles/components/projectCard.css"
function ProjectCard({ project }) {
  return (
    <div className="project-card mt-8 card">
      <div className="card-body">
        <img src={project.image} alt={project.name} className="card-img-left" />
        <h2 className="card-title">{project.name}</h2>
        <p className="card-text">{project.description}</p>
        <p>
        <a href={project.link}>Deployed Version </a> | 
        <a href={project.github}> Github Link</a>
        </p>
        <a href="">More info</a>
      </div>
    </div>
  );
}
export default ProjectCard;