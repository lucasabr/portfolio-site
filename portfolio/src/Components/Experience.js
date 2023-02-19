import '../App.css';
import Item from './Item';

const Experience = (props) => {
    return (
        <div>
            <h1>Experience</h1>
            <div id="experience" className="ExperienceBox">
                {props.jobs.map((job) => {
                    return <Item img={job.img} desc={job.desc}/>
                })}
            </div>
        </div>
    )};

export default Experience;