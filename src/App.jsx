import { createRoot } from 'react-dom/client'
import Navbar from "./components/Navbar";
import Container from './components/Container';

let App = (
	<>
		<Navbar />
		<Container />
	</>
);

createRoot(document.getElementById("root")).render(App)