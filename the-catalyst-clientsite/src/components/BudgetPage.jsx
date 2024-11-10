import React, { useState } from 'react';

const BudgetPage = () => {
    // State for budget and budget requests
    const [totalBudget, setTotalBudget] = useState(90000);
    const [allocatedBudget, setAllocatedBudget] = useState(50000);
    const [emergencyAllowance, setEmergencyAllowance] = useState(20000);
    const [pendingRequests, setPendingRequests] = useState([
        { id: 1, event: 'Valorant Gaming', club: 'BUCC', amount: 20000, status: 'Pending' },
        { id: 2, event: 'Hackathon', club: 'BUCC', amount: 50000, status: 'Pending' },
        { id: 3, event: 'Photography Seminar', club: 'BUAPS', amount: 30000, status: 'Pending' },
    ]);

    const [requestAmount, setRequestAmount] = useState('');
    const [requestEvent, setRequestEvent] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleRequestSubmit = (e) => {
        e.preventDefault();
        // Add a new request to the pendingRequests list
        const newRequest = {
            id: pendingRequests.length + 1,
            event: requestEvent,
            club: 'BUCC', // Assuming BUCC as the club
            amount: parseInt(requestAmount),
            status: 'Pending',
        };
        setPendingRequests([...pendingRequests, newRequest]);
        setShowModal(true);
        setRequestAmount('');
        setRequestEvent('');
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            {/* Header */}
            <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Budget Management</h1>

            <div className="flex gap-8">
                {/* Budget Overview */}
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Budget Overview</h2>
                    <div className="bg-gray-100 rounded-lg p-4">
                        <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-600">Total Budget:</span>
                            <span className="text-gray-800">{totalBudget} Tk</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span className="font-semibold text-gray-600">Allocated for Events:</span>
                            <span className="text-gray-800">{allocatedBudget} Tk</span>
                        </div>
                        <div className="flex justify-between py-2">
                            <span className="font-semibold text-gray-600">Emergency Allowance:</span>
                            <span className="text-gray-800">{emergencyAllowance} Tk</span>
                        </div>
                    </div>
                </div>

                {/* Submit New Budget Request */}
                <div className="w-2/3 bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-700">Submit New Budget Request</h2>
                    <form onSubmit={handleRequestSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Event Name</label>
                            <input
                                type="text"
                                value={requestEvent}
                                onChange={(e) => setRequestEvent(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter event name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-medium mb-2">Requested Amount (in Tk)</label>
                            <input
                                type="number"
                                value={requestAmount}
                                onChange={(e) => setRequestAmount(e.target.value)}
                                className="w-full p-2 border rounded"
                                placeholder="Enter amount"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white py-2 px-4 rounded font-semibold hover:bg-blue-600"
                        >
                            Submit Request
                        </button>
                    </form>
                </div>
            </div>

            {/* Pending Requests */}
            <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Pending Budget Requests</h2>
                <div className="overflow-y-auto max-h-60">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2">Event</th>
                                <th className="p-2">Club</th>
                                <th className="p-2">Requested Amount</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pendingRequests.map((request) => (
                                <tr key={request.id} className="border-b">
                                    <td className="p-2">{request.event}</td>
                                    <td className="p-2">{request.club}</td>
                                    <td className="p-2">{request.amount} Tk</td>
                                    <td className="p-2">{request.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded shadow-lg text-center">
                        <h3 className="font-bold text-lg">Budget Request Submitted Successfully!</h3>
                        <button
                            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
                            onClick={() => setShowModal(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BudgetPage;
