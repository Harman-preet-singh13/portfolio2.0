import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";



function App() {

  return (
    <div>
      <div className=" bg-[#879bae] shadow-md sticky top-0 z-10">
        <Navbar />
      </div>
      <div id="home12" ></div>
      <Home />

      <div id="about" className="mb-12"></div>
      <About />
      <div id="projects" className="projects-section mb-12"></div>
      <Projects /> 

    </div>
  );
}

export default App;
