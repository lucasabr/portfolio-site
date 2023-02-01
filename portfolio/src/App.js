import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import homeContent from './Content/home.json';

function App() {
  return (
    <div className="App">
        <Header />
        <Home message={homeContent.message} />
        <Contact />
    </div>
  );
}

export default App;
