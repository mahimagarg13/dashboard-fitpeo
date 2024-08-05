import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const chartRef = useRef(null);

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.6)',
        hoverBorderColor: 'rgba(75,192,192,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  
  useEffect(() => {
    const chartInstance = chartRef.current;

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category',
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  const isValidData = data && data.labels && data.datasets;

  if (!isValidData) {
    return <div>Loading...</div>; // or some other fallback UI
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default ActivityChart;
