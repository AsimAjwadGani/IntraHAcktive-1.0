import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MeetingRoomBooking = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear any user-related data here if needed
        navigate('/'); // Redirect to the home page
      };
      
      const handlePanel = () => {
        // Clear any user-related data here if needed
        navigate('/panel'); // Redirect to the home page
      };



    // State for room booking, filters, and search
    const [rooms] = useState([
        { id: 1, name: '9H-32C', maxLimit: '20-24', available: true },
        { id: 2, name: '9H-32C', maxLimit: '20-24', available: true },
        { id: 3, name: '9H-32C', maxLimit: '20-24', available: false },
        // Add more rooms as needed
    ]);

    const [bookedRooms] = useState([
        { id: '#19315', room: 'BUCH', time: '10:00AM - 12:00PM', date: '11/12/2024' },
        { id: '#19325', room: 'BUCH', time: '8:00AM - 9:00AM', date: '12/12/2024' },
        { id: '#19333', room: 'BUCH', time: '12:00PM - 2:00PM', date: '15/12/2024' },
        { id: '#19353', room: 'BUCH', time: '2:00PM - 3:00PM', date: '22/12/2024' },
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const handleBookRoom = (roomId) => {
        console.log(`Booking room with ID: ${roomId}`);
        // Add booking logic here
    };

    const handleCancelBooking = (bookingId) => {
        console.log(`Canceling booking with ID: ${bookingId}`);
        // Add cancellation logic here
    };

    const handleChangeTime = (bookingId) => {
        console.log(`Changing time for booking with ID: ${bookingId}`);
        // Add time change logic here
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            {/* Header */}
            <div className="flex justify-between items-center mb-5">
                <button className="bg-gray-300 p-2 rounded" onClick={handlePanel}>⬅ Back</button>
                <h1 className="text-3xl font-bold text-blue-700">Room Booking System</h1>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleLogout}>Log Out</button>
            </div>

            <div className="flex gap-4">
                {/* Sidebar for Filters */}
                <div className="w-1/4 bg-white p-4 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Filter by Date:</h2>
                    <div className="space-y-2">
                        <button className="bg-blue-100 w-full py-2 rounded">Today</button>
                        <button className="bg-blue-100 w-full py-2 rounded">Tomorrow</button>
                        <button className="bg-blue-100 w-full py-2 rounded">This Week</button>
                    </div>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Filter by Availability:</h2>
                    <div className="space-y-2">
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Monitor Available
                        </label>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Whiteboard Available
                        </label>
                        <label>
                            <input type="checkbox" className="mr-2" />
                            Available now
                        </label>
                    </div>

                    <h2 className="text-xl font-semibold mt-6 mb-4">Filter by Seat:</h2>
                    <div className="space-y-2">
                        <input type="range" min="10" max="40" className="w-full" />
                        <div className="flex justify-between text-gray-700">
                            <span>Min: 10</span>
                            <span>Max: 40</span>
                        </div>
                        <button className="bg-blue-500 text-white w-full py-2 mt-3 rounded">Apply</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="w-3/4">
                    {/* Available Rooms */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-semibold mb-4">24 Rooms Found</h2>
                            <input
                                type="text"
                                placeholder="Search Room..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="border p-2 rounded w-1/3"
                            />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {rooms
                                .filter((room) =>
                                    room.name.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((room) => (
                                    <div
                                        key={room.id}
                                        className={`p-4 rounded shadow-md ${
                                            room.available ? 'bg-blue-100' : 'bg-gray-300'
                                        }`}
                                    >
                                        <h3 className="font-semibold">{room.name}</h3>
                                        <p>Max Limit: {room.maxLimit}</p>
                                        {room.available ? (
                                            <button
                                                onClick={() => handleBookRoom(room.id)}
                                                className="bg-blue-500 text-white mt-2 py-1 px-3 rounded"
                                            >
                                                Book
                                            </button>
                                        ) : (
                                            <p className="text-red-500 mt-2">Not Available</p>
                                        )}
                                    </div>
                                ))}
                        </div>
                    </div>

                    {/* Booked Rooms */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Booked Rooms</h2>
                        <div className="bg-white rounded shadow-lg p-4">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="p-2">Booking ID</th>
                                        <th className="p-2">Room No.</th>
                                        <th className="p-2">Time</th>
                                        <th className="p-2">Date</th>
                                        <th className="p-2">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookedRooms.map((booking) => (
                                        <tr key={booking.id} className="border-b">
                                            <td className="p-2">{booking.id}</td>
                                            <td className="p-2">{booking.room}</td>
                                            <td className="p-2">{booking.time}</td>
                                            <td className="p-2">{booking.date}</td>
                                            <td className="p-2 space-x-2">
                                                <button
                                                    onClick={() => handleCancelBooking(booking.id)}
                                                    className="bg-red-500 text-white py-1 px-3 rounded"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    onClick={() => handleChangeTime(booking.id)}
                                                    className="bg-blue-500 text-white py-1 px-3 rounded"
                                                >
                                                    Change Time
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MeetingRoomBooking;