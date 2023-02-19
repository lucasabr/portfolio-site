import '../App.css';

const Item = (props) => {
    return (
        <div className="JobBox">
            <img src={props.img}></img>
            <div className="JobInfo">
                <p className="JobDescription">{props.desc}</p>
            </div>
        </div>
    )
};

export default Item;