
import "./App.css";
import Experience from "./components/Experience/Experience";
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from "./components/PersonalInfo/PersonalInfo";
import Projects from "./components/Projects/Projects";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div
      className="App"
    >
      <Navbar />
      <Hero />
      <PersonalInfo />
      <div className="pdmg">  
        <Experience />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
