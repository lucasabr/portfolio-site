import '../App.css';
import Job from './Job';

const Experience = (props) => {
    return (
        <div id="experience">
            <h1>Experience</h1>
            <div className="ExperienceBox">
                {props.jobs.map((job) => {
                    return <Job title={job.title} timeline={job.timeline} img={job.img} desc={job.desc}/>
                })}
            </div>
        </div>
    )};

export default Experience;