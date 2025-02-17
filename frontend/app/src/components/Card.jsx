import "../css/Card.css";
import bg from "../assets/bg.jpg";
import Button from "./Button";

export default function Card(props) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <img src={bg} alt={props.alt} />
          <p>{props.note}</p>
        </div>
      </div>
    </>
  );
}
