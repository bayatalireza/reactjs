import { useCallback, useEffect, useState } from "react";
import "./TripList.css";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]);
  console.log(trips);

  useEffect(() => {
    fetchTrips();
  }, [fetchTrips]);

  return (
    <div className="trip-list">
      <h3>Trip List</h3>
      <ul>
        {trips.map((trip) => (
          <li key={trip.id}>
            <h2>
              {trip.id} - {trip.title}
            </h2>
            <p>{trip.price}</p>
          </li>
        ))}
      </ul>
      <div className="filters">
        <button onClick={() => setUrl("http://localhost:3000/trips2?loc=iran")}>
          Iranian Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips2")}>
          Trips All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/trips2?loc=turkey")}
        >
          Turkish Trips
        </button>
      </div>
    </div>
  );
}
