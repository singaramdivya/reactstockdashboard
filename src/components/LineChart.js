import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register the required components from ChartJS
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  // Prepare the chart data by mapping the input data to the format required by ChartJS
  const chartData = {
    // Labels for the x-axis, formatted as short date strings
    labels: data.map(item => new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })),
    
    // Datasets for the line chart
    datasets: [
      {
        // Dataset for 'Open' prices
        label: 'Open',
        // Data points for 'Open' prices
        data: data.map(item => item.open),
        // Do not fill the area under the line
        fill: false,
        // Line color for 'Open' prices
        borderColor: 'rgba(75, 192, 192, 1)',
        // Line tension for smooth curves
        tension: 0.1
      },
      {
        // Dataset for 'High' prices
        label: 'High',
        // Data points for 'High' prices
        data: data.map(item => item.high),
        // Do not fill the area under the line
        fill: false,
        // Line color for 'High' prices
        borderColor: 'rgba(255, 99, 132, 1)',
        // Line tension for smooth curves
        tension: 0.1
      },
      {
        // Dataset for 'Low' prices
        label: 'Low',
        // Data points for 'Low' prices
        data: data.map(item => item.low),
        // Do not fill the area under the line
        fill: false,
        // Line color for 'Low' prices
        borderColor: 'rgba(54, 162, 235, 1)',
        // Line tension for smooth curves
        tension: 0.1
      },
      {
        // Dataset for 'Close' prices
        label: 'Close',
        // Data points for 'Close' prices
        data: data.map(item => item.close),
        // Do not fill the area under the line
        fill: false,
        // Line color for 'Close' prices
        borderColor: 'rgba(153, 102, 255, 1)',
        // Line tension for smooth curves
        tension: 0.1
      }
    ]
  };
  
  
  return <Line data={chartData} />;
};

export default LineChart;
