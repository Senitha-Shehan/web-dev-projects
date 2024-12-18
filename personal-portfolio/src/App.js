import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; // Update the path if it's in the components folder.
import Banner from './components/Banner';
import Skills from './components/Skills';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
    </div>
  );
}

export default App;
