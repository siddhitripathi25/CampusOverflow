import { createRoot } from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Container from "./src/components/Container";
import Login from "./src/pages/Login";
import Home from "./src/pages/Home";
import Signup from "./src/pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router";

let App = (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='login' element={<Login />}></Route>
			<Route path='signup' element={<Signup />}></Route>
		</Routes>
	</BrowserRouter>
);

createRoot(document.getElementById("root")).render(App);
