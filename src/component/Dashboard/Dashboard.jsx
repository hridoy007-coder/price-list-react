import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Dashboard = () => {
    const marksArray = [
        { id: 1, name: "s-1", physics: 80, chemistry: 70, math: 90 },
        { id: 2, name: "s-2", physics: 70, chemistry: 60, math: 85 },
        { id: 3, name: "s-3", physics: 85, chemistry: 75, math: 80 },
        { id: 4, name: "s-4", physics: 60, chemistry: 80, math: 70 },
        { id: 5, name: "s-5", physics: 90, chemistry: 90, math: 95 },
        { id: 6, name: "s-6", physics: 75, chemistry: 65, math: 80 },
        { id: 7, name: "s-7", physics: 80, chemistry: 70, math: 75 },
        { id: 8, name: "s-8", physics: 85, chemistry: 80, math: 90 },
        { id: 9, name: "s-9", physics: 70, chemistry: 60, math: 80 },
        { id: 10, name: "s-10", physics: 90, chemistry: 80, math: 85 },
        { id: 11, name: "s-11", physics: 60, chemistry: 70, math: 75 },
        { id: 12, name: "s-12", physics: 75, chemistry: 85, math: 90 }
    ];

    return (
        <div className='mt-10'>
            <LineChart
                width={1000}
                height={300}
                data={marksArray}
            >
                <Line dataKey='physics' stroke="#8884d8"></Line>
                <Line dataKey='chemistry' stroke="#82ca9d"></Line>
                <Line dataKey='math'stroke="#913831"></Line>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Dashboard;