import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

export default function Questions() {
	const navigate = useNavigate();
	const [questions, setQuestions] = useState([]);
	const [loading, setLoading] = useState(true);
	const [activeTab, setActiveTab] = useState("Newest");
	const [isMoreOpen, setIsMoreOpen] = useState(false);
	const [isFilterOpen, setIsFilterOpen] = useState(false);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setLoading(true);
		
		let url = "https://api.stackexchange.com/2.3/questions?order=desc&sort=creation&site=stackoverflow&filter=withbody";
		
		if (activeTab === "Active") {
			url = "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow&filter=withbody";
		} else if (activeTab === "Bountied") {
			url = "https://api.stackexchange.com/2.3/questions/featured?order=desc&sort=activity&site=stackoverflow&filter=withbody";
		} else if (activeTab === "Unanswered") {
			url = "https://api.stackexchange.com/2.3/questions/no-answers?order=desc&sort=activity&site=stackoverflow&filter=withbody";
		}

		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setQuestions(data.items || []);
				setLoading(false);
			})
			.catch((err) => {
				console.error(err);
				setLoading(false);
			});
	}, [activeTab]);

	const timeAgo = (date) => {
		const seconds = Math.floor((new Date() - date * 1000) / 1000);
		let interval = Math.floor(seconds / 31536000);
		if (interval >= 1) return interval + " years";
		interval = Math.floor(seconds / 2592000);
		if (interval >= 1) return interval + " months";
		interval = Math.floor(seconds / 86400);
		if (interval >= 1) return interval + " days";
		interval = Math.floor(seconds / 3600);
		if (interval >= 1) return interval + " hours";
		interval = Math.floor(seconds / 60);
		if (interval > 1) return interval + " mins";
		if (interval === 1) return interval + " min";
		return Math.floor(seconds) + " secs";
	};

	const decodeHtml = (html) => {
		let txt = document.createElement("textarea");
		txt.innerHTML = html;
		return txt.value.replace(/<[^>]+>/g, "").trim();
	};

	const tabButtonClass = (tabName) => {
		const base = "px-[10px] py-[8px] border-r border-gray-400 last:border-r-0 transition-colors font-medium";
		if (activeTab === tabName) {
			return `${base} bg-[#e3e6e8] text-[#3b4045]`;
		}
		return `${base} text-[#525960] hover:bg-gray-50 focus:bg-gray-50`;
	};

	return (
		<div className='flex-1 lg:pl-6 pl-4 pr-6 pt-6 pb-20 w-full lg:max-w-182 ml-6'>
	
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-[27px] font-normal text-gray-800 tracking-tight'>Newest Questions</h1>
				<button className='bg-[#0a95ff] font-medium hover:bg-[#0074cc] text-white px-3 py-[0.55rem] rounded-[3px] shadow-sm transition-colors text-[13px]'>
					Ask Question
				</button>
			</div>

		
			<div className='flex flex-wrap gap-4 justify-between items-center mb-4'>
				<div className='text-gray-800 text-[17px] font-normal'>
					{loading ? "..." : "24,160,055"} questions
				</div>

				<div className='flex items-center gap-4'>
					<div className='flex text-[13px] border border-[#9fa6ad] rounded-[3px] overflow-hidden'>
						<button onClick={() => setActiveTab("Newest")} className={tabButtonClass("Newest")}>
							Newest
						</button>
						<button onClick={() => setActiveTab("Active")} className={tabButtonClass("Active")}>
							Active
						</button>
						<button onClick={() => setActiveTab("Bountied")} className={`${tabButtonClass("Bountied")} flex items-center gap-1`}>
							Bountied <span className='bg-blue-500 text-white text-[10px] px-1 py-[0.5px] rounded-[3px] font-bold'>3</span>
						</button>
						<button onClick={() => setActiveTab("Unanswered")} className={tabButtonClass("Unanswered")}>
							Unanswered
						</button>
						<button className='px-[10px] py-[8px] text-[#525960] hover:bg-gray-50 flex items-center gap-1 font-medium'>
							More
							<svg aria-hidden='true' className='w-[10px] h-[10px] fill-gray-500' viewBox='0 0 18 18'><path d='M1 5l8 8 8-8H1z'></path></svg>
						</button>
					</div>

					<button className='flex items-center gap-[6px] text-[13px] font-medium bg-[#e1ecf4] text-[#39739d] border border-[#7aa7c7] rounded-[3px] px-[10px] py-[7px] hover:bg-[#b3d3ea] hover:text-[#2c5877] transition-colors'>
						<svg aria-hidden='true' className='w-4 h-4 fill-[#39739d]' viewBox='0 0 18 18'><path d='M2 4h14v2H2V4zm2 4h10v2H4V8zm2 4h6v2H6v-2z'></path></svg>
						Filter
					</button>
				</div>
			</div>


			<div className='border-t border-gray-200'>
				{loading ? (
					<div className='py-8 text-center text-gray-500 opacity-60'>Loading questions...</div>
				) : (
					questions.map((q) => (
						<div key={q.question_id} className='flex py-4 border-b border-gray-200'>
	
							<div className='flex flex-col items-end w-27 pr-4 gap-1.5 shrink-0 text-[13px]'>
								<div className='text-gray-950'>
									<span className='font-medium'>{q.score}</span> votes
								</div>
								{q.answer_count > 0 ? (
									<div className='text-green-800 border border-green-500 px-1 py-0.5 rounded-[3px] flex items-center gap-1'>
										<span>{q.answer_count}</span> answers
									</div>
								) : (
									<div className='text-gray-500'>
										<span className='font-medium'>{q.answer_count}</span> answers
									</div>
								)}
								<div className='text-gray-500 text-[12px]'>
									{q.view_count} views
								</div>
							</div>

							<div className='flex-1 flex flex-col min-w-0'>
								<a href={q.link} className='text-blue-500 hover:text-blue-600 text-[17px] leading-tight mb-1.5 wrap-break-word -mt-0.5'>
									{decodeHtml(q.title)}
								</a>
								<div className='text-[13px] text-gray-700 line-clamp-2 leading-[1.35] mb-2 wrap-break-word'>
									{q.body ? decodeHtml(q.body) : ""}
								</div>

								<div className='flex flex-wrap items-center justify-between gap-y-2 mt-auto'>
									<div className='flex flex-wrap gap-1'>
										{q.tags.map((tag) => (
											<span key={tag} className='bg-gray-200 text-sky-900 hover:bg-gray-200 hover:text-sky-950 cursor-pointer text-[12px] px-1.5 py-1 rounded-[3px] leading-none mb-1 mr-1'>
												{tag}
											</span>
										))}
									</div>

									<div className='flex items-center text-[12px] ml-auto gap-1 mt-1'>
										{q.owner.profile_image ? (
											<img src={q.owner.profile_image} alt={q.owner.display_name} className='w-4 h-4 rounded-sm object-cover' />
										) : (
											<div className='w-4 h-4 rounded-sm bg-blue-100 flex items-center justify-center text-[8px] text-blue-800'>
												{q.owner.display_name?.charAt(0)}
											</div>
										)}
										<a href={q.owner.link} className='text-blue-500 hover:text-blue-400 mx-1'>
											{q.owner.display_name}
										</a>
										<span className='font-bold text-gray-600'>{q.owner.reputation ? q.owner.reputation.toLocaleString() : ""}</span>
										<span className='text-gray-400 ml-1'>asked {timeAgo(q.creation_date)} ago</span>
									</div>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}