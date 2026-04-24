import Featured from "./Featured";
import Questions from "./Questions";
import Sidebar from "./Sidebar";

export default function Container() {
	return (
		<div className='max-w-316 mx-auto w-full flex justify-between pt-8 text-sm font-light'>
			<Sidebar />
			<Questions />
			<Featured />
		</div>
	);
}
