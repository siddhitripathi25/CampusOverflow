import Featured from "./Featured";
import Questions from "./Questions";
import Sidebar from "./Sidebar";

export default function Container() {
	return (
		<div className='container flex flex-row justify-between pt-8 w-screen h-full text-sm font-light'>
			<Sidebar />
			<Questions />
			
			<Featured />
		</div>
	);
}
