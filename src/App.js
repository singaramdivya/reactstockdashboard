import React, { Component } from 'react';
import Header from './components/Header';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import Dropdown from './components/Dropdown';
import './App.css';

// Main App component extending from React.Component
class App extends Component {
  // Initializing state with default values
  state = {
    stockData: [], // Array to hold fetched stock data
    loading: true, // Boolean to handle loading state
    symbol: 'IBM', // Default stock symbol
    isDarkMode: false // Boolean to handle dark mode state
  }

  // Fetch stock data when the component mounts
  componentDidMount() {
    this.fetchStockData();
  }

  // Fetch new stock data when the selected symbol changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.symbol !== this.state.symbol) {
      this.fetchStockData();
    }
  }

  // Function to fetch stock data from API
  fetchStockData = () => {
    this.setState({ loading: true }); // Set loading state to true
    const apiKey = 'BU7JDG3U5PWT90IQ';
    const { symbol } = this.state;
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY&symbol=${symbol}&apikey=${apiKey}`;

    // Fetch data from the API
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const timeSeries = data['Monthly Time Series'];
        if (!timeSeries) {
          throw new Error('No data found in response');
        }

        // Format the data into an array of objects
        const formattedData = Object.keys(timeSeries).map(date => ({
          date,
          open: parseFloat(timeSeries[date]['1. open']),
          high: parseFloat(timeSeries[date]['2. high']),
          low: parseFloat(timeSeries[date]['3. low']),
          close: parseFloat(timeSeries[date]['4. close']),
          volume: parseInt(timeSeries[date]['5. volume'])
        })).reverse();

        // Update state with fetched data and set loading to false
        this.setState({
          stockData: formattedData,
          loading: false
        });
      })
      .catch(error => {
        console.error('Error fetching the stock data:', error);
        this.setState({ loading: false }); // Set loading to false on error
      });
  };

  // Function to toggle dark mode
  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode // Toggle the isDarkMode state
    }));
  };

  // Render method to display the UI
  render() {
    const { stockData, loading, symbol, isDarkMode } = this.state;

    // Show loader if data is still loading
    if (loading) {
      return (
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      );
    }

    // Main UI when data is loaded
    return (
      <div className={`app ${isDarkMode ? 'dark-mode' : ''}`}> {/* Apply dark mode class if isDarkMode is true */}
        <Header onToggle={this.toggleDarkMode} /> {/* Pass toggleDarkMode function to Header component */}
        <Dropdown symbol={symbol} setSymbol={symbol => this.setState({ symbol })} /> {/* Dropdown to select stock symbol */}
        <div className="charts">
          <LineChart data={stockData} /> {/* Line chart for stock data */}
          <BarChart data={stockData} /> {/* Bar chart for stock data */}
        </div>
      </div>
    );
  }
}

export default App;

