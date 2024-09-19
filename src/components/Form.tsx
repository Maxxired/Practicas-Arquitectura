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
        <div>
            <div className='flex items-center justify-center bg-slate-500 w-auto  my-4'>
                <form onSubmit={agregarUsuario}>
                    <div className='flex flex-col py-4 px-2'>
                        <h1 className='text-xl font-semibold'> Agrega un usuario</h1>
                        <div className='flex flex-col mt-1'>
                            <label className='font-medium text-left' htmlFor="">Nombre</label>
                            <input
                                className='my-2 rounded-md p-2'
                                type="text"
                                placeholder="Nombre"
                                value={nombre}
                                onChange={(e) => setNombre(e.target.value)}
                            />
                        </div>
                        <div className='flex flex-col mt-1'>
                            <label className='text-left font-medium' htmlFor="">Edad</label>
                            <input
                                className='my-2 rounded-md p-2'
                                type="number"
                                placeholder="Edad"
                                value={edad}
                                onChange={(e) => setEdad(parseInt(e.target.value))}
                            />
                        </div>


                        <div className='flex my-1 justify-between'>
                            <label className='font-medium' htmlFor="">Es estudiante?</label>
                            <input
                                className='w-5 rounded-lg'
                                type="checkbox"
                                checked={esEstudiante}
                                onChange={(e) => setEsEstudiante(e.target.checked)}
                            />
                        </div>

                        <div className='flex flex-col'>
                            <label className='text-left font-medium' htmlFor="">Direccion</label>
                            <input
                                className='my-2 rounded-md p-2'
                                type="text"
                                placeholder="Direccion"
                                value={direccion}
                                onChange={(e) => setDireccion(e.target.value)}
                            />
                        </div>

                    </div>
                    <div className='flex justify-around'>
                        <button className='mb-2 bg-blue-600 rounded-lg w-auto py-2 px-2 text-white' type="submit">Agregar</button>
                        <button className='mb-2 bg-red-600 rounded-lg w-auto py-2 px-2 text-white' onClick={clearUsuario}>Limpiar</button>
                    </div>
                </form>
            </div>

            <div className='bg-slate-400 p-4 rounded-lg shadow-md'>
                <ul className='space-y-4'>
                    {usuario.map((usuario, index) => (
                        <li key={index} className='bg-white p-4 rounded-lg shadow-sm'>
                            <p className='font-medium text-lg'>Nombre: {usuario.nombre}</p>
                            <p className='font-medium text-lg'>Edad: {usuario.edad}</p>
                            <p className='font-medium text-lg'>Es estudiante: {usuario.esEstudiante ? 'Sí' : 'No'}</p>
                            <p className='font-medium text-lg'>Dirección: {usuario.direccion}</p>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default Form;