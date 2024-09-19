import React from 'react';

const Welcome: React.FC = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">¡Bienvenido!</h1>
                <p className="text-lg text-gray-600 mb-6">
                    Esta es la pagina principal
                </p>
                <button
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    onClick={() => alert('¡Esperamos que disfrutes tu visita!')}
                >
                    Empezar
                </button>
            </div>
        </div>
    );
};

export default Welcome;