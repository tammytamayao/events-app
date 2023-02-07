import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const url = "/api/v1/events/index";
    fetch(url)
      .then((response) => {
        if (response.ok) { return response.json(); }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setEvents(response))
      .catch(() => navigate("/"));
  }, []);

  const allEvents = events.map((event, index) => (
    <div key={index} className="col-md-6 col-lg-4">
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{event.name}</h5>
          <Link to={`/events/${event.id}`} className="btn custom-button">View Event</Link>
        </div>
      </div>
    </div>
  ));

  const noEvents = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>No Events yet. <Link to="/events/new">Create one</Link></h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5"><h1 className="display-4">Events List</h1></div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/events/new" className="btn custom-button">Create New Event</Link>
          </div>
          <div className="row"> {events.length > 0 ? allEvents : noEvents} </div>
          <Link to="/" className="btn btn-link">Home</Link>
        </main>
      </div>
    </>
  );
};

export default Events;