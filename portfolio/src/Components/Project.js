import '../App.css';
import { StyledAnchor } from './StyledAnchor';

const Project = (props) => {
    return (
        <div className="ProjectBox">
            <div className="ProjectInfo">
                <StyledAnchor href={props.link} target="_blank"><h1>{props.title}</h1></StyledAnchor>
                <p className="ProjectDescription">{props.desc}</p>
            </div>
        </div>
    )
};

export default Project;