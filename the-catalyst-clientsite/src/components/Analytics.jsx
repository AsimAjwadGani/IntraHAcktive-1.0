import React, { useRef, useEffect } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const Analytics = () => {
    // Sample data for charts
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

    // Chart options
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

    // Chart data configurations
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

    // Refs for charts to handle cleanup on unmount
    const budgetChartRef = useRef(null);
    const roomUsageChartRef = useRef(null);
    const posterLocationChartRef = useRef(null);

    useEffect(() => {
        // Cleanup function to destroy chart instances on unmount
        return () => {
            if (budgetChartRef.current) budgetChartRef.current.destroy();
            if (roomUsageChartRef.current) roomUsageChartRef.current.destroy();
            if (posterLocationChartRef.current) posterLocationChartRef.current.destroy();
        };
    }, []);

    return (
        <div className="p-5 flex gap-20">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Analytics Dashboard</h2>

            <div>
                {/* Budget Data Bar Chart */}
                <div className="mb-8" style={{ width: 200, height: 200 }}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Budget Data</h3>
                    <Bar
                        ref={budgetChartRef}
                        data={budgetChartData}
                        options={compactChartOptions}
                    />
                </div>
            </div>

            <div>
                {/* Room Usage Bar Chart */}
                <div className="mb-8" style={{ width: 200, height: 200 }}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Room Usage</h3>
                    <Bar
                        ref={roomUsageChartRef}
                        data={roomUsageChartData}
                        options={compactChartOptions}
                    />
                </div>
            </div>

            <div>
                {/* Poster Location Usage Pie Chart */}
                <div className="mb-8" style={{ width: 200, height: 200 }}>
                    <h3 className="text-lg font-semibold text-blue-700 mb-2">Poster Location Usage</h3>
                    <Pie
                        ref={posterLocationChartRef}
                        data={posterLocationChartData}
                        options={compactChartOptions}
                    />
                </div>
            </div>
        </div>
    );
};

export default Analytics;
