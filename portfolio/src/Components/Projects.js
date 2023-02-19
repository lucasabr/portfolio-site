import '../App.css';
import Item from './Item';

const Projects = (props) => {
    return (
        <div>
            <h1>Projects</h1>
            <div id="projects" className="ExperienceBox">
                {props.projects.map((item) => {
                    return <Item img={item.img} desc={item.desc}/>
                })}
            </div>
        </div>
    )};

export default Projects;