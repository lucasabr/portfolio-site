import '../App.css';
import linkedin from '../photos/icons8-linkedin-circled-96.png';
import github from '../photos/icons8-github-100.png';
import mail from '../photos/icons8-mail-100.png';

const Contact = (props) => {
    const email = `mailto:${props.links.email}`
    return (
        <div className="ContactBox">
            <h1 className="Intro">{props.message}</h1>
            <div id="contact" className="LinksBox">
                <a href={props.links.linkedin} target="_blank"><img alt="linkedin" src={linkedin}></img></a>
                <a href={props.links.github} target="_blank"><img alt="github" src={github}></img></a>
                <a href={email} target="_blank"><img alt="email" src={mail}></img></a>
            </div>
        </div>
    )};

export default Contact;