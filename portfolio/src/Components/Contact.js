import '../App.css';

const Contact = (props) => {
    const email = `mailto:${props.links.email}`
    return (
        <div className="ContactBox">
            <h1 className="Intro">{props.message}</h1>
            <div id="contact" className="LinksBox">
                <a href={props.links.linkedin} target="_blank"><img src="./icons8-linkedin-circled-96.png"></img></a>
                <a href={props.links.github} target="_blank"><img src="./icons8-github-100.png"></img></a>
                <a href={email} target="_blank"><img src='./icons8-mail-100.png'></img></a>
            </div>
        </div>
    )};

export default Contact;