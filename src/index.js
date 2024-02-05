import React from 'react';
import ReactDOM from 'react-dom/';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RefreshWeather from "./RefreshWeather";

function MainContent() {
	return (
			<div className="WeatherApp">
				<header>
					<form
						className="SearchForm"
						id="search-form">
						<input
							type="search"
							placeholder="Enter a city.."
							required
							id="search-form-input"
							className="SearchFormInput"
						/>
						<input
							type="submit"
							value="Search"
							className="SearchFormButton"
						/>
					</form>
				</header>
				<main>
					<div className="WeatherAppData">
						<div>
							<h1
								className="WeatherAppCity"
								id="city"></h1>
							<p className="WeatherAppDetails">
								<span id="time"></span>,<span id="description"></span>
								<br />
								Humidity: <strong id="humidity"></strong>, Wind:{" "}
								<strong id="wind-speed"></strong>
							</p>
						</div>
						<div className="WeatherAppTemperatureContainer">
							<div className="WeatherAppIcon"></div>
							<div id="icon"></div>
							<div
								className="WeatherAppTemperature"
								id="temperature"></div>
							<div className="WeatherAppUnit">°F</div>
						</div>
					</div>
					<div
						className="WeatherForecast"
						id="forecast"></div>
				</main>
			</div>
	);
}

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <RefreshWeather />
	</React.StrictMode>,
	root
);


    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
