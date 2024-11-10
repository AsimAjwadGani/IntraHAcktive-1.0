import React, { useState } from 'react';

const EventCreation = () => {
    const [eventName, setEventName] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [budget, setBudget] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Example action: submit data to the backend
        const eventData = {
            eventName,
            eventDate,
            eventTime,
            location,
            description,
            budget,
        };

        console.log("Submitting Event:", eventData);

        // Clear form fields after submission
        setEventName('');
        setEventDate('');
        setEventTime('');
        setLocation('');
        setDescription('');
        setBudget('');
        setShowModal(true);
    };

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center p-5">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-center text-blue-800 mb-4">Create New Event</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Event Name</label>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter event name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Date</label>
                        <input
                            type="date"
                            value={eventDate}
                            onChange={(e) => setEventDate(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Time</label>
                        <input
                            type="time"
                            value={eventTime}
                            onChange={(e) => setEventTime(e.target.value)}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Location</label>
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter location"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Provide a brief description of the event"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Budget Request (in Tk)</label>
                        <input
                            type="number"
                            value={budget}
                            onChange={(e) => setBudget(e.target.value)}
                            className="w-full p-2 border rounded"
                            placeholder="Enter budget requested"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
                    >
                        Submit Event Request
                    </button>
                </form>

                {/* Modal for Submission Confirmation */}
                {showModal && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-5 rounded shadow-lg text-center">
                            <h3 className="font-bold text-lg">Event Submitted Successfully!</h3>
                            <button
                                className="mt-4 btn btn-primary"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default EventCreation;
