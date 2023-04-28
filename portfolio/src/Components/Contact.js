import '../App.css';
import { StyledAnchor } from './StyledAnchor';

const Contact = (props) => {
    return (
        <div className="ContactBox">
            <h1>{props.message}</h1>
            <div id="contact" className="LinksBox">
                <StyledAnchor className="links" href={props.links.linkedin} target="_blank"><i class="devicon-linkedin-plain"></i></StyledAnchor>
                <StyledAnchor className="links" href={props.links.github} target="_blank"><i class="devicon-github-original"></i></StyledAnchor>
            </div>
        </div>
    )};

export default Contact;