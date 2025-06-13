import { Link } from 'react-router-dom';

;

function HomeContent() {
  return (
    <div className="home-content">
       <h1>Tom Warden | Web Developer | Software Developer</h1>
      <img src="../../../assets/logo.PNG" className="logo" alt="walking computer" />
      <p className="tagline">
        I’m currently doing a Master’s in Computer Science and building cool stuff along the way. 
        I like long walks on the beach, making things work, and the occasional debugging session that turns into a mini adventure.
      </p>

      <p className="tagline">
        Feel free to check out my projects! 
      </p>
    
    </div>
  );
}

export default HomeContent;
