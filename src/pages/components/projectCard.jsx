
function ProjectCard({ project }) {
  project = [{
    name: "Project Name",
    description: "Project Description",
    link: "https://example.com",
    github: ""},
  {
    name: "Project Name 2",
    description: "Project Description 2",
    link: "https://example2.com",
    github: ""},
  {
    name: "Project Name 3",
    description: "Project Description 3",
    link: "https://example3.com",
    github: ""}
  ]
  
  return (
    <div className="project-card mt-8 card">
      <div className="card-body">
        <h2 className="card-title">{project.name}</h2>
        <p className="card-text">{project.description}</p>
        <a href="">{project.link}</a>
        <a href="">{project.github}</a>
        <a href="">More info</a>
      </div>
    </div>
  );
}
export default ProjectCard;