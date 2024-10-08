import { useState } from "react";
import "./newMovieForm.css";

function NewMovieForm(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("");

  const resetForm = () => {
    setDate("");
    setTitle("");
    setGenre("action")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      title: title,
      date: date,
      genre: genre,
      id: Math.floor(Math.random() * 10000),  
    };
    console.log(event);

    props.addMovie(event);
    resetForm();
  };
  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Movie Title:</span>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Movie Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Movie Genre</span>
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="action">Action</option>
          <option value="horror">HOrror</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
          <option value="adventure">Adventure</option>
          <option value="romantic">Romantic</option>
          <option value="fantasy">Fantasy</option>
          <option value="western">Western</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}

export default NewMovieForm;
