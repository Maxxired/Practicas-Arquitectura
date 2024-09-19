import React from 'react';

const initialState = { count: 0 };

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function Counter() {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Contador</h1>
                <p className="text-4xl font-semibold text-center text-blue-600 mb-6">Count: {state.count}</p>
                <div className="flex justify-center space-x-6">
                    <button
                        className="bg-green-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-green-600 transition duration-300"
                        onClick={() => dispatch({ type: 'increment' })}
                    >
                        +
                    </button>
                    <button
                        className="bg-red-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:bg-red-600 transition duration-300"
                        onClick={() => dispatch({ type: 'decrement' })}
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Counter;
