import './App.css';
import Page from './components/Page'

import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Page corpo={0}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
