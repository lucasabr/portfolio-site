import '../App.css';

const Home = (props) => {
    return (
        <div id="home" className="HomeBox">
            <div className="IntroBox">
                <h1 className='Intro'>{props.message}</h1>
            </div>
            <img src="./IMG_1623-min.jpeg" alt="Photo of Me" className='homePhoto'></img>
        </div>
    )};

export default Home;