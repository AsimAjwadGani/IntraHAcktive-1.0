import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Analytics = () => {
    // Sample raw data
    const eventAttendanceData = [
        { eventName: 'Robotics Workshop', attendance: 150 },
        { eventName: 'Drama Night', attendance: 200 },
        { eventName: 'Hackathon', attendance: 250 },
    ];

    const budgetData = [
        { category: 'Tech Events', allocated: 50000, spent: 30000 },
        { category: 'Cultural Events', allocated: 70000, spent: 60000 },
        { category: 'Sports Events', allocated: 30000, spent: 20000 },
    ];

    const roomUsageData = [
        { roomName: 'Room 301', bookings: 12 },
        { roomName: 'Auditorium', bookings: 5 },
        { roomName: 'Room 503', bookings: 8 },
    ];

    const posterLocationData = [
        { location: 'Front Gate', totalPosters: 5 },
        { location: 'Library Entrance', totalPosters: 3 },
        { location: 'Cafeteria', totalPosters: 4 },
    ];

    // Compact chart options
    const compactChartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true },
        },
        scales: {
            x: { display: false },
            y: { display: false },
        },
    };

    // Event Attendance Chart Data
    const eventAttendanceChartData = {
        labels: eventAttendanceData.map(event => event.eventName),
        datasets: [
            {
                label: 'Attendance',
                data: eventAttendanceData.map(event => event.attendance),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    // Budget Data Chart Data
    const budgetChartData = {
        labels: budgetData.map(budget => budget.category),
        datasets: [
            {
                label: 'Allocated Budget',
                data: budgetData.map(budget => budget.allocated),
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
            },
            {
                label: 'Spent Budget',
                data: budgetData.map(budget => budget.spent),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            },
        ],
    };

    // Room Usage Chart Data
    const roomUsageChartData = {
        labels: roomUsageData.map(room => room.roomName),
        datasets: [
            {
                label: 'Total Bookings',
                data: roomUsageData.map(room => room.bookings),
                backgroundColor: 'rgba(153, 102, 255, 0.6)',
            },
        ],
    };

    // Poster Location Usage Chart Data
    const posterLocationChartData = {
        labels: posterLocationData.map(location => location.location),
        datasets: [
            {
                label: 'Total Posters',
                data: posterLocationData.map(location => location.totalPosters),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                ],
            },
        ],
    };

    // Set fixed dimensions for charts
    const chartDimensions = { width: 200, height: 200 };

    return (
        <div className="p-5 flex gap-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Analytics Dashboard</h2>

            <div>
                {/* Budget Data Bar Chart */}
            <div className="mb-8" style={chartDimensions}>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Budget Data</h3>
                <Bar data={budgetChartData} options={compactChartOptions} />
            </div>
            </div>
            <div>
{/* Room Usage Bar Chart */}
<div className="mb-8" style={chartDimensions}>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Room Usage</h3>
                <Bar data={roomUsageChartData} options={compactChartOptions} />
            </div>
            </div>
            <div>
{/* Poster Location Usage Pie Chart */}
<div className="mb-8" style={chartDimensions}>
                <h3 className="text-lg font-semibold text-blue-700 mb-2">Poster Location Usage</h3>
                <Pie data={posterLocationChartData} options={compactChartOptions} />
            </div>
            </div>
            <div>

            </div>

            

            

            
        </div>
    );
};

export default Analytics;