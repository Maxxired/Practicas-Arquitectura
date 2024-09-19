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
        <div className='flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md'>
            <p className='text-2xl font-bold mb-4'>Count: {state.count}</p>
            <div className='space-x-4'>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300'
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
                <button
                    className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-300'
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </button>
            </div>
        </div>
    );
}

export default Counter;