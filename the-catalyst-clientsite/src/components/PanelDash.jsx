// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const PanelDash = () => {
//     const navigate = useNavigate();
//     const handleCreation = () => {
//         // Clear any user-related data here if needed
//         navigate('/event'); // Redirect to the home page
//       };
      
//       const handleMeeting = () => {
//         // Clear any user-related data here if needed
//         navigate('/meeting'); // Redirect to the home page
//       };
    
//     return (
//         <div>
// <div className="bg-gray-200 p-5">
//             {/* Header */}
//             <div className="bg-gray-400 flex items-center justify-between px-4 py-2 mb-5">
//                 <img className="w-10 h-10" src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="BUCC Logo" />
//                 <h1 className="text-2xl font-bold text-blue-800">BRAC University Computer Club (BUCC)</h1>
//             </div>

//             <div className="flex gap-4">
//                 {/* Left Section */}
//                 <div className="w-2/3">
//                     {/* Profile Section */}
//                     <div className="bg-white p-4 shadow-md rounded mb-4">
//                         <h2 className="text-xl font-semibold mb-2">Profile</h2>
//                         <ul className="text-gray-700">
//                             <li>1. Name: John Doe</li>
//                             <li>2. ID: 20203001</li>
//                             <li>3. Email: johndoe@bracu.ac.bd</li>
//                             <li>4. Position: Member</li>
//                             <li>5. Contact No: +8801XXXXXXX</li>
//                         </ul>
//                     </div>

//                     {/* Poster Locations, To-Do List, Notifications */}
//                     <div className="grid grid-cols-3 gap-4 mb-4">
//                         <div className="bg-blue-100 p-3 rounded shadow-md">
//                             <h2 className="text-lg font-semibold">Poster Locations</h2>
//                             <p className="text-gray-600">Front Gate - BUCC Poster</p>
//                         </div>
//                         <div className="bg-blue-100 p-3 rounded shadow-md">
//                             <h2 className="text-lg font-semibold">To Do List</h2>
//                             <p className="text-gray-600">1. Prepare event proposal</p>
//                         </div>
//                         <div className="bg-blue-100 p-3 rounded shadow-md">
//                             <h2 className="text-lg font-semibold">Notifications</h2>
//                             <p className="text-gray-600">New budget approved for event</p>
//                         </div>
//                     </div>

//                     {/* Upcoming Meetings */}
//                     <div className="bg-white p-4 rounded shadow-md mb-4">
//                         <h2 className="text-xl font-semibold mb-2">Upcoming Meetings</h2>
//                         <div className="grid grid-cols-3 gap-2">
//                             <div className="bg-gray-100 p-2 rounded">
//                                 <h3 className="text-md font-semibold">Meeting Title 1</h3>
//                                 <p>Time: 12:00 PM</p>
//                                 <p>Location: Room 301</p>
//                             </div>
//                             <div className="bg-gray-100 p-2 rounded">
//                                 <h3 className="text-md font-semibold">Meeting Title 2</h3>
//                                 <p>Time: 2:00 PM</p>
//                                 <p>Location: Room 302</p>
//                             </div>
//                             <div className="bg-gray-100 p-2 rounded">
//                                 <h3 className="text-md font-semibold">Meeting Title 3</h3>
//                                 <p>Time: 4:00 PM</p>
//                                 <p>Location: Room 303</p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Upcoming Events */}
//                     <div className="bg-white p-4 rounded shadow-md mb-4">
//                         <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
//                         <ul>
//                             <li className="py-1">Hackathon - 21/01/2024 to 22/01/2024</li>
//                             <li className="py-1">Valorant Gaming - 12/11/2024 to 13/11/2024</li>
//                             <li className="py-1">Random Event 1 - 14/12/2024 to 15/12/2024</li>
//                         </ul>
//                     </div>

//                     {/* Event Calendar */}
//                     <div className="bg-blue-100 p-4 rounded shadow-md">
//                         <h2 className="text-xl font-semibold text-center">Event Calendar</h2>
//                         <div className="grid grid-cols-7 gap-2 mt-2">
//                             <div className="text-center">Sunday</div>
//                             <div className="text-center">Monday</div>
//                             <div className="text-center">Tuesday</div>
//                             <div className="text-center">Wednesday</div>
//                             <div className="text-center">Thursday</div>
//                             <div className="text-center">Friday</div>
//                             <div className="text-center">Saturday</div>
//                             {/* Empty calendar cells can be added here */}
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Section */}
//                 <div className="w-1/3">
//                     {/* Panel Members Chat */}
//                     <div className="bg-white p-4 rounded shadow-md mb-4">
//                         <h2 className="text-xl font-semibold mb-2">Panel Members Chat</h2>
//                         <div className="bg-gray-100 h-48 mb-2 rounded p-2 overflow-y-scroll">
//                             <p><strong>Mr. Panel Member 1:</strong> Hello!</p>
//                             {/* Additional messages can go here */}
//                         </div>
//                         <input
//                             type="text"
//                             className="w-full p-2 border rounded"
//                             placeholder="Type a message..."
//                         />
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="flex gap-2 mb-4">
//                         <button className="bg-blue-500 text-white w-1/2 p-2 rounded" onClick={handleMeeting}>Request for Meeting Room</button>
//                         <button className="bg-blue-500 text-white w-1/2 p-2 rounded" onClick={handleCreation}>Event Request</button>
//                     </div>

