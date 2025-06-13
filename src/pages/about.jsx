import Header from './components/header';
import Footer from './components/footer';
import Bubbles from './components/bubbles';
import AboutContent from './components/aboutContent';
import "./styles/about.css";
function About(){
    return (
        <div className="about-wrapper">
        <Bubbles/>
        <Header/>
        <AboutContent/>
        <Footer/>
        </div>
    );
}
export default About;