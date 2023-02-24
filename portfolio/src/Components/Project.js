import '../App.css';

const Project = (props) => {
    return (
        <div className="ProjectInfo">
            <a href={props.link} target="_blank"><h1>{props.title}</h1></a>
            <p className="ProjectDescription">{props.desc}</p>
        </div>
    )
};

export default Project;