import styles from "./eventList.module.css";

function EventList(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.handleShowClick();
        }}
      >
        Hide Events
      </button>
      {props.events.map((event, index) => {
        return (
          <div className={styles.card} key={event.id}>
            <h1 className="h1">
              {index + 1} - {event.title}
            </h1>
            <button onClick={() => {return (props.handleDelete(event.id))}}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default EventList;
