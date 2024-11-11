// import React, { useEffect, useState } from 'react';
// import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';

// const OcaDash = () => {
//     const loadedUsers = useLoaderData();
//     const [events, setEvents] = useState(loadedUsers);
//     const [rooms, setRooms] = useState([]);
//     console.log(rooms);
    
    
    

//     const navigate = useNavigate();
//     const handleLogout = () => {
//         // Clear any user-related data here if needed
//         navigate('/'); // Redirect to the home page
//       };
//     const handleBudget = () => {
//         // Clear any user-related data here if needed
//         navigate('/budgetPanel'); // Redirect to the home page
//       };
//     const handleAna = () => {
//         // Clear any user-related data here if needed
//         navigate('/analytics'); // Redirect to the home page
//       };

//       useEffect(() => {
//         // Fetch users from backend
//         fetch('http://localhost:5000/rooms')
//           .then(response => response.json())
//           .then(data => {
//             setRooms(data);
            
//           })
//           .catch(error => {
//             console.error('Error fetching users:', error);
            
//           });
//       }, []);
      
      

    // const [events, setEvents] = useState([
    //     { id: 1, title: 'Robotics Club Workshop', date: '12.01.2024', details: 'Join us for an introductory robotics workshop covering fundamentals of automation and AI.' },
    //     { id: 2, title: 'Cultural Club - Annual Drama Night', date: '20.01.2024', details: 'An evening of performances highlighting the diversity of culture at BRACU. Don’t miss it!' },
    //     { id: 3, title: 'Adventure Club - Weekend Hiking', date: '22.01.2024', details: 'Get ready for a thrilling hike in the mountains. Bring your gear and adventurous spirit!' },
    //     { id: 4, title: 'Computer Club - 24-Hour Hackathon', date: '25.01.2024', details: 'Participate in a hackathon, solve real-world problems, and collaborate with fellow students.' },
    //     { id: 5, title: 'Robotics Club - AI and Robotics Talk', date: '28.01.2024', details: 'Join us for a tech talk featuring AI experts discussing future trends in robotics.' }
    // ]);

//     // const [rooms, setRooms] = useState([
//     //     { id: 1, title: 'Room 301 - Robotics Workshop Booking', date: '12.01.2024', details: 'Reserved for Robotics Club’s introductory workshop.' },
//     //     { id: 2, title: 'Auditorium - Cultural Drama Night', date: '20.01.2024', details: 'Booked for Cultural Club’s annual drama performance night.' },
//     //     { id: 3, title: 'Room 402 - Adventure Club Briefing', date: '21.01.2024', details: 'A pre-trip briefing session for Adventure Club members before the hiking trip.' },
//     //     { id: 4, title: 'Room 503 - Hackathon Workspace', date: '25.01.2024', details: 'Reserved for Computer Club’s 24-hour hackathon event. Set up workspace here.' },
//     //     { id: 5, title: 'Room 305 - Robotics Guest Talk', date: '28.01.2024', details: 'Reserved for Robotics Club’s guest lecture on AI advancements.' }
//     // ]);

//     const [showModal, setShowModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');

//     const handleEventAction = (id, action) => {
//         setEvents(events.filter(event => event.id !== id));
//         setModalMessage(`Event ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
//         setShowModal(true);
//     };

//     const handleRoomAction = (id, action) => {
//         setRooms(rooms.filter(room => room.id !== id));
//         setModalMessage(`Room ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
//         setShowModal(true);
//     };

//     return (
//         <div>
//             <div className='bg-gray-400 py-3'>
//                 <div className='flex items-center gap-80 px-48 '>
//                     <img className='w-36 h-36 ' src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="" />
//                     <div>
//                         <h1 className='pt-2 text-5xl text-blue-100'>BRACU OCA Dashboard</h1>
//                     </div>
                    
//                     <div className='btn bg-orange-300' onClick={handleLogout} >Logout</div>
//                 </div>
//             </div>

