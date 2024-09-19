import { useMemo, useState } from 'react';

function ExpensiveCalculationComponent({ a, b }: { a: number, b: number }) {
    const calculate = (a: number, b: number) => {
        console.log('Calculating...');
        return a + b;
    };

    const memorizedValue = useMemo(() => calculate(a, b), [a, b]);

    return (
        <div className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-md">
            <p className="text-xl font-semibold text-gray-700">Calculated Value:</p>
            <p className="text-2xl font-bold text-blue-600">{memorizedValue}</p>
        </div>
    );
}

function Calculo() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold text-gray-800 mb-6">Calculadora de Valores</h1>
                <div className="flex flex-col space-y-4 mb-6">
                    <div className="flex items-center space-x-4">
                        <label className="text-lg font-medium text-gray-600">Valor A:</label>
                        <input
                            type='number'
                            value={a}
                            onChange={(e) => setA(parseInt(e.target.value))}
                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                    <div className="flex items-center space-x-4">
                        <label className="text-lg font-medium text-gray-600">Valor B:</label>
                        <input
                            type='number'
                            value={b}
                            onChange={(e) => setB(parseInt(e.target.value))}
                            className="border border-gray-300 p-2 rounded-md w-full"
                        />
                    </div>
                </div>
                <ExpensiveCalculationComponent a={a} b={b} />
            </div>
        </div>
    );
}

export default Calculo;
