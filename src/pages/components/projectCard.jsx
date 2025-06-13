import "../styles/components/projectCard.css"

const projects = [
  {
    name: "The Botanist | Msc Project",
    description: "Cosy game where you can grow your own plants and learn about them. This is a project I did for my MSc in Computer Science based on the gamification of medicinal plants associated with the WeeCAIR garden on campus at the Univesity of Dundee and its botanic gardens.",
    image: "/assets/project-images/botanist/botanist_logo.png",
    link: "",
    lang: "React",
    github: "https://github.com/tomlukewarden/MSc-Project"
  },
  {
    name: "OUTFTTR",
    description: "Clueless style wardrobe organiser with calender to remind you of your outfits.",
    image: "/assets/project-images/outfttr/outfttr.png",
    link: "",
    lang: "React",
    github: "https://github.com/tomlukewarden/outfitter-app"
  },
  {
    name: "Weather App",
    description: "Generic weather app that uses the OpenWeather API to display the weather.",
    image: "/public/assets/project-images/weather/weather.png",
    link: "https://tomlukewarden.github.io/weather-app/",
    lang: "JavaScript",
    github: "https://github.com/tomlukewarden/weather-app"},
  {
    name: "Espresso Express User Interface | UNI",
    description: "Used for a coffee shop looking to update their website. This was a project for my Database Systems class",
    image: "",
    link: "",
    lang: "PHP",
    github: "https://github.com/tomlukewarden/Database-Assessment2"}
    ,{
      name:"Banking System | UNI"
    , description: "A banking system that allows users to create accounts, deposit and withdraw money, and view their account balance. This was a project for my Software Development class.",
      image: "",
      link: "",
      lang: "Python",
      github: "https://github.com/tomlukewarden/AC51002-cw2-Warden-Thomas"
    },
    {
      name: "Conveyer Belt System | UNI",
      description: "An automated file handler that tracks the performance of the conveyer belt system, allowing for easy reporting. This was a project for my Software Development class.",
      image:"",
      link:"",
      lang: "Python",
      github: "https://github.com/tomlukewarden/AC51002-cw1-Warden-Thomas"
    }, 
    {
      name: "Fibbonacci Sequence",
      description: "A simple program that takes a user input and calculates the Fibonacci sequence up to that number.",
      image:"",
      link:"",
      lang:"Python",
      github: "https://github.com/tomlukewarden/fibonacci-function"
    }


];

// Group projects by lang
const webProjects = projects.filter(p => p.lang === "React" || p.lang === "JavaScript" || p.lang === "HTML" || p.lang === "PHP" );
const softwareProjects = projects.filter(p => p.lang !== "React" && p.lang !== "JavaScript" && p.lang !== "HTML" && p.lang !== "PHP");

function ProjectCard() {
  return (
    <>
      {/* Web Development Projects */}
      {webProjects.length > 0 && (
        <>
          <h2 className="project-section-title">Web Development</h2>
          {webProjects.map((project, idx) => (
            <div className="project-card mt-8 card" key={`web-${idx}`}>
              <div className="card-body">
                {project.image && (
                  <img src={project.image} alt={project.name} className="card-img-left" />
                )}
                <h2 className="card-title">{project.name}</h2>
                <p className="card-text">{project.description}</p>
                <p>
                  {project.link && (
                    <>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">Deployed Version</a>
                      {" | "}
                    </>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github Link</a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </>
      )}

      {/* Software Development Projects */}
      {softwareProjects.length > 0 && (
        <>
          <h2 className="project-section-title">Software Development</h2>
          {softwareProjects.map((project, idx) => (
            <div className="project-card mt-8 card" key={`soft-${idx}`}>
              <div className="card-body">
                {/* Only show image if it exists */}
                {project.image && (
                  <img src={project.image} alt={project.name} className="card-img-left" />
                )}
                <h2 className="card-title">{project.name}</h2>
                <p className="card-text">{project.description}</p>
                <p>
                  {/* Only show deployed link if it exists */}
                  {project.link && (
                    <>
                      <a href={project.link} target="_blank" rel="noopener noreferrer">Deployed Version</a>
                      {" | "}
                    </>
                  )}
                  {/* Only show GitHub link if it exists */}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">Github Link</a>
                  )}
                </p>
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
}

export default ProjectCard;