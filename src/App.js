import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ServiceSection from "./components/Services";


function App() {
  return (
    <div className="App">
   <Navbar />
   <Hero />
   <AboutSection />
<ServiceSection />
<Footer />
    </div>
  );
}

export default App;
