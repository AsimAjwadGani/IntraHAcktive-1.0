import React, { useState } from 'react';

const AdminBudgetPage = () => {
    // State for budget overview
    const [totalBudget, setTotalBudget] = useState(90000);
    const [allocatedBudget, setAllocatedBudget] = useState(50000);
    const [emergencyAllowance, setEmergencyAllowance] = useState(20000);

    // Initial budget data for fiscal semester with editable fields
    const [budgetData, setBudgetData] = useState([
        { id: 1, event: 'Valorant Gaming', club: 'BUCC', amount: 20000, comments: '', status: 'Approved' },
        { id: 2, event: 'Hackathon', club: 'BUCC', amount: 50000, comments: '', status: 'Pending' },
        { id: 3, event: 'Photography Seminar', club: 'BUAPS', amount: 30000, comments: '', status: 'Approved' },
    ]);

    // Handle changes for editable fields (amount and comments)
    const handleInputChange = (e, id, field) => {
        const updatedBudgetData = budgetData.map((item) =>
            item.id === id ? { ...item, [field]: e.target.value } : item
        );
        setBudgetData(updatedBudgetData);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-10">
            <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">Admin Budget Management</h1>

            <div className="flex gap-10 justify-center">
                {/* Budget Overview */}
                <div className="w-1/3 bg-white shadow-md rounded-lg p-6">
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
            </div>

            {/* Editable Budget Table */}
            <div className="mt-10 bg-white shadow-md rounded-lg p-6 max-w-5xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-gray-700">Fiscal Semester Budget</h2>
                <div className="overflow-y-auto max-h-60">
                    <table className="w-full text-left border">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-2 border">Event</th>
                                <th className="p-2 border">Club</th>
                                <th className="p-2 border">Allocated Amount</th>
                                <th className="p-2 border">Comments</th>
                                <th className="p-2 border">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgetData.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="p-2 border">{item.event}</td>
                                    <td className="p-2 border">{item.club}</td>
                                    <td className="p-2 border">
                                        <input
                                            type="number"
                                            value={item.amount}
                                            onChange={(e) => handleInputChange(e, item.id, 'amount')}
                                            className="w-full p-1 border rounded"
                                        />
                                    </td>
                                    <td className="p-2 border">
                                        <input
                                            type="text"
                                            value={item.comments}
                                            onChange={(e) => handleInputChange(e, item.id, 'comments')}
                                            className="w-full p-1 border rounded"
                                            placeholder="Add comments"
                                        />
                                    </td>
                                    <td className="p-2 border">{item.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminBudgetPage;