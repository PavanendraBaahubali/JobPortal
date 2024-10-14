// LineChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/LineChart.css';

import {
  Chart as ChartJS,
  registerables,
} from 'chart.js';

// Register components for Chart.js
ChartJS.register(...registerables);

// Sample data
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Applied Jobs',
      data: [5, 13, 3, 33, 14, 45, 19, 12, 1, 46, 15, 100], // Data points
      fill: true, // Enable area fill
      backgroundColor: 'rgba(135, 206, 235, 0.4)', // Sky blue fill
      // borderColor: 'rgba(0, 0, 139, 1)', // Deep blue line
      tension: 0.4, // Smooth edges
      pointRadius: 5, // Point size
    },
  ],
};

const LineChart = () => {
  return (
    <div className="chart-container">
      <Line
        data={data}
        options={{
          plugins: {
            tooltip: {
              enabled: true,
            },
          },
          scales: {
            x: {
              grid: {
                display: false, // X-axis grid lines
              },
            },
            y: {
              grid: {
                display: false, // Y-axis grid lines
              },
            },
          },
          interaction: {
            intersect: false,
          },
          maintainAspectRatio: false, // Allow custom height/width
        }}
      />
    </div>
  );
};

export default LineChart;
