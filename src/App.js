import RefreshWeather from './Weather';
import './App.css';

function App() {
  return (
		<div className="App">
			<header className="App-header">
				<h1>React App Weather</h1>
				<RefreshWeather />
      </header>
      
			<div className="footer">
				Coded by
				<a
					href="https://github.com/AngelaLynnSmith"
					target="_blank"
					rel="noreferrer">
					{" "}
					Angela Lynn Smith
				</a>
				, is
				<a href="https://github.com/AngelaLynnSmith/plus-final-project"
					target="_blank"
					rel="noreferrer">
						open-sourced on GitHub 
        </a>
					, and
					<a href="https://Netlify.com" target="_blank" rel="noreferrer">
          hosted on Netlify. </a>
      </div>
      </div>
  );
}

export default App;
