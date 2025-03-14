// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavBar3 from './Components/Navbar3';
import Hero from './Components/Hero';
import Features from './Components/Features';
import Front from './Components/Front';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App" id='home'>
      <NavBar3 />
      <Front /> 
       <Hero /> 
       <Features />
       <About />
       <Footer/>
       
    </div>
  );
}

export default App;
