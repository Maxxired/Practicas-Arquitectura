import React, { useState } from 'react';


interface Usuario {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
    direccion: string;
}

const Form: React.FC = () => {

    const [nombre, setNombre] = useState<string>('');
    const [edad, setEdad] = useState<number>(0);
    const [esEstudiante, setEsEstudiante] = useState<boolean>(false);
    const [direccion, setDireccion] = useState<string>('');
    const [usuario, setUsuario] = useState<Usuario[]>([]);

    const agregarUsuario = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const nuevoUsuario: Usuario = { nombre, edad, esEstudiante, direccion };

        setUsuario([...usuario, nuevoUsuario]);

        setNombre('');
        setEdad(0);
        setEsEstudiante(false);
        setDireccion('');

    }

    const clearUsuario = () => {
        setUsuario([]);
    }


    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 w-full sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-slate-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-lg"></div>
                <div className="relative bg-white shadow-lg sm:rounded-lg px-6 py-8">
                    <form onSubmit={agregarUsuario}>
                        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Agrega un Usuario</h1>

                        <div className="space-y-4">
                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-700" htmlFor="nombre">Nombre</label>
                                <input
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Nombre"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-700" htmlFor="edad">Edad</label>
                                <input
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                    type="number"
                                    placeholder="Edad"
                                    value={edad}
                                    onChange={(e) => setEdad(parseInt(e.target.value))}
                                />
                            </div>

                            <div className="flex items-center space-x-3">
                                <label className="font-semibold text-gray-700" htmlFor="esEstudiante">¿Es estudiante?</label>
                                <input
                                    className="h-5 w-5 text-blue-600 border-gray-300 rounded"
                                    type="checkbox"
                                    checked={esEstudiante}
                                    onChange={(e) => setEsEstudiante(e.target.checked)}
                                />
                            </div>

                            <div className="flex flex-col">
                                <label className="font-semibold text-gray-700" htmlFor="direccion">Dirección</label>
                                <input
                                    className="mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300"
                                    type="text"
                                    placeholder="Dirección"
                                    value={direccion}
                                    onChange={(e) => setDireccion(e.target.value)}
                                />
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition duration-300 ease-in-out"
                                    type="submit"
                                >
                                    Agregar
                                </button>
                                <button
                                    className="w-full sm:w-auto bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow-md hover:bg-red-700 transition duration-300 ease-in-out ml-4"
                                    onClick={clearUsuario}
                                    type="button"
                                >
                                    Limpiar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className="mt-10 max-w-2xl mx-auto">
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-4">Lista de Usuarios</h2>
                    <ul className="space-y-4">
                        {usuario.map((usuario, index) => (
                            <li key={index} className="bg-gray-100 p-4 rounded-md shadow-md">
                                <p className="font-medium text-lg">Nombre: {usuario.nombre}</p>
                                <p className="font-medium text-lg">Edad: {usuario.edad}</p>
                                <p className="font-medium text-lg">
                                    Es estudiante: {usuario.esEstudiante ? 'Sí' : 'No'}
                                </p>
                                <p className="font-medium text-lg">Dirección: {usuario.direccion}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Form;