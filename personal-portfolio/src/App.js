import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; // Update the path if it's in the components folder.
import Banner from './components/Banner';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
