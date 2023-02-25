import '../App.css';
import { StyledAnchor } from './StyledAnchor';

const Contact = (props) => {
    return (
        <div className="ContactBox">
            <h1 className="Intro">{props.message}</h1>
            <div id="contact" className="LinksBox">
                <StyledAnchor href={props.links.linkedin} target="_blank"><i class="devicon-linkedin-plain"></i></StyledAnchor>
                <StyledAnchor href={props.links.github} target="_blank"><i class="devicon-github-original"></i></StyledAnchor>
            </div>
        </div>
    )};

export default Contact;