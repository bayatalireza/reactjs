import "./style.css"

function Title(props) {
  return (
    <>
      <h1 className="title">{props.titr}</h1>
      <br/>
      <h3 className= "subtitle">{props.subtitle}</h3>
    </>
  );
}
export default Title;
