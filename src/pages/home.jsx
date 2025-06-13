import Bubbles from './components/bubbles';
import Header from './components/header';
import HomeContent from './components/homeContent';
import Footer from './components/footer';
import './styles/home.css'; 

function Home() {
  return (
    <div className="page-wrapper">
      <Bubbles/>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}
export default Home;