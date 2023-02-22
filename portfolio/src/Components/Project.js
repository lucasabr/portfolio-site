import '../App.css';

const Project = (props) => {
    return (
        <div className="ProjectInfo">
            <h1>{props.title}</h1>
            <p className="ProjectDescription">{props.desc}</p>
        </div>
    )
};

export default Project;