//                     {/* OCA Admin Chat */}
//                     <div className="bg-white p-4 rounded shadow-md mb-4">
//                         <h2 className="text-xl font-semibold mb-2">OCA Admin Chat</h2>
//                         <div className="bg-gray-100 h-32 mb-2 rounded p-2 overflow-y-scroll">
//                             <p><strong>Mr. Admin:</strong> Meeting scheduled for 2:00 PM</p>
//                             {/* Additional messages can go here */}
//                         </div>
//                         <input
//                             type="text"
//                             className="w-full p-2 border rounded"
//                             placeholder="Type a message..."
//                         />
//                     </div>

//                     {/* Upcoming Meeting */}
//                     <div className="bg-white p-4 rounded shadow-md">
//                         <h2 className="text-xl font-semibold mb-2">Upcoming Meeting</h2>
//                         <div className="bg-gray-100 p-3 rounded">
//                             <p><strong>With:</strong> BUCC Event Director</p>
//                             <p><strong>Time:</strong> 2:00 PM - 2:30 PM</p>
//                             <p><strong>Location:</strong> Theater Room</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>  
//         </div>
//     );
// };

// export default PanelDash;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import ChatBox from './ChatBox';

const PanelDash = () => {
  const navigate = useNavigate();

  const handleCreation = () => {
    navigate('/event'); // Redirect to Event Creation page
  };

  const handleMeeting = () => {
    navigate('/meeting'); // Redirect to Meeting Room Booking page
  };

  return (
    <div className="bg-gray-200 p-5">
      <div className="bg-gray-400 flex items-center justify-between px-4 py-2 mb-5">
        <img className="w-10 h-10" src="https://www.bracu.ac.bd/sites/all/themes/sloth/logo.svg" alt="BUCC Logo" />
        <h1 className="text-2xl font-bold text-blue-800">BRAC University Computer Club (BUCC)</h1>
      </div>

      <div className="flex gap-4">
        {/* Left Section */}
        <div className="w-2/3">
          {/* Profile Section */}
          <div className="bg-white p-4 shadow-md rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Profile</h2>
            <ul className="text-gray-700">
              <li>1. Name: John Doe</li>
              <li>2. ID: 20203001</li>
              <li>3. Email: johndoe@bracu.ac.bd</li>
              <li>4. Position: Member</li>
              <li>5. Contact No: +8801XXXXXXX</li>
            </ul>
          </div>

          {/* Poster Locations, To-Do List, Notifications */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded shadow-md">
              <h2 className="text-lg font-semibold">Poster Locations</h2>
              <p className="text-gray-600">Front Gate - BUCC Poster</p>
            </div>
            <div className="bg-blue-100 p-3 rounded shadow-md">
              <h2 className="text-lg font-semibold">To Do List</h2>
              <p className="text-gray-600">1. Prepare event proposal</p>
            </div>
            <div className="bg-blue-100 p-3 rounded shadow-md">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="text-gray-600">New budget approved for event</p>
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Upcoming Meetings</h2>
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-gray-100 p-2 rounded">
                <h3 className="text-md font-semibold">Meeting Title 1</h3>
                <p>Time: 12:00 PM</p>
                <p>Location: Room 301</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <h3 className="text-md font-semibold">Meeting Title 2</h3>
                <p>Time: 2:00 PM</p>
                <p>Location: Room 302</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <h3 className="text-md font-semibold">Meeting Title 3</h3>
                <p>Time: 4:00 PM</p>
                <p>Location: Room 303</p>
              </div>
            </div>
          </div>

          {/* Upcoming Events */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Upcoming Events</h2>
            <ul>
              <li className="py-1">Hackathon - 21/01/2024 to 22/01/2024</li>
              <li className="py-1">Valorant Gaming - 12/11/2024 to 13/11/2024</li>
              <li className="py-1">Random Event 1 - 14/12/2024 to 15/12/2024</li>
            </ul>
          </div>

          {/* Event Calendar */}
          <div className="bg-blue-100 p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold text-center">Event Calendar</h2>
            <div className="grid grid-cols-7 gap-2 mt-2">
              <div className="text-center">Sunday</div>
              <div className="text-center">Monday</div>
              <div className="text-center">Tuesday</div>
              <div className="text-center">Wednesday</div>
              <div className="text-center">Thursday</div>
              <div className="text-center">Friday</div>
              <div className="text-center">Saturday</div>
              {/* Empty calendar cells can be added here */}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3">
          {/* Panel Members Chat */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">Panel Members Chat</h2>
            <ChatBox clubId="BUCC" isOcaAdmin={false} />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 mb-4">
            <button className="bg-blue-500 text-white w-1/2 p-2 rounded" onClick={handleMeeting}>Request for Meeting Room</button>
            <button className="bg-blue-500 text-white w-1/2 p-2 rounded" onClick={handleCreation}>Event Request</button>
          </div>

          {/* OCA Admin Chat */}
          <div className="bg-white p-4 rounded shadow-md mb-4">
            <h2 className="text-xl font-semibold mb-2">OCA Admin Chat</h2>
            <ChatBox clubId="OCA" isOcaAdmin={false} />
          </div>

          {/* Upcoming Meeting */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">Upcoming Meeting</h2>
            <div className="bg-gray-100 p-3 rounded">
              <p><strong>With:</strong> BUCC Event Director</p>
              <p><strong>Time:</strong> 2:00 PM - 2:30 PM</p>
              <p><strong>Location:</strong> Theater Room</p>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default PanelDash;