//             <div className='m-5 mx-10 flex gap-20'> {/* Horizontal layout for the two sections */}
//                 {/* Event Requests */}
//                 <div className='bg-gray-200 w-96 p-5 h-[593.6px] overflow-y-scroll'>
//                     <h2 className='text-3xl text-blue-50 bg-gray-400 text-center py-2 mb-4'>Club Event Requests</h2>
//                     {events.map(event => (
//                         <div key={event.id} className="bg-gray-500 text-lg p-2 my-2">
//                             <p>Title: {event.title}</p>
//                             <h1>Date: {event.date}</h1>
//                             <p>Details: {event.details}</p>
//                             <div className='flex justify-evenly'>
//                                 <button className='btn btn-accent' onClick={() => handleEventAction(event.id, 'accept')}>Accept</button>
//                                 <button className='btn btn-error' onClick={() => handleEventAction(event.id, 'reject')}>Reject</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Room Booking Requests */}
//                 <div className='bg-gray-200 w-96 p-5 h-[593.6px] overflow-y-scroll'>
//                     <h2 className='text-3xl text-blue-50 bg-gray-400 text-center py-2 mb-4'>Room Booking Requests</h2>
//                     {rooms.map(room => (
//                         <div key={room.id} className="bg-gray-500 text-lg p-2 my-2">
//                             <p>Title: {room.title}</p>
//                             <h1>Date: {room.date}</h1>
//                             <p>Details: {room.details}</p>
//                             <div className='flex justify-evenly'>
//                                 <button className='btn btn-accent' onClick={() => handleRoomAction(room.id, 'accept')}>Accept</button>
//                                 <button className='btn btn-error' onClick={() => handleRoomAction(room.id, 'reject')}>Reject</button>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 <div className='bg-gray-100 shadow-lg rounded-lg overflow-hidden w-full md:w-96'>
//     <h2 className='bg-blue-700 text-white text-center text-xl py-2'>Posters Details</h2>
//     <table className='min-w-full bg-white text-gray-700'>
//         <thead>
//             <tr>
//                 <th className='px-4 py-2 text-left bg-gray-200'>Location</th>
//                 <th className='px-4 py-2 text-left bg-gray-300'>Club</th>
//                 <th className='px-4 py-2 text-left bg-gray-200'>Status</th>
//                 <th className='px-4 py-2 text-left bg-gray-300'>Duration</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr className='bg-gray-100'>
//                 <td className='border px-4 py-2'>Front Gate</td>
//                 <td className='border px-4 py-2'>BUCC</td>
//                 <td className='border px-4 py-2'>Booked</td>
//                 <td className='border px-4 py-2'>01/01/2024 - 15/01/2024</td>
//             </tr>
//             <tr>
//                 <td className='border px-4 py-2'>Back Gate</td>
//                 <td className='border px-4 py-2'>BUCUC</td>
//                 <td className='border px-4 py-2'>Booked</td>
//                 <td className='border px-4 py-2'>10/01/2024 - 20/01/2024</td>
//             </tr>
//             <tr className='bg-gray-100'>
//                 <td className='border px-4 py-2'>Near Escalator</td>
//                 <td className='border px-4 py-2'>BUDTF</td>
//                 <td className='border px-4 py-2'>Booked</td>
//                 <td className='border px-4 py-2'>05/01/2024 - 18/01/2024</td>
//             </tr>
//             <tr>
//                 <td className='border px-4 py-2'>Near Auditorium</td>
//                 <td className='border px-4 py-2'>ROBU</td>
//                 <td className='border px-4 py-2'>Engaged</td>
//                 <td className='border px-4  py-2'>08/01/2024 - 22/01/2024</td>
//             </tr>
//             <tr className='bg-gray-100'>
//                 <td className='border px-4 py-2'>Library Entrance</td>
//                 <td className='border px-4 py-2'>BUAC</td>
//                 <td className='border px-4 py-2'>Booked</td>
//                 <td className='border px-4 py-2'>12/01/2024 - 25/01/2024</td>
//             </tr>
//             <tr>
//                 <td className='border px-4 py-2'>Cafeteria</td>
//                 <td className='border px-4 py-2'>Bizz Bee</td>
//                 <td className='border px-4 py-2'>Free</td>
//                 <td className='border px-4 py-2'>--</td>
//             </tr>
//         </tbody>
//     </table>
//                 </div>


