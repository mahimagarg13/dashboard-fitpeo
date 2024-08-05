import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '5', uv: 10000 },
  { name: '9', uv: 5000 },
  { name: '11', uv: 6000 },
  { name: '13', uv: 7000 },
  { name: '15', uv: 2000 },
  { name: '17', uv: 8000 },
  { name: '19', uv: 9000 },
  { name: '21', uv: 12000 },
  { name: '23', uv: 8000 },
  { name: '25', uv: 10000 },
  { name: '27', uv: 6000 },
];

const ActivityChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" fill="#8884d8" barSize={30}  radius={[40, 40, 40, 40]}/>
      </BarChart>
    </ResponsiveContainer>
  );
};

export default ActivityChart;
