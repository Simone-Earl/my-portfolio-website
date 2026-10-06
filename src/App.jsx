import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <>
      {/* --- Global Fixed Background --- */}
      <div className="global-bg">
        <div className="hero-grid-overlay"></div>
        <div className="hero-glow hero-glow-top"></div>
        <div className="hero-glow hero-glow-bottom"></div>
      </div>

      {/* --- Page Content --- */}
      <Navbar />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;