//             </div>


//             <div className='m-5 mx-10 flex gap-10 mb-20'>
//                 <div className='bg-gray-200 shadow-lg rounded-lg overflow-hidden w-full md:w-80 mt-8 p-4'>
//         <h2 className='text-center text-2xl font-semibold text-gray-700 mb-4'>Budget Management</h2>
//         <div className='bg-gray-100 rounded-lg p-4'>
//             <div className='flex justify-between py-2 border-b'>
//                 <span className='font-semibold text-gray-600'>Total Budget:</span>
//                 <span className='text-gray-800'>90,000 Tk</span>
//             </div>
//             <div className='flex justify-between py-2 border-b'>
//                 <span className='font-semibold text-gray-600'>Allowed Allocation For Events:</span>
//                 <span className='text-gray-800'>50,000 Tk</span>
//             </div>
//             <div className='flex justify-between py-2'>
//                 <span className='font-semibold text-gray-600'>Emergency Allowance:</span>
//                 <span className='text-gray-800'>20,000 Tk</span>
//             </div>
//         </div>
//                 </div>

//                 <div className='bg-blue-100 shadow-lg rounded-lg overflow-hidden w-full md:w-80 p-4 mt-8'>
//                     <h2 className='text-center text-2xl font-semibold text-blue-800 mb-4'>Pending Budget Allocation Requests</h2>
//                     <div className='space-y-3 max-h-60 overflow-y-auto'>
//                         <div className='bg-blue-200 p-3 rounded-lg'>
//                             <p><strong>Event:</strong> Valorant Gaming</p>
//                             <p><strong>Club:</strong> BUCC</p>
//                             <p><strong>Requested Budget:</strong> 20,000 Tk</p>
//                         </div>
//                         <div className='bg-blue-200 p-3 rounded-lg'>
//                             <p><strong>Event:</strong> Hackathon</p>
//                             <p><strong>Club:</strong> BUCC</p>
//                             <p><strong>Requested Budget:</strong> 50,000 Tk</p>
//                         </div>
//                         <div className='bg-blue-200 p-3 rounded-lg'>
//                             <p><strong>Event:</strong> Photography Seminar</p>
//                             <p><strong>Club:</strong> BUAPS</p>
//                             <p><strong>Requested Budget:</strong> 30,000 Tk</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='bg-blue-100 shadow-lg rounded-lg overflow-hidden w-full md:w-80 p-4 mt-8'>
//     <h2 className='text-center text-2xl font-semibold text-blue-800 mb-4'>Notifications</h2>
//     <div className='space-y-2 max-h-60 overflow-y-auto'>
//         <div className='bg-blue-200 p-3 rounded-lg'>
//             <p><strong>Budget Request:</strong> BUCC has sent a new request for their upcoming event</p>
//         </div>
//         <div className='bg-blue-200 p-3 rounded-lg'>
//             <p><strong>Poster Request:</strong> BUCC has sent a new request for Poster Location for their upcoming event</p>
//         </div>
//         <div className='bg-blue-200 p-3 rounded-lg'>
//             <p><strong>Room Request:</strong> BUCC has sent a new request for Room Location for their upcoming event</p>
//         </div>
//     </div>
// </div>


