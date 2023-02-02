import '../App.css';

const Contact = (props) => {
    const email = `mailto:${props.links.email}`
    return (
        <div className="ContactBox">
            <h1 className="Intro">{props.message}</h1>
            <div className="LinksBox">
                <img src="./icons8-linkedin-circled-96.png"><a target={props.links.linkedin}></a></img>
                <img src="./icons8-github-100.png"><a target={props.links.github}></a></img>
                <img src='./icons8-mail-100.png'><a target={email}></a></img>
            </div>
        </div>
    )};

export default Contact;