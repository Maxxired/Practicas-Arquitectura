import { faArrowUp91, faChevronRight, faCircleCheck, faHouse, faMemory } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';  // Importa Link

const Sidebar: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='flex'>
            <div className={`bg-gray-800 h-screen p-5 pt-8 ${isOpen ? "w-64" : "w-20"} duration-300 relative`}>
                {/* Button to toggle sidebar */}
                <button
                    className="absolute -right-3 top-9 bg-gray-900 rounded-full p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <FontAwesomeIcon
                        icon={faChevronRight}
                        className={`text-white transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                </button>

                <h1 className={`text-white font-medium text-lg duration-300 ${!isOpen && "scale-0"} origin-left`}>Menu</h1>

                <ul className="pt-6">
                    {/* Enlaza al Dashboard */}
                    <li className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md`}>
                        <Link to="/" className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faHouse} size='xl' />
                            <span className={`${!isOpen && "hidden"} text-lg duration-300`}>Dashboard</span>
                        </Link>
                    </li>

                    {/* Enlaza al Formulario */}
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
                        <Link to="/form" className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faCircleCheck} size='xl' />
                            <span className={`${!isOpen && "hidden"} text-lg duration-300`}>Formulario</span>
                        </Link>
                    </li>

                    {/* Enlaza a UseMemo */}
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
                        <Link to="/use-memo" className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faMemory} size='xl' />
                            <span className={`${!isOpen && "hidden"} text-lg duration-300`}>UseMemory</span>
                        </Link>
                    </li>

                    {/* Enlaza a UseReducer */}
                    <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-700 rounded-md">
                        <Link to="/counter" className="flex items-center gap-x-4">
                            <FontAwesomeIcon icon={faArrowUp91} size='xl' />
                            <span className={`${!isOpen && "hidden"} text-lg duration-300`}>Contador</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
