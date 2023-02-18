import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import homeContent from './Content/home.json';
import contactContent from './Content/contact.json';
import jobContent from './Content/jobs.json';

function App() {
  return (
    <div className="App">
        <Header />
        <Home message={homeContent.message} />
        <Contact message={contactContent.message} links={contactContent.links} />
        <Experience jobs={jobContent.jobs}/>
    </div>
  );
}

export default App;
