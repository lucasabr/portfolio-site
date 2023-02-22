import '../App.css';
import Project from './Project';

const Projects = (props) => {
    return (
        <div>
            <h1>Projects</h1>
            <div id="projects" className="ExperienceBox">
                {props.projects.map((item) => {
                    return <Project title={item.title} desc={item.desc}/>
                })}
            </div>
        </div>
    )};

export default Projects;