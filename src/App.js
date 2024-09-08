import "./App.css";
import Modal from "./components/Modal/Modal.js";
import Title from "./components/Title/title";


function App() {
  const subtitle1 = "Latest Movie";
  // const subtitle2 = "Latest Book";
  return (
    <div className="App">
      <Title titr="My Favorite Movies" subtitle={subtitle1} />

      <Modal />
    </div>
  );
}

export default App;
