import '../App.css';

const Job = (props) => {
    return (
        <div className="JobBox">
            <img src={props.img}></img>
            <p className="JobDescription">{props.desc}</p>
        </div>
    )};

export default Job;