import '../App.css';

const Job = (props) => {
    return (
        <div className="JobBox">
            <img alt={props.title} src={props.img}></img>
            <div className="JobInfo">
                <h1>{props.title}</h1>
                {props.timeline && <h3>{props.timeline}</h3>}
                <p className="JobDescription">{props.desc}</p>
            </div>
        </div>
    )
};

export default Job;