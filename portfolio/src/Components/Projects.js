import '../App.css';
import Project from './Project';

const Projects = (props) => {
    return (
        <div id="projects">
            <h1>Projects</h1>
            <div  className="ProjectsBox">
                {props.projects.map((item) => {
                    return <Project link={item.link} title={item.title} desc={item.desc}/>
                })}
            </div>
        </div>
    )};

export default Projects;