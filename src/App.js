import "./App.css";
import Title from "./components/Title/title";
import Modal from "./components/Modal/modal";
import EventList from "./components/EventList/eventList";
import { useState, Fragment } from "react";
import NewMovieForm from "./components/NewMovieForm/newMovieForm";

function App() {
  const [name, setName] = useState("ALIREZA");

  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(false);
  const [events, setEvents] = useState([
    { title: "chaplin (1992)", id: 1 },
    { title: "Babylon (2022)", id: 2 },
    { title: "L.A Confidential (1997)", id: 3 },
    { title: "Barton Fink (1991)", id: 4 },
    { title: "The Artist (2011)", id: 5 },
    { title: "The Bad and the Beautiful", id: 6 },
  ]);
  //handleClick for change name
  const handleClick = () => {
    setName("Learn React");
  };
  //handleDelete for delete items
  const handleDelete = (id) => {
    setEvents((perEvents) => {
      return perEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const handleShowClick = () => {
    return setShowEvents(true);
  };

  const titr = "HOLLYWOOD";
  const titrDate = "A Century has passed";

  return (
    <div className="app">
      <Title titr={titr} titrDate={titrDate} />

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>Show Events</button>
        </div>
      )}

      {showEvents && (
        <EventList events={events} handleShowClick={handleShowClick} />
      )}

      <h2>{name}</h2>
      <button className="button" onClick={handleClick}>
        Change Name
      </button>

      <br />
      {showModal && (
        <Modal>
          <NewMovieForm />
        </Modal>
      )}

      <button
        onClick={() => {
          return setShowModal(true);
        }}
      >
        Add New Movie
      </button>
    </div>
  );
}
export default App;
