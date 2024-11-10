import React, { useState, useMemo } from 'react';
import { useTable, usePagination, useGlobalFilter } from 'react-table';
import ReactPaginate from 'react-paginate';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const BudgetTracker = () => {
    // Sample data for budget entries
    const data = useMemo(() => [
        { id: '#19331', club: 'BUCC', event: 'Hackathon 1.0', date: '22/06/2022', amount: '1000$', remaining: '3000$' },
        { id: '#19332', club: 'BUCC', event: 'Hackathon 1.0', date: '22/06/2022', amount: '1000$', remaining: '3000$' },
        { id: '#19333', club: 'BUCC', event: 'Hackathon 1.0', date: '22/06/2022', amount: '1000$', remaining: '3000$' },
        // Add more rows as needed
    ], []);

    // Column definitions
    const columns = useMemo(() => [
        { Header: 'Expense ID', accessor: 'id' },
        { Header: 'Club', accessor: 'club' },
        { Header: 'Event', accessor: 'event' },
        { Header: 'Date', accessor: 'date' },
        { Header: 'Amount', accessor: 'amount' },
        { Header: 'Remaining Allocated Budget', accessor: 'remaining' },
        {
            Header: 'Action',
            Cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button onClick={() => handleEdit(row.original)} className="text-blue-500">
                        <FaEdit />
                    </button>
                    <button onClick={() => handleDelete(row.original)} className="text-red-500">
                        <FaTrashAlt />
                    </button>
                </div>
            ),
        },
    ], []);

    // State for selected club and budget overview data
    const [selectedClub, setSelectedClub] = useState('BUCC');
    const [budgetOverview, setBudgetOverview] = useState({
        allocated: '5000$',
        remaining: '3000$',
    });

    // Search functionality
    const [globalFilter, setGlobalFilter] = useState('');

    // Table instance with pagination and global filtering
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        setGlobalFilter: setTableGlobalFilter,
        state: { pageIndex },
    } = useTable(
        { columns, data, initialState: { pageSize: 5 }, globalFilter },
        useGlobalFilter,
        usePagination
    );

    const handlePageChange = (selectedPage) => {
        setTableGlobalFilter(globalFilter); // Keep filter active
    };

    const handleEdit = (row) => {
        console.log('Editing row:', row);
        // Add edit functionality here
    };

    const handleDelete = (row) => {
        console.log('Deleting row:', row);
        // Add delete functionality here
    };

    const handleClubChange = (event) => {
        const club = event.target.value;
        setSelectedClub(club);
        // Update budget overview based on selected club
        setBudgetOverview({
            allocated: '5000$', // Mocked data; replace with real data
            remaining: '3000$', // Mocked data; replace with real data
        });
    };

    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <h1 className="text-3xl font-bold text-center mb-5">Budget Tracker</h1>
            <div className="flex justify-between mb-4">
                <div className="bg-white shadow-md p-4 rounded-lg w-1/3">
                    <h2 className="text-lg font-semibold mb-2">Budget Overview</h2>
                    <select
                        value={selectedClub}
                        onChange={handleClubChange}
                        className="w-full p-2 border rounded mb-4"
                    >
                        <option value="BUCC">BUCC</option>
                        <option value="BUCS">BUCS</option>
                        <option value="BUAC">BUAC</option>
                    </select>
                    <p><strong>Allocated Budget:</strong> {budgetOverview.allocated}</p>
                    <p><strong>Remaining Budget:</strong> {budgetOverview.remaining}</p>
                </div>
                <div className="w-1/3 text-right">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={globalFilter}
                        onChange={(e) => {
                            setGlobalFilter(e.target.value);
                            setTableGlobalFilter(e.target.value);
                        }}
                        className="p-2 border rounded"
                    />
                </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-5">
                <table {...getTableProps()} className="w-full text-left">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-200">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="p-2 border">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map(row => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} className="border-b">
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="p-2 border">
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-5">
                <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    pageCount={Math.ceil(data.length / 5)}
                    onPageChange={({ selected }) => handlePageChange(selected)}
                    containerClassName="flex space-x-2"
                    activeClassName="text-blue-600"
                />
            </div>
        </div>
    );
};

export default BudgetTracker;
