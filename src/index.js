import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RefreshWeather from "./RefreshWeather";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RefreshWeather />
      </React.StrictMode>
);

    <body>
			<div className="weather-app">
				<header>
					<form
						className="search-form"
						id="search-form">
						<input
							type="search"
							placeholder="Enter a city.."
							required
							id="search-form-input"
							className="search-form-input"
						/>
						<input
							type="submit"
							value="Search"
							className="search-form-button"
						/>
					</form>
				</header>
				<main>
					<div className="weather-app-data">
						<div>
							<h1
								className="weather-app-city"
								id="city"></h1>
							<p className="weather-app-details">
								<span id="time"></span>,<span id="description"></span>
								<br />
								Humidity: <strong id="humidity"></strong>, Wind:{" "}
								<strong id="wind-speed"></strong>
							</p>
						</div>
						<div className="weather-app-temperature-container">
							<div className="weather-app-icon"></div>
							<div id="icon"></div>
							<div
								className="weather-app-temperature"
								id="temperature"></div>
							<div className="weather-app-unit">°F</div>
						</div>
					</div>
					<div
						className="weather-forecast"
						id="forecast"></div>
				</main>
			</div>
		</body>;
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
