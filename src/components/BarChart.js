import { Bar } from 'react-chartjs-2'; 
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend 
} from 'chart.js'; 

// Register the necessary Chart.js components so they can be used by react-chartjs-2
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChart = ({ data }) => {
  // Prepare the data for the Bar chart
  const chartData = {
    labels: data.map(item => 
      // Map the data to extract the date labels, formatting them as 'Month Year' (e.g., 'Jan 2021')
      new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
    ),
    datasets: [
      {
        label: 'Volume', // Label for the dataset
        data: data.map(item => item.volume), // Map the data to extract the volume values
        backgroundColor: 'rgba(75, 192, 192, 0.6)' // Set the background color for the bars
      }
    ]
  };

  // Render the Bar chart with the prepared data
  return <Bar data={chartData} />;
};

export default BarChart; // Export the BarChart component as the default export
