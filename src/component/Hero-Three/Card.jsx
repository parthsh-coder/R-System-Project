import "./Card.css";
function Card(props){
    return(
        <div className="Card">
            <img src={props.image}></img>
            <h2>{props.head}</h2>
            <p>{props.data1}</p>
            <p>{props.data2}</p>
        </div>
    );
}
export default Card;