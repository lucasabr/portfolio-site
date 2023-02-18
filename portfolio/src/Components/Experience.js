import '../App.css';
import Job from './Job';

const Experience = (props) => {
    return (
        <div className="ExperienceBox">
            {props.jobs.map((job) => {
                return <Job img={job.img} desc={job.desc}/>
            })}
        </div>
    )};

export default Experience;