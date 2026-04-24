export default function Footer() {
    return (
        <footer className="bg-[#0a0c0d] text-[#9199a1] py-8 text-[13px] font-sans">
            <div className="max-w-[1264px] w-full mx-auto px-4 flex flex-col md:flex-row">
                <div className="flex-[0_0_64px] mb-8 md:mb-0 mr-4">
                    <svg aria-hidden="true" className="w-[32px] h-[37px]" viewBox="0 0 32 37" fill="none">
                        <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"/>
                        <path d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z" fill="#F48024"/>
                    </svg>
                </div>
                
                <div className="flex flex-col flex-1">
                    <div className="flex flex-row flex-wrap xl:flex-nowrap gap-6 md:gap-x-12 lg:gap-x-24 mb-6">
                        <div className="flex flex-col flex-1 min-w-[120px]">
                            <h5 className="text-[#c9cdd1] font-bold mb-4 text-[13px]">CAMPUS OVERFLOW</h5>
                            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                                <li><a href="#" className="hover:text-[#c9cdd1]">Questions</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Help</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Chat</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[150px]">
                            <h5 className="text-[#c9cdd1] font-bold mb-4 text-[13px]">BUSINESS</h5>
                            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                                <li><a href="#" className="hover:text-[#c9cdd1]">Stack Internal</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Stack Data Licensing</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Stack Ads</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[120px]">
                            <h5 className="text-[#c9cdd1] font-bold mb-4 text-[13px]">COMPANY</h5>
                            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                                <li><a href="#" className="hover:text-[#c9cdd1]">About</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Press</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Work Here</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Legal</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Contact Us</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Cookie Settings</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Cookie Policy</a></li>
                            </ul>
                        </div>
                        <div className="flex flex-col flex-1 min-w-[180px]">
                            <h5 className="text-[#c9cdd1] font-bold mb-4 text-[13px]">STACK EXCHANGE NETWORK</h5>
                            <ul className="flex flex-col gap-2 m-0 p-0 list-none">
                                <li><a href="#" className="hover:text-[#c9cdd1]">Technology</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Culture & recreation</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Life & arts</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Science</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Professional</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Business</a></li>
                                <li className="mt-4"><a href="#" className="hover:text-[#c9cdd1]">API</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Data</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mt-auto text-[11px] pt-8 md:pt-16 xl:pt-24">
                        <div className="flex flex-col gap-2 w-full">
                            <ul className="flex flex-wrap lg:flex-nowrap gap-3 m-0 p-0 list-none font-medium">
                                <li><a href="#" className="hover:text-[#c9cdd1]">Blog</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Facebook</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Twitter</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-[#c9cdd1]">Instagram</a></li>
                            </ul>
                            <p className="m-0 text-[11px] leading-relaxed">
                                Site design / logo © 2026 Stack Exchange Inc; user contributions licensed under <a href="#" className="underline hover:text-[#c9cdd1]">CC BY-SA</a> . rev 2026.4.23.42490
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
