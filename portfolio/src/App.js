import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import homeContent from './Content/home.json';

function App() {
  return (
    <div className="App">
        <Header />
        <Home message={homeContent.message} />
    </div>
  );
}

export default App;
