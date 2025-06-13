import "../styles/components/projectCard.css"

const projects = [
  {
    name: "The Botanist | Msc Project",
    description: "Cosy game where you can grow your own plants and learn about them. This is a project I did for my MSc in Computer Science based on the gamification of medicinal plants associated with the WeeCAIR garden on campus at the Univesity of Dundee and its botanic gardens.",
    image: "src/assets/project-images/botanist/botanist_logo.png",
    link: "#",
    lang: "React",
    github: "https://github.com/tomlukewarden/MSc-Project"
  },
  {
    name: "OUTFTTR",
    description: "Clueless style wardrobe organiser with calender to remind you of your outfits.",
    image: "src/assets/project-images/outfttr/outfttr.png",
    link: "#",
    lang: "React",
    github: "https://github.com/tomlukewarden/outfitter-app"
  },
  {
    name: "Weather App",
    description: "Generic weather app that uses the OpenWeather API to display the weather.",
    image: "src/assets/project-images/weather/weather.png",
    link: "https://tomlukewarden.github.io/weather-app/",
    lang: "JavaScript",
    github: "https://github.com/tomlukewarden/weather-app"}

];

function ProjectCard() {
  return (
    <>
    
      {projects.map((project, idx) => (
        <div className="project-card mt-8 card" key={idx}>
          <div className="card-body">
            <img src={project.image} alt={project.name} className="card-img-left" />
            <h2 className="card-title">{project.name}</h2>
            <p className="card-text">{project.description}</p>
            <p>
              <a href={project.link}>Deployed Version</a> | 
              <a href={project.github}> Github Link</a>
            </p>
            <a href="" >More info</a>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectCard;