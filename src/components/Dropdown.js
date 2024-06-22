import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './style.css';

// Register the necessary components from Chart.js for the Bar chart to function
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const Dropdown = ({ symbol, setSymbol }) => {
    // Return the JSX to render the dropdown component
    return (
        <div className="data-selector">
            {/* Label for the dropdown */}
            <label htmlFor="symbol">Select Stock Symbol: </label>
            {/* Dropdown select element */}
            <select id="symbol" value={symbol} onChange={e => setSymbol(e.target.value)}>
                {/* Options for the dropdown, each representing a stock symbol */}
                <option value="IBM">IBM</option>
                <option value="AAPL">AAPL</option>
                <option value="GOOGL">GOOGL</option>
                <option value="MSFT">MSFT</option>
            </select>
        </div>
    );
};

// Export the Dropdown component as the default export of this module
export default Dropdown;
