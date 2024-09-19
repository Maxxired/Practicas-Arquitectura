import React, { useState } from 'react';

const Sidebar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex'>
            <div className={`bg-gray-800 h-screen p-5 pt-8 ${isOpen ? "w-64" : "w-20"} duration-300 relative`}>
                {/* Button to toggle sidebar */}
                <button
                    className="absolute -right-3 top-9 bg-gray-900 rounded-full p-1"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`transform ${isOpen ? "rotate-180" : ""}`}>🔽</span>
                </button>

                <h1 className={`text-white font-medium text-lg duration-300 ${!isOpen && "scale-0"} origin-left`}>Menu</h1>

                <ul className="pt-6">
                    <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md`}>
                        <span className="material-icons">home</span>
                        <span className={`${!isOpen && "hidden"} duration-300`}>Home</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
                        <span className="material-icons">settings</span>
                        <span className={`${!isOpen && "hidden"} duration-300`}>Settings</span>
                    </li>
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
                        <span className="material-icons">info</span>
                        <span className={`${!isOpen && "hidden"} duration-300`}>About</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;