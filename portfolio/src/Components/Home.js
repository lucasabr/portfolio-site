import '../App.css';

const Home = (props) => {
    return (
        <div>
            <h1 className='Intro'>{props.message}</h1>
        </div>
    )};

export default Home;