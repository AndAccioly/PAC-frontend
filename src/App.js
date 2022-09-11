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
					<Route path="perfil" element={<Page corpo={1}/>} />
					<Route path="paciente" element={<Page corpo={11}/>} />
					<Route path="exame" element={<Page corpo={2}/>} />
					<Route path="consulta" element={<Page corpo={3}/>} />
					<Route path="financeiro" element={<Page corpo={4}/>} />
					<Route path="consultorio" element={<Page corpo={5}/>} />
					<Route path="agenda" element={<Page corpo={6}/>} />
					<Route path="cirurgia" element={<Page corpo={7}/>} />
					<Route path="relatorios" element={<Page corpo={8}/>} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

