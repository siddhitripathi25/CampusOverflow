/* eslint-disable react-hooks/static-components */
import { useState } from "react";

export default function Sidebar() {
    const [activeItem, setActiveItem] = useState("Questions");

    const MenuButton = ({ id, label, icon, isIconContainer }) => {
        const isActive = activeItem === id;
        
        return (
            <li 
                onClick={() => setActiveItem(id)}
                className={`flex items-center px-3 py-2 cursor-pointer w-full rounded-md transition-colors ${
                    isActive ? "bg-[#f1f2f3] font-bold text-[#0c0d0e]" : "text-[#525960] hover:bg-[#f1f2f3] hover:text-[#0c0d0e]"
                }`}
            >
                <div className={`mr-2 w-5 h-5 flex items-center justify-center shrink-0 ${isIconContainer ? "bg-blue-100 rounded-full" : ""}`}>
                    {icon}
                </div>
                <span>{label}</span>
            </li>
        );
    };

    return (
        <div className='w-52.5 shrink-0 pt-6 top-16 h-fit text-[#525960] text-[13px] border-r border-[#d6d9dc] pr-2 pb-6 flex flex-col min-h-screen'>
            <ul className='flex flex-col gap-0.5 mb-8 mt-6'>
                <MenuButton 
                    id="Home" 
                    label="Home" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Home" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="m9 2.5 7 5.5v8a1 1 0 0 1-1 1h-4v-5H7v5H3a1 1 0 0 1-1-1V8l7-5.5z"/></svg>}
                />
                <MenuButton 
                    id="Questions" 
                    label="Questions" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Questions" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="M1 9c0-4.36 3.64-8 8-8s8 3.64 8 8-3.64 8-8 8-5.32-2.1-6.75-3.25L1 14.5V9zm8-6C5.7 3 3 5.7 3 9v4l3.15-2.25A5.85 5.85 0 0 0 9 13a6 6 0 0 0 6-6c0-3.3-2.7-6-6-6zm-1 8v1h2v-1H8zM9 5c1.1 0 2 .9 2 2 0 .9-.55 1.25-1.15 1.6-.53.3-.85.6-.85 1.4h-2c0-1.4.75-2.05 1.3-2.35.5-.3.7-.45.7-.65 0-.55-.45-1-1-1-.55 0-1 .45-1 1H6c0-1.65 1.35-3 3-3z"/></svg>}
                />
                <MenuButton 
                    id="AI Assist" 
                    label="AI Assist" 
                    icon={
                        <div className="w-4.5 h-4.5 bg-[#e1e2fc] rounded-full flex items-center justify-center">
                            <svg viewBox='0 0 18 18' className={`w-3 h-3 fill-[#4d52c2]`}><path d="M9 1L6.5 6.5 1 9l5.5 2.5L9 17l2.5-5.5L17 9l-5.5-2.5L9 1z"/></svg>
                        </div>
                    }
                />
                <MenuButton 
                    id="Tags" 
                    label="Tags" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Tags" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="M14.5 4H10L2.5 11.5 6.5 15.5 14 8v-4z"/><circle cx="11.5" cy="5.5" r="1.5"/></svg>}
                />
                
                <div className="h-4"></div> {/* Spacing */}
                
                <MenuButton 
                    id="Challenges" 
                    label="Challenges" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Challenges" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="m9 2-8 12h16L9 2zm0 3.5 4.5 6.5h-9L9 5.5z"/></svg>}
                />
                <MenuButton 
                    id="Chat" 
                    label="Chat" 
                    icon={
                        <div className="w-4.5 h-4.5 bg-[#d0e3f1] rounded-full flex items-center justify-center">
                            <svg viewBox='0 0 18 18' className={`w-3 h-3 fill-[#2c5877]`}><path d="M2 3h14v8H6l-4 4V3zm2 2v2h10V5H4zm0 3v2h7V8H4z"/></svg>
                        </div>
                    }
                />
                <MenuButton 
                    id="Articles" 
                    label="Articles" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Articles" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="M4 2v14h10V2H4zm2 3h6v2H6V5zm6 7H6v-2h6v2zm0-3H6V7h6v2z"/></svg>}
                />
                <MenuButton 
                    id="Users" 
                    label="Users" 
                    icon={<svg viewBox='0 0 18 18' className={`w-4.5 h-4.5 ${activeItem === "Users" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="M5.5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm-7 2C3 9 1 10.5 1 12.5V14h9v-1.5C10 10.5 8 9 5.5 9zm7 0c-.3 0-.6.1-.9.1.5.8.9 1.7.9 2.9V14h5v-1.5C17.5 10.4 15.3 9 12.5 9z"/></svg>}
                />
                
                <div className="h-4"></div> {/* Spacing */}

                <MenuButton 
                    id="Companies" 
                    label="Companies" 
                    icon={<svg viewBox='0 0 18 18' className={`w-[18
                        px] h-4.5 ${activeItem === "Companies" ? "fill-[#0c0d0e]" : "fill-[#525960]"}`}><path d="M2 1v16h14V1H2zm4 11H4v-2h2v2zm0-4H4V6h2v2zm0-4H4V2h2v2zm4 8H8v-2h2v2zm0-4H8V6h2v2zm0-4H8V2h2v2zm4 8h-2v-2h2v2zm0-4h-2V6h2v2zm0-4h-2V2h2v2z"/></svg>}
                />
            </ul>

            
        </div>
    );
}