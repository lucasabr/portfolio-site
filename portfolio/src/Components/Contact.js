import '../App.css';
const Contact = (props) => {
    return (
        <div className="ContactBox">
            <h1 className="Intro">{props.message}</h1>
            <div id="contact" className="LinksBox">
                <a href={props.links.linkedin} target="_blank"><i class="devicon-linkedin-plain"></i></a>
                <a href={props.links.github} target="_blank"><i class="devicon-github-original"></i></a>
            </div>
        </div>
    )};

export default Contact;