import React from 'react';
import { Link } from 'react-router-dom';

const events = [
  { id: 1, name: 'Music Concert', date: '2024-10-01', location: 'Lagos' },
  { id: 2, name: 'Tech Conference', date: '2024-11-05', location: 'Port Harcourt' },
];

const EventList = () => {
  return (
    <section className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map(event => (
          <div key={event.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold">{event.name}</h3>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <Link to={`/events/${event.id}`}>
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventList;
