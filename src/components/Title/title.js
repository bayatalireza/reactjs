import "./style.css";

function Title(props) {
  return (
    <div className="title">
      <div className="subtitle">
        <h1>{props.titr}</h1>
        <h2>{props.titrDate}</h2>
      </div>
    </div>
  );
}

export default Title;
