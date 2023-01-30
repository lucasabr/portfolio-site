import '../App.css';

const Home = (props) => {
    return (
        <div className="HomeBox">
            <div className="IntroBox">
                <h1 className='Intro'>{props.message}</h1>
            </div>
            <div className="vertical"></div>
            <img src="./IMG_1623.jpeg" alt="Photo of Me" className='homePhoto'></img>
        </div>
    )};

export default Home;