import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import homeContent from './Content/home.json';
import contactContent from './Content/contact.json';
import jobContent from './Content/jobs.js';
import projectContent from './Content/projects.json';
import { StyledAnchor } from './Components/StyledAnchor';

function App() {
  return (
    <div className="App">
        <Header />
        <Home message={homeContent.message} />
        <StyledAnchor href="#experience">↓</StyledAnchor>
        <Experience jobs={jobContent.jobs}/>
        <StyledAnchor href="#projects">↓</StyledAnchor>
        <Projects projects={projectContent.projects}/>
        <StyledAnchor href="#contact">↓</StyledAnchor>
        <Contact message={contactContent.message} links={contactContent.links} />
    </div>
  );
}

export default App;
