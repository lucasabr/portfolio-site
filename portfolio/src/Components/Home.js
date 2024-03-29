import '../App.css';
import photo from '../photos/Edited-8296.jpeg';

const Home = (props) => {
    return (
        <div id="home" className="HomeBox">
            <div className="IntroBox">
                <h1 className='Intro'>{props.message}</h1>
            </div>
            <img src={photo} alt="Photo of Me" className='homePhoto'></img>
        </div>
    )};

export default Home;