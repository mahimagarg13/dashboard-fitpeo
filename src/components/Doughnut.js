// DoughnutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const data = {
    datasets: [
      {
        data: [70, 30],
        backgroundColor: ['#4e73df', '#e0e0e0'],
        borderColor: ['#4e73df', '#e0e0e0'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '120px', height: '120px',marginRight:'20px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: 'white',
        }}
      >
        <div style={{ fontSize: '20px', fontWeight: 'bold' }}>70%</div>
        <div style={{ fontSize: '10px' }}>Goal Completed</div>
      </div>
    </div>
  );
};

export default DoughnutChart;
