import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar'; // Update the path if it's in the components folder.
import Banner from './components/Banner';
import Skiils from './components/Skiils';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skiils />
    </div>
  );
}

export default App;