//                 <div className='bg-blue-100 shadow-lg rounded-lg overflow-hidden w-full md:w-80 p-4 mt-8'>
//                     <h2 className='text-center text-2xl font-semibold text-blue-800 mb-4'>Upcoming Meeting</h2>
//                     <div className='bg-blue-200 p-4 rounded-lg'>
//                         <p><strong>1. Meeting with:</strong> BUCC Event Director</p>
//                         <p><strong>Time:</strong> 2:00PM - 2:30PM</p>
//                         <p><strong>Location:</strong> Theater Room</p>
//                     </div>
//                 </div>


//             </div>
//             <div className='flex items-center justify-center gap-6'>
//             <div className='btn bg-orange-300 w-[500px]  mb-20' onClick={handleBudget}  >Budget Tracker</div>
//             <div className='btn bg-orange-300 w-[500px]  mb-20' onClick={handleAna}  >Analytics</div>
//             </div>

//             {/* Modal */}
//             {showModal && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-5 rounded shadow-lg text-center">
//                         <h3 className="font-bold text-lg">{modalMessage}</h3>
//                         <button className="mt-4 btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OcaDash;




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from './ChatBox';

const OcaDash = () => {
    const navigate = useNavigate();
    const [events, setEvents] = useState([]);
    const [rooms, setRooms] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/event')
            .then(response => response.json())
            .then(data => setEvents(data))
            .catch(error => console.error('Error fetching events:', error));

        fetch('http://localhost:5000/rooms')
            .then(response => response.json())
            .then(data => setRooms(data))
            .catch(error => console.error('Error fetching rooms:', error));
    }, []);

    const handleEventAction = async (id, action) => {
        
        
        try {
            await fetch(`http://localhost:5000/events/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ approvalStatus: action === 'accept' ? 'approved' : 'rejected' }),
                
            });
            
            
            setEvents(events.filter(event => event._id !== id));
            setModalMessage(`Event ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
            setShowModal(true);
        } catch (error) {
            console.error('Error updating event:', error);
        }
    };

    const handleRoomAction = async (id, action) => {
        try {
            await fetch(`http://localhost:5000/rooms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ approvalStatus: action === 'accept' ? 'approved' : 'rejected' }),
            });
            setRooms(rooms.filter(room => room._id !== id));
            setModalMessage(`Room ${action === 'accept' ? 'approved' : 'rejected'} successfully.`);
            setShowModal(true);
        } catch (error) {
            console.error('Error updating room:', error);
        }
    };

    const handleBudget = () => navigate('/budgetPanel');
    const handleAnalytics = () => navigate('/analytics');
    const handleLogout = () => navigate('/');

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <div className="bg-gray-400 py-3">
                <div className="flex items-center justify-between px-10">
                    <img className="w-36 h-36" src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="BRACU Logo" />
                    <h1 className="text-5xl text-blue-100">BRACU OCA Dashboard</h1>
                    <button className="btn bg-orange-300" onClick={handleLogout}>Logout</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-5 mx-10">
                {/* Club Event Requests */}
                <div className="bg-white p-4 shadow-lg rounded-lg h-[600px] overflow-y-scroll">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Club Event Requests</h2>
                    {events.map(event => (
                        <div key={event._id} className="bg-gray-200 p-3 rounded mb-3">
                            <p><strong>Title:</strong> {event.title}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Details:</strong> {event.details}</p>
                            <div className="flex justify-between mt-2">
                                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleEventAction(event._id, 'accept')}>Accept</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleEventAction(event._id, 'reject')}>Reject</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Room Booking Requests */}
                <div className="bg-white p-4 shadow-lg rounded-lg h-[600px] overflow-y-scroll">
                    <h2 className="text-2xl font-semibold mb-4 text-center text-blue-600">Room Booking Requests</h2>
                    {rooms.map(room => (
                        <div key={room._id} className="bg-gray-200 p-3 rounded mb-3">
                            <p><strong>Title:</strong> {room.title}</p>
                            <p><strong>Date:</strong> {room.date}</p>
                            <p><strong>Details:</strong> {room.details}</p>
                            <div className="flex justify-between mt-2">
                                <button className="bg-green-500 text-white px-3 py-1 rounded" onClick={() => handleRoomAction(room._id, 'accept')}>Accept</button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded" onClick={() => handleRoomAction(room._id, 'reject')}>Reject</button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* OCA Admin Chat */}
                <div className="bg-white p-4 shadow-lg rounded-lg">
                    <h2 className="text-2xl font-semibold text-center text-blue-600">OCA Admin Chat</h2>
                    <ChatBox clubId="OCA" isOcaAdmin={true} />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-5 mx-10">
                {/* Posters Details */}
                <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
                    <h2 className="bg-blue-700 text-white text-center text-xl py-2">Posters Details</h2>
                    <table className="min-w-full bg-white text-gray-700">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left bg-gray-200">Location</th>
                                <th className="px-4 py-2 text-left bg-gray-300">Club</th>
                                <th className="px-4 py-2 text-left bg-gray-200">Status</th>
                                <th className="px-4 py-2 text-left bg-gray-300">Duration</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-100">
                                <td className="border px-4 py-2">Front Gate</td>
                                <td className="border px-4 py-2">BUCC</td>
                                <td className="border px-4 py-2">Booked</td>
                                <td className="border px-4 py-2">01/01/2024 - 15/01/2024</td>
                            </tr>
                            {/* Additional rows as needed */}
                        </tbody>
                    </table>
                </div>

                {/* Notifications */}
                <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden p-4">
                    <h2 className="text-center text-2xl font-semibold text-blue-800 mb-4">Notifications</h2>
                    <div className="space-y-2 max-h-60 overflow-y-auto">
                        <div className="bg-blue-200 p-3 rounded-lg">
                            <p><strong>Budget Request:</strong> BUCC has sent a new request for their upcoming event</p>
                        </div>
                        {/* Additional notifications as needed */}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 mt-5 mx-10">
                {/* Budget Management */}
                <div className="bg-gray-200 shadow-lg rounded-lg overflow-hidden p-4">
                    <h2 className="text-center text-2xl font-semibold text-gray-700 mb-4">Budget Management</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-600">Total Budget:</span>
                            <span className="text-gray-800">90,000 Tk</span>
                        </div>
                        {/* Additional budget fields */}
                    </div>
                </div>

                {/* Pending Budget Allocation Requests */}
                <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden p-4">
                    <h2 className="text-center text-2xl font-semibold text-blue-800 mb-4">Pending Budget Allocation Requests</h2>
                    <div className="space-y-3 max-h-60 overflow-y-auto">
                        <div className="bg-blue-200 p-3 rounded-lg">
                            <p><strong>Event:</strong> Valorant Gaming</p>
                            <p><strong>Club:</strong> BUCC</p>
                            <p><strong>Requested Budget:</strong> 20,000 Tk</p>
                        </div>
                        {/* Additional budget requests */}
                    </div>
                </div>

                {/* Upcoming Meetings */}
                <div className="bg-blue-100 shadow-lg rounded-lg overflow-hidden p-4">
                    <h2 className="text-center text-2xl font-semibold text-blue-800 mb-4">Upcoming Meeting</h2>
                    <div className="bg-blue-200 p-4 rounded-lg">
                        <p><strong>1. Meeting with:</strong> BUCC Event Director</p>
                        <p><strong>Time:</strong> 2:00PM - 2:30PM</p>
                        <p><strong>Location:</strong> Theater Room</p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-6 mt-10">
                <button className="btn bg-orange-300 w-[500px]" onClick={handleBudget}>Budget Tracker</button>
                <button className="btn bg-orange-300 w-[500px]" onClick={handleAnalytics}>Analytics</button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <h3 className="font-bold text-lg">{modalMessage}</h3>
                        <button className="mt-4 btn btn-primary" onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default OcaDash;