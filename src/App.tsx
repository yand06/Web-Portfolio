import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
