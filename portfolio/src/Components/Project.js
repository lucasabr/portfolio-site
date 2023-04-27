import '../App.css';
import { StyledAnchor } from './StyledAnchor';

const Project = (props) => {
    return (
        <StyledAnchor className="ProjectBox" href={props.link} target="_blank">
            <div className="ProjectInfo">
                <h2>{props.title}</h2>
                <p className="ProjectDescription">{props.desc}</p>
            </div>
        </StyledAnchor>
    )
};

export default Project;