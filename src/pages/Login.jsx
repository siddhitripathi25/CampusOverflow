// import { createRoot } from "react-dom/client";
import Navbar from "../components/Navbar";
import LoginContainer from "../components/LoginContainer";


export default function Login() {
	return (
		<div className="flex">
			<Navbar />
            <LoginContainer />
		</div>
	);
}
