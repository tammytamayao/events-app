import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Event = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState({ event_time: "" });

  const deleteEvent = () => {
    const url = `/api/v1/destroy/${params.id}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;

    fetch(url, {
      method: "DELETE",
      headers: {
        "X-CSRF-Token": token,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then(() => navigate("/events"))
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setEvent(response))
      .catch(() => navigate("/events"));
  }, [params.id]);
  
  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white"> {event.name}</h1>
      </div>
      <div className="container py-5">
          <h3>{event.event_time}</h3>
          <button type="button" className="btn btn-danger" onClick={deleteEvent}>Delete Event</button>
          <Link to="/events" className="btn btn-link"> Back to Events List </Link>
      </div>
    </div>
  );
};

export default Event;